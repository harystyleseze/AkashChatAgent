import { Brain, BarChart2, MessageSquare, Settings, Shield, Clock, Lightbulb, RefreshCw, Sparkles } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            <span className="font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Powerful Tools for Behavioral Change
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            AkashChat Agent combines cutting-edge AI with behavioral science to help you understand and improve your
            patterns.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
            <p className="text-muted-foreground">
              Advanced models analyze your behavioral patterns and provide insights based on radical behaviorism
              principles.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Multi-Model Support</h3>
            <p className="text-muted-foreground">
              Choose from various AI models including DeepSeek and Meta-Llama variants to find the one that works best
              for you.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <BarChart2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Progress Tracking</h3>
            <p className="text-muted-foreground">
              Monitor your improvement over time with detailed analytics and visualizations of your behavioral changes.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Personalized Habits</h3>
            <p className="text-muted-foreground">
              Get custom habit recommendations based on your unique patterns and goals, with scientific backing.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Customizable Experience</h3>
            <p className="text-muted-foreground">
              Configure your analysis parameters, choose your preferred AI models, and tailor the experience to your
              needs.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Continuous Learning</h3>
            <p className="text-muted-foreground">
              The system learns from your feedback and progress, continuously improving its recommendations over time.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Privacy-Focused</h3>
            <p className="text-muted-foreground">
              Your data is encrypted and secure. We prioritize your privacy while providing powerful analysis
              capabilities.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Scheduled Check-ins</h3>
            <p className="text-muted-foreground">
              Set up regular check-ins to review your progress and adjust your habits based on new insights.
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-2 rounded-lg border bg-primary/5 p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Scientific Approach</h3>
            <p className="text-muted-foreground">
              Based on principles of radical behaviorism and modern behavioral science, providing evidence-based
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

