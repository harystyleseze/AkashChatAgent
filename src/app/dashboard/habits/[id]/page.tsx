"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "../../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../../components/dashboard/dashboard-shell"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Check, Edit, Trash } from "lucide-react"
import Link from "next/link"

// Sample habit data - in a real app, this would come from an API or database
const habitsData = {
  "1": {
    id: "1",
    name: "Morning Meditation",
    description: "10 minutes of mindfulness meditation after waking up",
    frequency: "Daily",
    streak: 7,
    totalCompletions: 28,
    status: "Active",
    timeOfDay: "Morning",
    duration: "10 minutes",
    startDate: "2025-02-15",
    notes:
      "Focus on breath awareness and body scanning techniques. This habit helps me start the day with clarity and calmness.",
    reminderEnabled: true,
    reminderTime: "07:00",
    completionHistory: [
      { date: "2025-03-19", completed: true },
      { date: "2025-03-18", completed: true },
      { date: "2025-03-17", completed: true },
      { date: "2025-03-16", completed: true },
      { date: "2025-03-15", completed: true },
      { date: "2025-03-14", completed: true },
      { date: "2025-03-13", completed: true },
      { date: "2025-03-12", completed: false },
      { date: "2025-03-11", completed: true },
      { date: "2025-03-10", completed: true },
      { date: "2025-03-09", completed: false },
      { date: "2025-03-08", completed: true },
      { date: "2025-03-07", completed: true },
      { date: "2025-03-06", completed: true },
    ],
  },
  "2": {
    id: "2",
    name: "Exercise",
    description: "30 minutes of moderate physical activity",
    frequency: "3 times per week",
    streak: 2,
    totalCompletions: 12,
    status: "Active",
    timeOfDay: "Evening",
    duration: "30 minutes",
    startDate: "2025-02-20",
    notes: "Mix of cardio and strength training. Focus on consistency rather than intensity.",
    reminderEnabled: true,
    reminderTime: "18:00",
    completionHistory: [
      { date: "2025-03-19", completed: true },
      { date: "2025-03-17", completed: true },
      { date: "2025-03-15", completed: false },
      { date: "2025-03-12", completed: true },
      { date: "2025-03-10", completed: true },
      { date: "2025-03-08", completed: false },
      { date: "2025-03-05", completed: true },
      { date: "2025-03-03", completed: true },
      { date: "2025-03-01", completed: true },
    ],
  },
}

