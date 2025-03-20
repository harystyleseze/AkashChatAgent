"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../components/dashboard/dashboard-shell"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewAnalysisPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("Meta-Llama-3-1-70B-Instruct")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Analysis submitted",
        description: "Your behavioral analysis has been submitted successfully.",
      })
      router.push("/dashboard/analyses")
    }, 2000)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="New Behavioral Analysis" text="Create a detailed analysis of your behavioral patterns">
        <Button variant="outline" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Link>
        </Button>
      </DashboardHeader>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Behavior Details</CardTitle>
            <CardDescription>Provide information about the behavior you want to analyze</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="behavior">Current behavior</Label>
                <Textarea
                  id="behavior"
                  placeholder="Describe the behavior you want to analyze in detail..."
                  className="min-h-[120px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="antecedent">Context or environment</Label>
                <Textarea
                  id="antecedent"
                  placeholder="When and where does this behavior occur? What triggers it?"
                  className="min-h-[80px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="consequence">Immediate consequences</Label>
                <Textarea
                  id="consequence"
                  placeholder="What happens right after the behavior? How do others respond?"
                  className="min-h-[80px]"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previous_attempts">Previous attempts to change</Label>
                <Textarea
                  id="previous_attempts"
                  placeholder="What have you tried before to change this behavior?"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emotions_thoughts">Emotional or cognitive context</Label>
                <Textarea
                  id="emotions_thoughts"
                  placeholder="How do you feel before, during, and after this behavior? What thoughts accompany it?"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Analyzing..." : "Submit for Analysis"}
              </Button>
            </CardFooter>
          </form>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Model Selection</CardTitle>
              <CardDescription>Choose the AI model to analyze your behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DeepSeek-R1">DeepSeek-R1</SelectItem>
                  <SelectItem value="DeepSeek-R1-Distill-Llama-70B">DeepSeek-R1-Distill-Llama-70B</SelectItem>
                  <SelectItem value="DeepSeek-R1-Distill-Qwen-14B">DeepSeek-R1-Distill-Qwen-14B</SelectItem>
                  <SelectItem value="DeepSeek-R1-Distill-Qwen-32B">DeepSeek-R1-Distill-Qwen-32B</SelectItem>
                  <SelectItem value="Meta-Llama-3-1-8B-Instruct-FP8">Meta-Llama-3-1-8B-Instruct-FP8</SelectItem>
                  <SelectItem value="Meta-Llama-3-1-405B-Instruct-FP8">Meta-Llama-3-1-405B-Instruct-FP8</SelectItem>
                  <SelectItem value="Meta-Llama-3-2-3B-Instruct">Meta-Llama-3-2-3B-Instruct</SelectItem>
                  <SelectItem value="Meta-Llama-3-1-70B-Instruct">Meta-Llama-3-1-70B-Instruct</SelectItem>
                </SelectContent>
              </Select>

              <div className="mt-6 space-y-2">
                <h4 className="text-sm font-semibold">About this model</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedModel.includes("DeepSeek-R1")
                    ? "DeepSeek R1 models excel at complex reasoning tasks in science, coding, and mathematics. They are optimized to 'think before they answer,' producing detailed internal chains of thought."
                    : selectedModel.includes("Meta-Llama-3")
                      ? "Meta Llama 3 models are versatile and powerful for a wide range of tasks. They offer excellent performance for behavioral analysis with strong reasoning capabilities."
                      : "Select a model to see its description."}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analysis Process</CardTitle>
              <CardDescription>How your behavioral data will be analyzed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">1. Functional Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  The AI will analyze your behavior based on radical behaviorism principles, considering antecedents,
                  consequences, reinforcement patterns, and contextual factors.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">2. Pattern Identification</h4>
                <p className="text-sm text-muted-foreground">
                  The system will identify behavioral patterns, triggers, and maintaining factors that contribute to the
                  behavior.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">3. Habit Recommendations</h4>
                <p className="text-sm text-muted-foreground">
                  Based on the analysis, you'll receive 3-4 practical habit recommendations with scientific backing and
                  implementation steps.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">4. Progress Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  The system will suggest a review process to track your progress and make adjustments as needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  )
}

