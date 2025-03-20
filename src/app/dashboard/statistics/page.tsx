"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../components/dashboard/dashboard-shell"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState, useEffect, useRef } from "react"
import { BarChart2, LineChart, PieChart } from "lucide-react"

export default function StatisticsPage() {
  const [timeRange, setTimeRange] = useState("month")
  const behaviorChartRef = useRef<HTMLCanvasElement>(null)
  const habitChartRef = useRef<HTMLCanvasElement>(null)
  const categoryChartRef = useRef<HTMLCanvasElement>(null)

  // Draw behavior trends chart
  useEffect(() => {
    const canvas = behaviorChartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const parentWidth = canvas.parentElement?.clientWidth || 800
    canvas.width = parentWidth
    canvas.height = 300

    // Data for the chart
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const positiveData = [65, 59, 80, 81, 56, 85]
    const negativeData = [28, 48, 40, 19, 36, 27]

    // Chart configuration
    const chartConfig = {
      padding: 40,
      gridLines: 5,
      pointRadius: 5,
      lineWidth: 3,
      positiveColor: "#10b981", // Green
      negativeColor: "#ef4444", // Red
      gridColor: "#e5e7eb", // Light gray
      textColor: "#6b7280", // Medium gray
      fontFamily: "Inter, sans-serif",
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    const gridStep = (canvas.height - 2 * chartConfig.padding) / chartConfig.gridLines
    ctx.beginPath()
    ctx.strokeStyle = chartConfig.gridColor
    ctx.lineWidth = 1

    for (let i = 0; i <= chartConfig.gridLines; i++) {
      const y = chartConfig.padding + i * gridStep
      ctx.moveTo(chartConfig.padding, y)
      ctx.lineTo(canvas.width - chartConfig.padding, y)
    }
    ctx.stroke()

    // Draw x-axis labels
    ctx.fillStyle = chartConfig.textColor
    ctx.font = `14px ${chartConfig.fontFamily}`
    ctx.textAlign = "center"

    const xStep = (canvas.width - 2 * chartConfig.padding) / (months.length - 1)
    months.forEach((month, i) => {
      const x = chartConfig.padding + i * xStep
      ctx.fillText(month, x, canvas.height - chartConfig.padding / 2)
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    for (let i = 0; i <= chartConfig.gridLines; i++) {
      const y = canvas.height - chartConfig.padding - i * gridStep
      const value = Math.round((i / chartConfig.gridLines) * 100)
      ctx.fillText(`${value}%`, chartConfig.padding - 10, y + 5)
    }

    // Function to draw a line
    const drawLine = (data: number[], color: string) => {
      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = chartConfig.lineWidth

      const maxValue = 100 // Assuming percentage

      data.forEach((value, i) => {
        const x = chartConfig.padding + i * xStep
        const y = canvas.height - chartConfig.padding - (value / maxValue) * (canvas.height - 2 * chartConfig.padding)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })

      ctx.stroke()

      // Draw points
      data.forEach((value, i) => {
        const x = chartConfig.padding + i * xStep
        const y = canvas.height - chartConfig.padding - (value / maxValue) * (canvas.height - 2 * chartConfig.padding)

        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x, y, chartConfig.pointRadius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Draw lines
    drawLine(positiveData, chartConfig.positiveColor)
    drawLine(negativeData, chartConfig.negativeColor)

    // Draw legend
    const legendX = canvas.width - chartConfig.padding - 150
    const legendY = chartConfig.padding + 20

    // Positive behaviors
    ctx.beginPath()
    ctx.fillStyle = chartConfig.positiveColor
    ctx.arc(legendX, legendY, chartConfig.pointRadius, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = chartConfig.textColor
    ctx.textAlign = "left"
    ctx.fillText("Positive Behaviors", legendX + 15, legendY + 5)

    // Negative behaviors
    ctx.beginPath()
    ctx.fillStyle = chartConfig.negativeColor
    ctx.arc(legendX, legendY + 25, chartConfig.pointRadius, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = chartConfig.textColor
    ctx.fillText("Negative Behaviors", legendX + 15, legendY + 30)
  }, [timeRange])

  // Draw habit completion chart
  useEffect(() => {
    const canvas = habitChartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const parentWidth = canvas.parentElement?.clientWidth || 800
    canvas.width = parentWidth
    canvas.height = 300

    // Data for the chart
    const habits = ["Meditation", "Exercise", "Reading", "Journaling", "Water"]
    const completionRates = [85, 60, 75, 90, 65]

    // Chart configuration
    const chartConfig = {
      padding: 40,
      barWidth: 30,
      barColor: "#0ea5e9", // Blue
      gridColor: "#e5e7eb", // Light gray
      textColor: "#6b7280", // Medium gray
      fontFamily: "Inter, sans-serif",
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw grid lines
    const gridStep = (canvas.height - 2 * chartConfig.padding) / 10
    ctx.beginPath()
    ctx.strokeStyle = chartConfig.gridColor
    ctx.lineWidth = 1

    for (let i = 0; i <= 10; i++) {
      const y = canvas.height - chartConfig.padding - i * gridStep
      ctx.moveTo(chartConfig.padding, y)
      ctx.lineTo(canvas.width - chartConfig.padding, y)
    }
    ctx.stroke()

    // Draw y-axis labels
    ctx.fillStyle = chartConfig.textColor
    ctx.font = `14px ${chartConfig.fontFamily}`
    ctx.textAlign = "right"

    for (let i = 0; i <= 10; i++) {
      const y = canvas.height - chartConfig.padding - i * gridStep
      ctx.fillText(`${i * 10}%`, chartConfig.padding - 10, y + 5)
    }

    // Draw bars
    const barSpacing = (canvas.width - 2 * chartConfig.padding) / habits.length

    habits.forEach((habit, i) => {
      const x = chartConfig.padding + i * barSpacing + (barSpacing - chartConfig.barWidth) / 2
      const barHeight = (completionRates[i] / 100) * (canvas.height - 2 * chartConfig.padding)
      const y = canvas.height - chartConfig.padding - barHeight

      // Draw bar
      ctx.fillStyle = chartConfig.barColor
      ctx.fillRect(x, y, chartConfig.barWidth, barHeight)

      // Draw label
      ctx.fillStyle = chartConfig.textColor
      ctx.textAlign = "center"
      ctx.fillText(habit, x + chartConfig.barWidth / 2, canvas.height - chartConfig.padding / 2)

      // Draw percentage
      ctx.fillStyle = "#ffffff"
      ctx.fillText(`${completionRates[i]}%`, x + chartConfig.barWidth / 2, y + 20)
    })
  }, [timeRange])

  // Draw category distribution chart
  useEffect(() => {
    const canvas = categoryChartRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.parentElement?.clientWidth || 300
    canvas.height = 300

    // Only proceed if canvas has sufficient dimensions
    if (canvas.width < 80 || canvas.height < 80) {
      // Draw a message instead of the chart if canvas is too small
      ctx.fillStyle = "#6b7280"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("Canvas too small to render chart", canvas.width / 2, canvas.height / 2)
      return
    }

    // Data for the chart
    const categories = [
      { name: "Health", value: 35, color: "#0ea5e9" }, // Blue
      { name: "Productivity", value: 25, color: "#10b981" }, // Green
      { name: "Mindfulness", value: 20, color: "#8b5cf6" }, // Purple
      { name: "Social", value: 15, color: "#f59e0b" }, // Amber
      { name: "Learning", value: 5, color: "#ef4444" }, // Red
    ]

    // Chart configuration
    const chartConfig = {
      centerX: canvas.width / 2,
      centerY: canvas.height / 2,
      radius: Math.max(10, Math.min(canvas.width, canvas.height) / 2 - 40), // Ensure radius is at least 10px
      textColor: "#6b7280", // Medium gray
      fontFamily: "Inter, sans-serif",
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw pie chart
    let startAngle = 0
    const total = categories.reduce((sum, category) => sum + category.value, 0)

    categories.forEach((category) => {
      const sliceAngle = (2 * Math.PI * category.value) / total

      // Draw slice
      ctx.beginPath()
      ctx.fillStyle = category.color
      ctx.moveTo(chartConfig.centerX, chartConfig.centerY)
      ctx.arc(chartConfig.centerX, chartConfig.centerY, chartConfig.radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      // Draw label
      const labelAngle = startAngle + sliceAngle / 2
      const labelRadius = Math.max(5, chartConfig.radius * 0.7) // Ensure labelRadius is at least 5px
      const labelX = chartConfig.centerX + Math.cos(labelAngle) * labelRadius
      const labelY = chartConfig.centerY + Math.sin(labelAngle) * labelRadius

      ctx.fillStyle = "#ffffff"
      ctx.font = `bold 14px ${chartConfig.fontFamily}`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${category.value}%`, labelX, labelY)

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = 20
    let legendY = canvas.height - 120

    ctx.font = `14px ${chartConfig.fontFamily}`
    ctx.textAlign = "left"
    ctx.textBaseline = "middle"

    categories.forEach((category) => {
      // Draw color box
      ctx.fillStyle = category.color
      ctx.fillRect(legendX, legendY, 15, 15)

      // Draw text
      ctx.fillStyle = chartConfig.textColor
      ctx.fillText(`${category.name} (${category.value}%)`, legendX + 25, legendY + 7.5)

      legendY += 25
    })
  }, [])

  return (
    <DashboardShell>
      <DashboardHeader heading="Statistics" text="Visualize your behavioral patterns and progress">
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="quarter">Past Quarter</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </DashboardHeader>

      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Positive Behaviors</CardTitle>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+24%</div>
              <p className="text-xs text-muted-foreground">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Habit Completion</CardTitle>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Behavior Categories</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Active categories</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-full lg:col-span-4">
            <CardHeader>
              <CardTitle>Behavior Trends</CardTitle>
              <CardDescription>Track your behavioral patterns over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <canvas ref={behaviorChartRef} className="w-full h-full"></canvas>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-full lg:col-span-3">
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Breakdown of your behavior categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <canvas ref={categoryChartRef} className="w-full h-full"></canvas>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Habit Completion Rates</CardTitle>
            <CardDescription>Percentage of successful habit completions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <canvas ref={habitChartRef} className="w-full h-full"></canvas>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Tabs defaultValue="weekly">
              <div className="flex items-center justify-between">
                <CardTitle>Detailed Statistics</CardTitle>
                <TabsList>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>Detailed breakdown of your behavioral statistics</CardDescription>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Most Consistent Habit</h3>
                  <p className="text-2xl font-bold">Journaling</p>
                  <p className="text-xs text-muted-foreground">90% completion rate</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Most Improved Habit</h3>
                  <p className="text-2xl font-bold">Exercise</p>
                  <p className="text-xs text-muted-foreground">+15% from previous period</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Needs Attention</h3>
                  <p className="text-2xl font-bold">Water Intake</p>
                  <p className="text-xs text-muted-foreground">65% completion rate</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Longest Streak</h3>
                  <p className="text-2xl font-bold">10 days</p>
                  <p className="text-xs text-muted-foreground">Journaling</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Behavioral Insights</h3>
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                  <p>
                    Based on your data, you're most consistent with habits in the morning. Consider scheduling more
                    challenging habits earlier in the day.
                  </p>
                  <p className="mt-2">
                    Your mindfulness practices show the most improvement, with a 24% increase in consistency over the
                    past month.
                  </p>
                  <p className="mt-2">
                    Weekend habits tend to have lower completion rates. Consider adjusting your weekend routines or
                    setting more realistic goals for these days.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

