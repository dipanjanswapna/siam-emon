
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, PlusCircle, Edit, Trash2, BrainCircuit, BookOpenCheck, Library, Award, FileText, Mic, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
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

type AcademicAchievement = {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    imageHint: string;
};

const iconMap = {
    BrainCircuit: <BrainCircuit />,
    BookOpenCheck: <BookOpenCheck />,
    Library: <Library />,
    Award: <Award />,
    FileText: <FileText />,
    Mic: <Mic />,
    GraduationCap: <GraduationCap />,
};

export default function AdminPage() {
    const [commitments, setCommitments] = useState<Commitment[]>([]);
    const [academicAchievements, setAcademicAchievements] = useState<AcademicAchievement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [isCommitmentFormOpen, setIsCommitmentFormOpen] = useState(false);
    const [currentCommitment, setCurrentCommitment] = useState<Partial<Commitment>>({});
    const [isEditingCommitment, setIsEditingCommitment] = useState(false);

    const [isAchievementFormOpen, setIsAchievementFormOpen] = useState(false);
    const [currentAchievement, setCurrentAchievement] = useState<Partial<AcademicAchievement>>({});
    const [isEditingAchievement, setIsEditingAchievement] = useState(false);


    const fetchCommitments = async () => {
        setIsLoading(true);
        const commitmentsCollection = collection(db, "commitments");
        const commitmentsSnapshot = await getDocs(commitmentsCollection);
        const commitmentsList = commitmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Commitment));
        setCommitments(commitmentsList);
        setIsLoading(false);
    };
    
    const fetchAcademicAchievements = async () => {
        setIsLoading(true);
        const achievementsCollection = collection(db, "academicAchievements");
        const achievementsSnapshot = await getDocs(achievementsCollection);
        const achievementsList = achievementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AcademicAchievement));
        setAcademicAchievements(achievementsList);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCommitments();
        fetchAcademicAchievements();
    }, []);

    const handleCommitmentFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditingCommitment && currentCommitment.id) {
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
        closeCommitmentForm();
        fetchCommitments();
    };

    const openCommitmentForm = (commitment?: Commitment) => {
        if (commitment) {
            setCurrentCommitment(commitment);
            setIsEditingCommitment(true);
        } else {
            setCurrentCommitment({ title: "", description: "", icon: "BrainCircuit" });
            setIsEditingCommitment(false);
        }
        setIsCommitmentFormOpen(true);
    };

    const closeCommitmentForm = () => {
        setIsCommitmentFormOpen(false);
        setCurrentCommitment({});
        setIsEditingCommitment(false);
    };

    const handleDeleteCommitment = async (id: string) => {
        await deleteDoc(doc(db, "commitments", id));
        fetchCommitments();
    };

    const handleAchievementFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditingAchievement && currentAchievement.id) {
            const achievementDoc = doc(db, "academicAchievements", currentAchievement.id);
            await updateDoc(achievementDoc, {
                title: currentAchievement.title,
                description: currentAchievement.description,
                icon: currentAchievement.icon,
                image: currentAchievement.image,
                imageHint: currentAchievement.imageHint,
            });
        } else {
            await addDoc(collection(db, "academicAchievements"), {
                title: currentAchievement.title,
                description: currentAchievement.description,
                icon: currentAchievement.icon,
                image: currentAchievement.image,
                imageHint: currentAchievement.imageHint,
            });
        }
        closeAchievementForm();
        fetchAcademicAchievements();
    };

    const openAchievementForm = (achievement?: AcademicAchievement) => {
        if (achievement) {
            setCurrentAchievement(achievement);
            setIsEditingAchievement(true);
        } else {
            setCurrentAchievement({ title: "", description: "", icon: "Award", image: "https://placehold.co/600x400.png", imageHint: "" });
            setIsEditingAchievement(false);
        }
        setIsAchievementFormOpen(true);
    };

    const closeAchievementForm = () => {
        setIsAchievementFormOpen(false);
        setCurrentAchievement({});
        setIsEditingAchievement(false);
    };

    const handleDeleteAchievement = async (id: string) => {
        await deleteDoc(doc(db, "academicAchievements", id));
        fetchAcademicAchievements();
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
            <Accordion type="multiple" className="w-full space-y-4">
                <AccordionItem value="commitments">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>প্রতিশ্রুতি ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openCommitmentForm()}>
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
                                                <Button variant="outline" size="icon" onClick={() => openCommitmentForm(c)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="destructive" size="icon" onClick={() => handleDeleteCommitment(c.id)}>
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
                <AccordionItem value="academic-achievements">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>একাডেমিক অর্জন ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openAchievementForm()}>
                                    <PlusCircle className="mr-2 h-4 w-4" /> নতুন অর্জন যোগ করুন
                                </Button>
                            </div>
                            <div className="space-y-4">
                                {isLoading ? (
                                    <p>লোড হচ্ছে...</p>
                                ) : (
                                    academicAchievements.map(a => (
                                        <Card key={a.id} className="flex items-center justify-between p-4 bg-primary/5">
                                            <div>
                                                <h3 className="font-bold text-lg">{a.title}</h3>
                                                <p className="text-sm text-muted-foreground">{a.description}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" onClick={() => openAchievementForm(a)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="destructive" size="icon" onClick={() => handleDeleteAchievement(a.id)}>
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

      {/* Commitment Form Dialog */}
      <Dialog open={isCommitmentFormOpen} onOpenChange={setIsCommitmentFormOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isEditingCommitment ? 'প্রতিশ্রুতি সম্পাদনা করুন' : 'নতুন প্রতিশ্রুতি যোগ করুন'}</DialogTitle>
                    <DialogDescription>
                        এখানে প্রতিশ্রুতির শিরোনাম, বর্ণনা এবং আইকন যোগ বা পরিবর্তন করুন।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCommitmentFormSubmit} className="space-y-4">
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
                        <Button type="submit">{isEditingCommitment ? 'সংরক্ষণ করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeCommitmentForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        
        {/* Academic Achievement Form Dialog */}
        <Dialog open={isAchievementFormOpen} onOpenChange={setIsAchievementFormOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isEditingAchievement ? 'অর্জন সম্পাদনা করুন' : 'নতুন অর্জন যোগ করুন'}</DialogTitle>
                    <DialogDescription>
                        এখানে একাডেমিক অর্জনের শিরোনাম, বর্ণনা, আইকন এবং ছবি যোগ বা পরিবর্তন করুন।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAchievementFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="ach-title">শিরোনাম</Label>
                        <Input
                            id="ach-title"
                            value={currentAchievement.title || ''}
                            onChange={(e) => setCurrentAchievement({ ...currentAchievement, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ach-description">বর্ণনা</Label>
                        <Textarea
                            id="ach-description"
                            value={currentAchievement.description || ''}
                            onChange={(e) => setCurrentAchievement({ ...currentAchievement, description: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ach-icon">আইকন</Label>
                        <Select
                            value={currentAchievement.icon}
                            onValueChange={(value) => setCurrentAchievement({ ...currentAchievement, icon: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="আইকন নির্বাচন করুন" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Award">ডিন'স অ্যাওয়ার্ড (Award)</SelectItem>
                                <SelectItem value="FileText">গবেষণা প্রকাশনা (FileText)</SelectItem>
                                <SelectItem value="Mic">জাতীয় সম্মেলনে অংশগ্রহণ (Mic)</SelectItem>
                                <SelectItem value="GraduationCap">মেধা বৃত্তি (GraduationCap)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="ach-image">ছবির URL</Label>
                        <Input
                            id="ach-image"
                            value={currentAchievement.image || ''}
                            onChange={(e) => setCurrentAchievement({ ...currentAchievement, image: e.target.value })}
                            placeholder="https://placehold.co/600x400.png"
                            required
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="ach-image-hint">ছবির Hint (for AI)</Label>
                        <Input
                            id="ach-image-hint"
                            value={currentAchievement.imageHint || ''}
                            onChange={(e) => setCurrentAchievement({ ...currentAchievement, imageHint: e.target.value })}
                             placeholder="e.g. award ceremony"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">{isEditingAchievement ? 'সংরক্ষণ করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeAchievementForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}

    