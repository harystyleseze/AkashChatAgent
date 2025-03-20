import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  BarChart2,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[100px]"></div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-primary">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            <span>Introducing AkashChat Agent</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl">
              Transform Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">Behaviors</span>
                <span className="absolute -bottom-1.5 left-0 z-0 h-3 w-full bg-primary/20 rounded"></span>
              </span>{" "}
              with AI-Powered Analysis
            </h1>
            <p className="mx-auto max-w-[800px] text-lg text-muted-foreground md:text-xl">
              Track, analyze, and improve your behavioral patterns with advanced
              AI models. Gain insights and develop better habits with
              personalized recommendations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="gap-2 rounded-full px-6 font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <Link href="/login">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 rounded-full border-primary/20 px-6 font-medium"
            >
              <Link href="/chat">Try Chat Now</Link>
            </Button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <div className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs shadow-sm border">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">AI-Powered Analysis</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs shadow-sm border">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">Daily Tracking</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs shadow-sm border">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">Personalized Insights</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-xs shadow-sm border">
              <CheckCircle className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium">Data Visualization</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 w-full max-w-6xl">
            <div className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-background p-6 transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl"></div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Brain className="h-7 w-7" />
              </div>
              <div className="relative space-y-2 text-center">
                <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced models analyze your behavioral patterns and provide
                  actionable insights
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-background p-6 transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl"></div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <BarChart2 className="h-7 w-7" />
              </div>
              <div className="relative space-y-2 text-center">
                <h3 className="text-xl font-semibold">Track Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor your improvement over time with detailed analytics and
                  visual reports
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col items-center gap-4 rounded-2xl border bg-background p-6 transition-all hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl"></div>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="relative space-y-2 text-center">
                <h3 className="text-xl font-semibold">Personalized Habits</h3>
                <p className="text-sm text-muted-foreground">
                  Get custom habit recommendations based on your unique patterns
                  and goals
                </p>
              </div>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="hidden sm:flex flex-col items-center mt-8 animate-bounce">
            <span className="text-sm text-muted-foreground">
              Scroll for more
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground rotate-90 mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
