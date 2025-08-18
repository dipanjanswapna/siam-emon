
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, PlusCircle, Edit, Trash2, BrainCircuit, BookOpenCheck, Library } from "lucide-react";
import { useState, useEffect, use } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


type Commitment = {
    id: string;
    icon: string;
    title: string;
    description: string;
};

const iconMap = {
    BrainCircuit: <BrainCircuit />,
    BookOpenCheck: <BookOpenCheck />,
    Library: <Library />,
};

export default function AdminPage() {
    const [commitments, setCommitments] = useState<Commitment[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentCommitment, setCurrentCommitment] = useState<Partial<Commitment>>({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchCommitments = async () => {
        setIsLoading(true);
        const commitmentsCollection = collection(db, "commitments");
        const commitmentsSnapshot = await getDocs(commitmentsCollection);
        const commitmentsList = commitmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Commitment));
        setCommitments(commitmentsList);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCommitments();
    }, []);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing && currentCommitment.id) {
            const commitmentDoc = doc(db, "commitments", currentCommitment.id);
            await updateDoc(commitmentDoc, {
                title: currentCommitment.title,
                description: currentCommitment.description,
                icon: currentCommitment.icon,
            });
        } else {
            await addDoc(collection(db, "commitments"), {
                title: currentCommitment.title,
                description: currentCommitment.description,
                icon: currentCommitment.icon,
            });
        }
        closeForm();
        fetchCommitments();
    };

    const openForm = (commitment?: Commitment) => {
        if (commitment) {
            setCurrentCommitment(commitment);
            setIsEditing(true);
        } else {
            setCurrentCommitment({ title: "", description: "", icon: "BrainCircuit" });
            setIsEditing(false);
        }
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        setCurrentCommitment({});
        setIsEditing(false);
    };

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, "commitments", id));
        fetchCommitments();
    };


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">অ্যাডমিন প্যানেল</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            ওয়েবসাইট পরিচালনার জন্য অ্যাডমিন প্যানেলে স্বাগতম।
          </p>
        </header>

        <main className="mt-16">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="commitments">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>প্রতিশ্রুতি ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openForm()}>
                                    <PlusCircle className="mr-2 h-4 w-4" /> নতুন প্রতিশ্রুতি যোগ করুন
                                </Button>
                            </div>
                            <div className="space-y-4">
                                {isLoading ? (
                                    <p>লোড হচ্ছে...</p>
                                ) : (
                                    commitments.map(c => (
                                        <Card key={c.id} className="flex items-center justify-between p-4 bg-primary/5">
                                            <div>
                                                <h3 className="font-bold text-lg">{c.title}</h3>
                                                <p className="text-sm text-muted-foreground">{c.description}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" onClick={() => openForm(c)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="destructive" size="icon" onClick={() => handleDelete(c.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
            </Accordion>
        </main>

      </div>
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isEditing ? 'প্রতিশ্রুতি সম্পাদনা করুন' : 'নতুন প্রতিশ্রুতি যোগ করুন'}</DialogTitle>
                    <DialogDescription>
                        এখানে প্রতিশ্রুতির শিরোনাম, বর্ণনা এবং আইকন যোগ বা পরিবর্তন করুন।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">শিরোনাম</Label>
                        <Input
                            id="title"
                            value={currentCommitment.title || ''}
                            onChange={(e) => setCurrentCommitment({ ...currentCommitment, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">বর্ণনা</Label>
                        <Textarea
                            id="description"
                            value={currentCommitment.description || ''}
                            onChange={(e) => setCurrentCommitment({ ...currentCommitment, description: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="icon">আইকন</Label>
                        <Select
                            value={currentCommitment.icon}
                            onValueChange={(value) => setCurrentCommitment({ ...currentCommitment, icon: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="আইকন নির্বাচন করুন" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="BrainCircuit">গবেষণা (BrainCircuit)</SelectItem>
                                <SelectItem value="BookOpenCheck">প্রকাশনা (BookOpenCheck)</SelectItem>
                                <SelectItem value="Library">লাইব্রেরি (Library)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button type="submit">{isEditing ? 'সংরক্ষণ করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}
