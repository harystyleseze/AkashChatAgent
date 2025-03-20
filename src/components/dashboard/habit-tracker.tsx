"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function HabitTracker() {
  const [currentDate] = useState(new Date())
  const [days, setDays] = useState<Date[]>([])

  // Sample habit data
  const habits = [
    { id: 1, name: "Morning Meditation", days: [0, 1, 2, 4, 5] },
    { id: 2, name: "Exercise", days: [1, 3, 5] },
    { id: 3, name: "Reading", days: [0, 2, 3, 4, 6] },
    { id: 4, name: "Journaling", days: [0, 1, 3, 4, 5, 6] },
  ]

  useEffect(() => {
    // Generate the last 7 days
    const result = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(currentDate.getDate() - i)
      result.push(date)
    }
    setDays(result)
  }, [currentDate])

  // Format day name (e.g., "Mon")
  const formatDay = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short" }).substring(0, 3)
  }

  // Format date (e.g., "15")
  const formatDate = (date: Date) => {
    return date.getDate().toString()
  }

  // Check if a habit was completed on a specific day
  const isCompleted = (habit: (typeof habits)[0], dayIndex: number) => {
    return habit.days.includes(dayIndex)
  }

  // Calculate completion percentage
  const calculateCompletion = (habit: (typeof habits)[0]) => {
    return Math.round((habit.days.length / 7) * 100)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((day, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-xs text-muted-foreground">{formatDay(day)}</span>
            <span className="text-sm font-medium">{formatDate(day)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {habits.map((habit) => (
          <div key={habit.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{habit.name}</span>
              <Badge variant="outline">{calculateCompletion(habit)}%</Badge>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded-md border ${
                    isCompleted(habit, i) ? "bg-primary/20 border-primary/50" : "bg-muted/40 border-border"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

