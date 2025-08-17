import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Handshake, Mail, MapPin, Phone, PiggyBank, FileText } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Handshake className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">Join the Movement</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            Your support is vital to our success. Whether you can volunteer your time, make a donation, or simply spread the word, every action makes a difference.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Contact Form & Info */}
          <div>
            <h2 className="font-headline text-4xl font-bold mb-8 text-foreground">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-lg">
                <CardHeader className="flex-row items-center gap-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="font-headline">Campaign HQ</CardTitle>
                    <CardDescription className="font-body">123 Democracy Lane, Capitol City</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="flex-row items-center gap-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="font-headline">Call Us</CardTitle>
                    <CardDescription className="font-body">(123) 456-7890</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><Mail className="w-6 h-6 text-primary"/> Send a Message or Report an Issue</CardTitle>
                <CardDescription className="font-body">Have a question, feedback, or want to report a local problem? Fill out the form below.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-headline">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-headline">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-headline">Subject</Label>
                    <Input id="subject" placeholder="Question about healthcare" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-headline">Message</Label>
                    <Textarea id="message" placeholder="Your detailed message or problem description..." rows={5} />
                  </div>
                  <Button type="submit" className="w-full font-headline text-lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Donation & Voter Reg */}
          <div className="space-y-12">
             <Card className="shadow-lg bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3"><PiggyBank className="w-8 h-8 text-primary"/> Contribute to the Campaign</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-body text-muted-foreground mb-4">Your generous donation powers our campaign, helping us reach more voters and share our vision for a better Bengal. Every contribution, big or small, makes a real impact.</p>
                    <Button variant="accent" size="lg" className="w-full font-headline text-lg">Donate Now</Button>
                </CardContent>
            </Card>

            <Card id="register-to-vote" className="shadow-lg bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3"><FileText className="w-8 h-8 text-primary"/> Register to Vote</CardTitle>
                    <CardDescription className="font-body">Make your voice heard! Voting is your right and your power.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                   <div>
                     <h4 className="font-bold text-foreground">How to Register:</h4>
                     <ol className="list-decimal list-inside text-muted-foreground space-y-1 mt-2">
                        <li>Check your eligibility to vote.</li>
                        <li>Fill out the voter registration form online or at a local election office.</li>
                        <li>Submit the form with the required identification documents.</li>
                        <li>Confirm your registration status before election day.</li>
                     </ol>
                   </div>
                   <Button asChild className="font-headline">
                     <a href="#" target="_blank" rel="noopener noreferrer">Official Election Commission Site</a>
                   </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
