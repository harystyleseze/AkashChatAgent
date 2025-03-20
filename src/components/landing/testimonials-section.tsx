import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            <span className="font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Hear from people who have transformed their lives with AkashChat Agent.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "AkashChat Agent helped me identify patterns in my anxiety that I never noticed before. The personalized
              habit recommendations have made a huge difference in my daily life."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">JD</span>
              </div>
              <div>
                <h4 className="font-semibold">Jamie Davis</h4>
                <p className="text-sm text-muted-foreground">Marketing Professional</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "As a therapist, I've recommended AkashChat Agent to several clients. The scientific approach and
              personalized insights complement traditional therapy beautifully."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">RM</span>
              </div>
              <div>
                <h4 className="font-semibold">Dr. Rachel Martinez</h4>
                <p className="text-sm text-muted-foreground">Clinical Psychologist</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "I've tried many productivity apps, but AkashChat Agent is different. It doesn't just track what I do, it
              helps me understand why I do it and how to improve."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">TK</span>
              </div>
              <div>
                <h4 className="font-semibold">Thomas Kim</h4>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "The ability to choose different AI models is fantastic. I found that DeepSeek-R1 works best for my
              analytical style, while my partner prefers the Meta-Llama models."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">AP</span>
              </div>
              <div>
                <h4 className="font-semibold">Aisha Patel</h4>
                <p className="text-sm text-muted-foreground">Data Scientist</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "As someone with ADHD, traditional habit trackers never worked for me. AkashChat Agent's personalized
              approach has finally helped me build consistent routines."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Michael Johnson</h4>
                <p className="text-sm text-muted-foreground">Graphic Designer</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground">
              "The progress tracking features are incredible. Being able to see my improvement over time has been a huge
              motivator to keep going with my behavioral changes."
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4 border-t">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-semibold text-primary">SL</span>
              </div>
              <div>
                <h4 className="font-semibold">Sarah Lee</h4>
                <p className="text-sm text-muted-foreground">Health Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

