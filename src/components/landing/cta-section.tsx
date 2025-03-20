import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">
            <span className="font-medium text-primary">Get Started Today</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Transform Your Behaviors?</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Join thousands of users who are already improving their lives with AkashChat Agent. Start your journey to
            better habits and behaviors today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button asChild size="lg" className="gap-1">
              <Link href="/login">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-col items-center space-y-2">
            <p className="text-sm text-muted-foreground">No credit card required</p>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <p className="text-sm text-muted-foreground">Free 14-day trial</p>
              <div className="h-1 w-1 rounded-full bg-primary"></div>
              <p className="text-sm text-muted-foreground">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

