import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ListTodo, Target } from "lucide-react";

const manifestoPledges = [
  {
    category: "Economic Development",
    pledges: [
      { title: "Create 50,000 New Tech Jobs", status: "In Progress", progress: 40, description: "Partnering with tech firms and establishing innovation hubs." },
      { title: "Support for Small & Medium Enterprises", status: "In Progress", progress: 60, description: "Launched low-interest loan programs and reduced bureaucratic hurdles." },
    ]
  },
  {
    category: "Education",
    pledges: [
      { title: "Build 100 New 'Smart' Schools", status: "Completed", progress: 100, description: "All 100 schools are now operational with digital classrooms." },
      { title: "Free University Education for Top 10% Students", status: "In Progress", progress: 75, description: "Scholarship fund established and processing applications." },
      { title: "Introduce Vocational Training in High Schools", status: "Not Started", progress: 0, description: "Curriculum development is underway." },
    ]
  },
  {
    category: "Healthcare",
    pledges: [
      { title: "Modernize All District Hospitals", status: "In Progress", progress: 50, description: "Upgrades completed in half of the districts, with ongoing work in the rest." },
      { title: "Ensure Clean Drinking Water for Every Village", status: "In Progress", progress: 85, description: "New water treatment plants are operational in most regions." },
    ]
  },
  {
    category: "Infrastructure & Environment",
    pledges: [
      { title: "Repair 1,000 km of Rural Roads", status: "Completed", progress: 100, description: "The project was finished ahead of schedule, improving connectivity." },
      { title: "Plant 1 Million Trees", status: "In Progress", progress: 90, description: "A massive public-private partnership has resulted in nearly 900,000 trees planted." },
    ]
  },
];

export default function ManifestoPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <ListTodo className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">Our Plan & Our Progress</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            We believe in transparency and accountability. Here is our detailed plan for a better Bengal and a live tracker of our progress on key promises. This section is a placeholder to show our commitment to post-election responsibilities.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {manifestoPledges.map((category) => (
            <Card key={category.category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.pledges.map((pledge) => (
                  <div key={pledge.title}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-headline text-xl font-semibold">{pledge.title}</h4>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {pledge.progress === 100 ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Target className="w-5 h-5 text-accent" />
                        )}
                        <span className={pledge.progress === 100 ? "text-green-500" : "text-accent"}>
                          {pledge.status}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground mb-2">{pledge.description}</p>
                    <Progress value={pledge.progress} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
