
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCcw } from "lucide-react";

export default function VoterRegistrationPage() {

    const years = Array.from({ length: (2012 - 1921) + 1 }, (_, i) => 2012 - i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        { value: "01", label: "জানুয়ারি" }, { value: "02", label: "ফেব্রুয়ারি" }, { value: "03", label: "মার্চ" },
        { value: "04", label: "এপ্রিল" }, { value: "05", label: "মে" }, { value: "06", label: "জুন" },
        { value: "07", label: "জুলাই" }, { value: "08", label: "আগস্ট" }, { value: "09", label: "সেপ্টেম্বর" },
        { value: "10", label: "অক্টোবর" }, { value: "11", label: "নভেম্বর" }, { value: "12", label: "ডিসেম্বর" }
    ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="shadow-lg">
             <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl md:text-5xl">ভোটারের তথ্য অনুসন্ধান করুন</CardTitle>
                 <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                   সৌজন্যে: ঢাকা বিশ্ববিদ্যালয় আইসিটি সেল
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="regno" className="font-headline">রেজিস্ট্রেশন নম্বর (ইংরেজিতে):</Label>
                                <Input id="regno" placeholder="আপনার রেজিস্ট্রেশন নম্বর লিখুন" required />
                            </div>
                             <div>
                                <Label className="font-headline">জন্ম তারিখ:</Label>
                                <div className="flex gap-2">
                                    <Select name="yyyy">
                                        <SelectTrigger><SelectValue placeholder="বছর" /></SelectTrigger>
                                        <SelectContent>
                                            {years.map(year => <SelectItem key={year} value={String(year)}>{year}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select name="mm">
                                        <SelectTrigger><SelectValue placeholder="মাস" /></SelectTrigger>
                                        <SelectContent>
                                            {months.map(month => <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select name="dd">
                                        <SelectTrigger><SelectValue placeholder="দিন" /></SelectTrigger>
                                        <SelectContent>
                                            {days.map(day => <SelectItem key={day} value={String(day).padStart(2, '0')}>{day}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                 <Label htmlFor="cpt" className="font-headline">যোগফল কত: 84 + 9 = ?</Label>
                                <Input id="cpt" required />
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">অনুসন্ধান করুন</Button>
                                <Button type="button" variant="outline"><RefreshCcw className="mr-2 h-4 w-4" /> রিফ্রেশ</Button>
                            </div>
                        </form>
                    </div>
                     <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40%]">বিবরণ</TableHead>
                                    <TableHead>তথ্য</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow><TableCell className="font-medium">ভোটার নম্বর</TableCell><TableCell>-</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">রেজিস্ট্রেশন নম্বর</TableCell><TableCell>-</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">নাম</TableCell><TableCell>-</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">হল</TableCell><TableCell>-</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">বিভাগ/ইনস্টিটিউট</TableCell><TableCell>-</TableCell></TableRow>
                                <TableRow><TableCell className="font-medium">প্রোগ্রাম</TableCell><TableCell>-</TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
