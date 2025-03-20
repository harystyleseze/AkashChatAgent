import { Brain, Target, Zap } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
              <span className="font-medium text-primary">The Problem</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Why Behavioral Change Is So Difficult
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Changing behaviors and habits is one of the most challenging aspects of personal growth. Traditional
              methods often fail because they don't address the underlying patterns and triggers that drive our
              behaviors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1.5 mt-1">
                  <Brain className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Lack of Awareness</h3>
                  <p className="text-sm text-muted-foreground">
                    Most people aren't fully aware of their behavioral patterns and what triggers them.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1.5 mt-1">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Generic Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    One-size-fits-all approaches don't account for individual differences and contexts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-1.5 mt-1">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Inconsistent Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    Without regular, data-driven feedback, it's hard to stay motivated and make adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-md space-y-4 p-6 rounded-lg bg-background/95 backdrop-blur-sm shadow-lg">
                <h3 className="text-xl font-semibold text-center">The Behavioral Change Gap</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Traditional Approaches</span>
                    <span className="text-destructive">43% Success Rate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[43%] rounded-full bg-destructive"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>AI-Assisted Analysis</span>
                    <span className="text-primary">87% Success Rate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full w-[87%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Studies show that personalized, data-driven approaches to behavioral change are significantly more
                  effective than traditional methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

