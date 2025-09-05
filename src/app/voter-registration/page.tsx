
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function VoterSearchPage() {
  
  const years = Array.from({ length: (2012 - 1921) + 1 }, (_, i) => (2012 - i).toString());
  const months = [
    { value: '01', label: 'Jan' }, { value: '02', label: 'Feb' }, { value: '03', label: 'Mar' },
    { value: '04', label: 'Apr' }, { value: '05', label: 'May' }, { value: '06', label: 'Jun' },
    { value: '07', label: 'Jul' }, { value: '08', label: 'Aug' }, { value: '09', label: 'Sep' },
    { value: '10', label: 'Oct' }, { value: '11', label: 'Nov' }, { value: '12', label: 'Dec' },
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="shadow-lg max-w-4xl mx-auto">
             <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl md:text-5xl">ভোটার অনুসন্ধান</CardTitle>
                 <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                   সৌজন্যে: ঢাকা বিশ্ববিদ্যালয় আইসিটি সেল
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Form Section */}
                    <div className="md:col-span-1">
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="regno" className="font-headline">রেজিস্ট্রেশন নম্বর (ইংরেজিতে):</Label>
                                <Input id="regno" placeholder="Enter Registration No" required />
                            </div>
                             <div>
                                <Label className="font-headline">জন্ম তারিখ:</Label>
                                <div className="flex gap-2">
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Year" /></SelectTrigger>
                                        <SelectContent>
                                            {years.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select>
                                        <SelectTrigger><SelectValue placeholder="Month" /></SelectTrigger>
                                        <SelectContent>
                                             {months.map(month => <SelectItem key={month.value} value={month.value}>{month.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                     <Select>
                                        <SelectTrigger><SelectValue placeholder="Day" /></SelectTrigger>
                                        <SelectContent>
                                             {days.map(day => <SelectItem key={day} value={day}>{day}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="cpt" className="font-headline">Solve: 84 + 9 = ?</Label>
                                <Input id="cpt" required />
                            </div>
                            <div className="flex gap-2">
                                <Button type="submit">Search</Button>
                                <Button type="button" variant="outline">Refresh</Button>
                            </div>
                        </form>
                    </div>
                    {/* Result Section */}
                    <div className="md:col-span-1">
                        <div className="border rounded-lg p-4 h-full">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b"><td className="py-2 font-semibold w-1/3">ভোটার নম্বর</td><td className="py-2">-</td></tr>
                                    <tr className="border-b"><td className="py-2 font-semibold w-1/3">রেজিস্ট্রেশন নম্বর</td><td className="py-2">-</td></tr>
                                    <tr className="border-b"><td className="py-2 font-semibold w-1/3">নাম</td><td className="py-2">-</td></tr>
                                    <tr className="border-b"><td className="py-2 font-semibold w-1/3">হল</td><td className="py-2">-</td></tr>
                                    <tr className="border-b"><td className="py-2 font-semibold w-1/3">বিভাগ/ইনস্টিটিউট</td><td className="py-2">-</td></tr>
                                    <tr><td className="py-2 font-semibold w-1/3">প্রোগ্রাম</td><td className="py-2">-</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