export default function HabitDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const habitId = params.id as string

  // Get habit data - in a real app, this would be fetched from an API
  const habitData = habitsData[habitId]

  const [isEditing, setIsEditing] = useState(false)
  const initialFormData = habitData
    ? {
        name: habitData.name,
        description: habitData.description,
        frequency: habitData.frequency,
        timeOfDay: habitData.timeOfDay,
        duration: habitData.duration,
        notes: habitData.notes,
        reminderEnabled: habitData.reminderEnabled,
        reminderTime: habitData.reminderTime,
        status: habitData.status,
      }
    : {
        name: "",
        description: "",
        frequency: "Daily",
        timeOfDay: "Morning",
        duration: "10 minutes",
        notes: "",
        reminderEnabled: false,
        reminderTime: "07:00",
        status: "Active",
      }
  const [formData, setFormData] = useState(initialFormData)
  const [isLoading, setIsLoading] = useState(false)

  // If habit not found, show error
  if (!habitData) {
    return (
      <DashboardShell>
        <DashboardHeader heading="Habit Not Found" text="The requested habit could not be found">
          <Button variant="outline" asChild>
            <Link href="/dashboard/habits">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Habits
            </Link>
          </Button>
        </DashboardHeader>

        <Card>
          <CardContent className="py-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-semibold">Habit Not Found</h2>
              <p className="text-muted-foreground mt-2">
                The habit you're looking for doesn't exist or has been deleted.
              </p>
              <Button className="mt-6" asChild>
                <Link href="/dashboard/habits">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Habits
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </DashboardShell>
    )
  }

  const handleSave = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsEditing(false)
      toast({
        title: "Habit updated",
        description: "Your habit has been updated successfully.",
      })
    }, 1000)
  }

  const handleDelete = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Habit deleted",
        description: "Your habit has been deleted successfully.",
      })
      router.push("/dashboard/habits")
    }, 1000)
  }

  const handleMarkComplete = () => {
    toast({
      title: "Habit completed",
      description: `You've marked "${habitData.name}" as complete for today.`,
    })
  }

  // Calculate completion rate
  const completionRate = habitData.completionHistory
    ? Math.round(
        (habitData.completionHistory.filter((day) => day.completed).length / habitData.completionHistory.length) * 100,
      )
    : 0

  return (
    <DashboardShell>
      <DashboardHeader heading={habitData.name} text={habitData.description}>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard/habits">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
          </Button>

          {!isEditing && (
            <>
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button onClick={handleMarkComplete}>
                <Check className="mr-2 h-4 w-4" /> Mark Complete
              </Button>
            </>
          )}
        </div>
      </DashboardHeader>

      <div className="grid gap-6">
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            {isEditing ? (
              <Card>
                <CardHeader>
                  <CardTitle>Edit Habit</CardTitle>
                  <CardDescription>Update your habit details and settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Habit Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select
                        value={formData.frequency}
                        onValueChange={(value) => setFormData({ ...formData, frequency: value })}
                      >
                        <SelectTrigger id="frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Daily">Daily</SelectItem>
                          <SelectItem value="Weekdays">Weekdays</SelectItem>
                          <SelectItem value="Weekends">Weekends</SelectItem>
                          <SelectItem value="3 times per week">3 times per week</SelectItem>
                          <SelectItem value="Weekly">Weekly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeOfDay">Time of Day</Label>
                      <Select
                        value={formData.timeOfDay}
                        onValueChange={(value) => setFormData({ ...formData, timeOfDay: value })}
                      >
                        <SelectTrigger id="timeOfDay">
                          <SelectValue placeholder="Select time of day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Morning">Morning</SelectItem>
                          <SelectItem value="Afternoon">Afternoon</SelectItem>
                          <SelectItem value="Evening">Evening</SelectItem>
                          <SelectItem value="Night">Night</SelectItem>
                          <SelectItem value="Anytime">Anytime</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status">Status</Label>
                      <Select
                        value={formData.status}
                        onValueChange={(value) => setFormData({ ...formData, status: value })}
                      >
                        <SelectTrigger id="status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Active">Active</SelectItem>
                          <SelectItem value="Inactive">Inactive</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="reminderEnabled">Enable Reminder</Label>
                      <Switch
                        id="reminderEnabled"
                        checked={formData.reminderEnabled}
                        onCheckedChange={(checked) => setFormData({ ...formData, reminderEnabled: checked })}
                      />
                    </div>

                    {formData.reminderEnabled && (
                      <div className="space-y-2">
                        <Label htmlFor="reminderTime">Reminder Time</Label>
                        <Input
                          id="reminderTime"
                          type="time"
                          value={formData.reminderTime}
                          onChange={(e) => setFormData({ ...formData, reminderTime: e.target.value })}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
                    <Trash className="mr-2 h-4 w-4" /> Delete Habit
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isLoading}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Habit Details</CardTitle>
                    <CardDescription>Information about your habit</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Frequency</h3>
                        <p className="text-sm">{habitData.frequency}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Time of Day</h3>
                        <p className="text-sm">{habitData.timeOfDay}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
                        <p className="text-sm">{habitData.duration}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Start Date</h3>
                        <p className="text-sm">{habitData.startDate}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                        <p className="text-sm">{habitData.status}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Reminder</h3>
                        <p className="text-sm">{habitData.reminderEnabled ? `${habitData.reminderTime}` : "Not set"}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Notes</h3>
                      <p className="text-sm mt-1">{habitData.notes}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Progress</CardTitle>
                    <CardDescription>Your habit streak and completion rate</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Current Streak</h3>
                        <p className="text-3xl font-bold">{habitData.streak} days</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Total Completions</h3>
                        <p className="text-3xl font-bold">{habitData.totalCompletions}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-muted-foreground">Completion Rate</h3>
                        <span className="text-sm font-medium">{completionRate}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: `${completionRate}%` }}></div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full" onClick={handleMarkComplete}>
                        <Check className="mr-2 h-4 w-4" /> Mark Complete for Today
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Completion History</CardTitle>
                <CardDescription>Track your habit completion over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-7 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar view of completion history */}
                  <div className="space-y-2">
                    {Array.from({ length: 2 }, (_, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 7 }, (_, dayIndex) => {
                          const historyIndex = weekIndex * 7 + dayIndex
                          const dayData = habitData.completionHistory[historyIndex]

                          return (
                            <div
                              key={dayIndex}
                              className={`h-12 rounded-md border flex flex-col items-center justify-center ${
                                dayData
                                  ? dayData.completed
                                    ? "bg-primary/20 border-primary/50"
                                    : "bg-muted/40 border-border"
                                  : "bg-muted/20 border-dashed border-muted"
                              }`}
                            >
                              {dayData && (
                                <>
                                  <span className="text-xs text-muted-foreground">
                                    {new Date(dayData.date).getDate()}
                                  </span>
                                  {dayData.completed && <Check className="h-4 w-4 text-primary" />}
                                </>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Recent Activity</h3>
                    <div className="space-y-2">
                      {habitData.completionHistory.slice(0, 5).map((day, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${day.completed ? "bg-primary" : "bg-muted"}`}></div>
                            <span>{day.date}</span>
                          </div>
                          <span className={day.completed ? "text-primary" : "text-muted-foreground"}>
                            {day.completed ? "Completed" : "Missed"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Habit Analytics</CardTitle>
                <CardDescription>Insights and statistics about your habit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Weekly Completion</h3>
                      <p className="text-2xl font-bold">71%</p>
                      <p className="text-xs text-muted-foreground">5 out of 7 days</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Monthly Completion</h3>
                      <p className="text-2xl font-bold">78%</p>
                      <p className="text-xs text-muted-foreground">+5% from last month</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-muted-foreground">Best Day</h3>
                      <p className="text-2xl font-bold">Monday</p>
                      <p className="text-xs text-muted-foreground">92% completion rate</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Completion by Day of Week</h3>
                    <div className="h-40 w-full">
                      {/* Placeholder for chart - in a real app, use a chart library */}
                      <div className="h-full w-full flex items-end gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                          // Generate random heights for demo
                          const heights = [90, 75, 85, 60, 80, 50, 65]
                          return (
                            <div key={day} className="flex-1 flex flex-col items-center gap-2">
                              <div
                                className="w-full bg-primary/80 rounded-t-sm"
                                style={{ height: `${heights[i]}%` }}
                              ></div>
                              <span className="text-xs">{day}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Insights</h3>
                    <div className="rounded-lg border p-4 space-y-2">
                      <p className="text-sm text-muted-foreground">
                        You're most consistent with this habit on weekdays, especially Monday and Wednesday.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your current 7-day streak is your second longest for this habit.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You tend to miss this habit most often on weekends. Consider adjusting your weekend routine.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

