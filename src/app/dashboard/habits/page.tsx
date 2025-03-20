"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../components/dashboard/dashboard-shell"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Check, Plus } from "lucide-react"
import Link from "next/link"

// Sample habits data
const habitsData = [
  {
    id: "1",
    name: "Morning Meditation",
    description: "10 minutes of mindfulness meditation after waking up",
    frequency: "Daily",
    streak: 7,
    totalCompletions: 28,
    status: "Active",
  },
  {
    id: "2",
    name: "Exercise",
    description: "30 minutes of moderate physical activity",
    frequency: "3 times per week",
    streak: 2,
    totalCompletions: 12,
    status: "Active",
  },
  {
    id: "3",
    name: "Reading",
    description: "Read a book for at least 20 minutes",
    frequency: "Daily",
    streak: 5,
    totalCompletions: 35,
    status: "Active",
  },
  {
    id: "4",
    name: "Journaling",
    description: "Write about your day and reflect on your behaviors",
    frequency: "Daily",
    streak: 10,
    totalCompletions: 42,
    status: "Active",
  },
  {
    id: "5",
    name: "Drink Water",
    description: "Drink at least 8 glasses of water",
    frequency: "Daily",
    streak: 3,
    totalCompletions: 15,
    status: "Active",
  },
  {
    id: "6",
    name: "Limit Social Media",
    description: "Restrict social media use to 30 minutes per day",
    frequency: "Daily",
    streak: 0,
    totalCompletions: 8,
    status: "Inactive",
  },
]

export default function HabitsPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Filter habits based on active tab
  const filteredHabits = habitsData.filter((habit) => {
    if (activeTab === "all") return true
    if (activeTab === "active") return habit.status === "Active"
    if (activeTab === "inactive") return habit.status === "Inactive"
    return true
  })

  return (
    <DashboardShell>
      <DashboardHeader heading="Habit Tracker" text="Monitor and manage your behavioral habits">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Habit
        </Button>
      </DashboardHeader>

      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Habits</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{habitsData.length}</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Habits</CardTitle>
              <Check className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{habitsData.filter((h) => h.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 16v-3a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v3" />
                <rect x="8" y="16" width="8" height="4" rx="1" />
                <path d="M12 12V8" />
                <path d="M8.5 6.5l3.5-3.5 3.5 3.5" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10 days</div>
              <p className="text-xs text-muted-foreground">Journaling</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="all" onValueChange={setActiveTab}>
              <div className="flex items-center justify-between">
                <CardTitle>Your Habits</CardTitle>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>Track and manage your habit formation progress</CardDescription>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredHabits.map((habit) => (
                <Card key={habit.id} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{habit.name}</CardTitle>
                      <Badge variant={habit.status === "Active" ? "default" : "secondary"}>{habit.status}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{habit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Frequency</p>
                        <p className="font-medium">{habit.frequency}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Current Streak</p>
                        <p className="font-medium">{habit.streak} days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total Completions</p>
                        <p className="font-medium">{habit.totalCompletions}</p>
                      </div>
                      <div>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/dashboard/habits/${habit.id}`}>Details</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Calendar</CardTitle>
            <CardDescription>Track your habit completion throughout the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid grid-cols-7 gap-1 text-center">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="font-medium">
                    {day}
                  </div>
                ))}
              </div>

              {habitsData
                .filter((h) => h.status === "Active")
                .slice(0, 4)
                .map((habit) => (
                  <div key={habit.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{habit.name}</span>
                      <span className="text-xs text-muted-foreground">{habit.streak} day streak</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 7 }).map((_, i) => {
                        // Randomly determine if habit was completed for demo purposes
                        const completed = Math.random() > 0.3
                        return (
                          <div
                            key={i}
                            className={`h-8 rounded-md border flex items-center justify-center ${
                              completed ? "bg-primary/20 border-primary/50" : "bg-muted/40 border-border"
                            }`}
                          >
                            {completed && <Check className="h-4 w-4 text-primary" />}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

