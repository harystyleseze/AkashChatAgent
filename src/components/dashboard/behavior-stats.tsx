"use client"

import { useEffect, useRef } from "react"

export function BehaviorStats() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
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
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}

