import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/50" id="benefits">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            <span className="font-medium text-primary">Benefits</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Transform Your Life with AkashChat Agent
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Experience the powerful benefits of AI-assisted behavioral analysis and change.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Increased Self-Awareness</h3>
            <p className="text-muted-foreground">
              Gain deeper insights into your behavioral patterns, triggers, and responses.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Identify hidden patterns in your behavior</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Understand your emotional triggers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Recognize the impact of your environment</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Sustainable Habit Formation</h3>
            <p className="text-muted-foreground">
              Develop new habits that stick, based on scientific principles and your unique patterns.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Create habits tailored to your specific needs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Build on evidence-based behavioral science</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Track and adjust for long-term success</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Improved Mental Wellbeing</h3>
            <p className="text-muted-foreground">
              Reduce stress and anxiety by understanding and addressing problematic behavioral patterns.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Decrease negative thought patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Build resilience through better coping strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Experience greater emotional regulation</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Enhanced Productivity</h3>
            <p className="text-muted-foreground">Overcome procrastination and develop more efficient work habits.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Identify and eliminate time-wasting behaviors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Develop focused work routines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Balance productivity with well-being</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Better Relationships</h3>
            <p className="text-muted-foreground">
              Improve your interactions with others by understanding your social patterns.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Recognize unhelpful communication patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Develop healthier boundaries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Build more meaningful connections</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Data-Driven Growth</h3>
            <p className="text-muted-foreground">
              Make decisions based on personalized insights rather than generic advice.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Track your progress with objective metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Adjust strategies based on real results</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Celebrate measurable improvements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

