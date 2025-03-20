"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "../../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../../components/dashboard/dashboard-shell"
import { ArrowLeft, Calendar, Check, Clock, Download, MessageSquare, Share2 } from "lucide-react"
import Link from "next/link"

// Sample analysis data
const analysisData = {
  id: "1",
  date: "2025-03-15",
  behavior: "Procrastination on work tasks",
  model: "Meta-Llama-3-1-70B-Instruct",
  status: "Completed",
  analysis: `Your procrastination pattern appears to be maintained by a combination of negative reinforcement (avoiding the discomfort of challenging tasks) and positive reinforcement (the immediate gratification of alternative activities). The behavior occurs most frequently when facing complex or ambiguous tasks, especially in the morning hours.

The antecedents typically involve task complexity, perceived time pressure, and environmental distractions. The immediate consequences include temporary relief from task-related anxiety, but this is followed by increased stress as deadlines approach, creating a self-perpetuating cycle.

Your previous attempts to use time-blocking have shown some success, indicating that structured approaches with clear boundaries may be effective. The emotional context reveals significant anxiety about performance and perfectionism, which contributes to task avoidance.

From a behavioral perspective, this pattern represents both an excess (engagement in distraction behaviors) and a deficit (reduced engagement with priority tasks). The long-term consequences include reduced productivity, increased stress, and negative self-perception, which further reinforces the avoidance pattern.`,
  habits: [
    {
      name: "Implementation Intentions",
      description: "Create specific if-then plans for starting tasks",
      implementation:
        '1. Identify your most common procrastination triggers\n2. For each trigger, create a specific plan in the format: "If [trigger occurs], then I will [specific action]"\n3. Write these plans down and review them daily\n4. Practice implementing your plans immediately when triggers occur',
      scientificBasis:
        "Research by Gollwitzer (1999) shows implementation intentions increase follow-through by 2-3 times compared to mere goal-setting",
      linkToAnalysis:
        "This habit directly addresses the initiation problem in your procrastination pattern by creating automatic responses to known triggers",
    },
    {
      name: "Pomodoro Technique",
      description: "Work in focused intervals with scheduled breaks",
      implementation:
        "1. Set a timer for 25 minutes of focused work\n2. Work only on the chosen task until the timer rings\n3. Take a 5-minute break\n4. After 4 cycles, take a longer 15-30 minute break",
      scientificBasis:
        "Based on psychological research on attention spans and the principle of spaced practice, which shows improved performance and reduced mental fatigue",
      linkToAnalysis:
        "This addresses your difficulty with sustained attention and provides structured breaks that reduce the perceived burden of tasks",
    },
    {
      name: "Environment Restructuring",
      description: "Modify your workspace to reduce distractions",
      implementation:
        "1. Identify your most common environmental distractions\n2. Remove or block these distractions (e.g., website blockers, phone in another room)\n3. Create a dedicated workspace with only task-relevant materials\n4. Use visual cues that signal 'work mode' (e.g., specific lighting, background music)",
      scientificBasis:
        "Environmental psychology research shows that physical surroundings significantly impact behavior through stimulus control principles",
      linkToAnalysis:
        "This directly addresses the environmental triggers that contribute to your procrastination pattern",
    },
    {
      name: "Values Reflection",
      description: "Connect daily tasks to core personal values",
      implementation:
        "1. Identify your core personal and professional values\n2. For each task you tend to procrastinate on, write how it connects to these values\n3. Create a brief (2-minute) reflection ritual before starting work\n4. Periodically review and update your values-task connections",
      scientificBasis:
        "Based on Acceptance and Commitment Therapy (ACT) research showing that value-aligned behaviors increase persistence and reduce avoidance",
      linkToAnalysis:
        "This addresses the motivational component of your procrastination by strengthening the connection between immediate actions and meaningful outcomes",
    },
  ],
  reviewProcess: `To track your progress effectively:

1. **Daily Check-in**: At the end of each day, rate your implementation of each habit on a scale of 1-5 and note any challenges or successes.

2. **Weekly Review**: Every Sunday, review your daily ratings and identify patterns. Which habits were easiest/hardest to implement? What were common obstacles?

3. **Two-Week Assessment**: After two weeks, conduct a comprehensive review:
   - Calculate your consistency percentage for each habit
   - Note changes in your procrastination frequency and intensity
   - Identify which habits seem most effective for you
   - Adjust your implementation strategies based on what you've learned

4. **Habit Refinement**: Based on your two-week assessment, modify your approach:
   - Double down on the most effective habits
   - Adjust or replace habits that aren't working
   - Consider adding one new habit if you've mastered the current ones

Remember that behavioral change is a process, not an event. Small, consistent improvements are more valuable than perfect implementation.`,
}

export default function AnalysisDetailPage() {
  const params = useParams()
  const [analysis, setAnalysis] = useState(analysisData)

  // In a real application, you would fetch the analysis data based on the ID
  useEffect(() => {
    // Simulating API call
    console.log(`Fetching analysis with ID: ${params.id}`)
    // setAnalysis(fetchedData);
  }, [params.id])

  return (
    <DashboardShell>
      <DashboardHeader heading="Behavioral Analysis" text={analysis.behavior}>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/analyses">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
        </div>
      </DashboardHeader>

      <div className="grid gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="md:w-2/3">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analysis Details</CardTitle>
                <Badge>{analysis.model.split("-")[0]}</Badge>
              </div>
              <CardDescription>Completed on {analysis.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Functional Analysis</h3>
                  <div className="text-muted-foreground whitespace-pre-line">{analysis.analysis}</div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Recommended Habits</h3>
                  <div className="space-y-6">
                    {analysis.habits.map((habit, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="rounded-full bg-primary/10 p-1 mt-1">
                            <Check className="h-4 w-4 text-primary" />
                          </div>
                          <h4 className="text-base font-semibold">{habit.name}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground ml-7">{habit.description}</p>
                        <div className="ml-7 mt-2 space-y-3">
                          <div>
                            <h5 className="text-sm font-medium">Implementation:</h5>
                            <p className="text-sm text-muted-foreground whitespace-pre-line">{habit.implementation}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Scientific Basis:</h5>
                            <p className="text-sm text-muted-foreground">{habit.scientificBasis}</p>
                          </div>
                          <div>
                            <h5 className="text-sm font-medium">Link to Analysis:</h5>
                            <p className="text-sm text-muted-foreground">{habit.linkToAnalysis}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Review Process</h3>
                  <div className="text-muted-foreground whitespace-pre-line">{analysis.reviewProcess}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="md:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your implementation of recommended habits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysis.habits.map((habit, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{habit.name}</span>
                        <Badge variant="outline">0%</Badge>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-0 rounded-full bg-primary"></div>
                      </div>
                    </div>
                  ))}

                  <Button className="w-full mt-4">
                    <Calendar className="mr-2 h-4 w-4" /> Start Tracking
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Recommended actions to take</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Schedule Daily Check-ins</h4>
                      <p className="text-xs text-muted-foreground">
                        Set up a reminder to track your habit implementation daily
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Two-Week Review</h4>
                      <p className="text-xs text-muted-foreground">Mark March 29, 2025 for your comprehensive review</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1.5 mt-0.5">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Discuss with AI Assistant</h4>
                      <p className="text-xs text-muted-foreground">
                        Chat with your AI assistant about implementation challenges
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

