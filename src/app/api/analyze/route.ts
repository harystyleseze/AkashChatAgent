import { NextResponse } from "next/server"
import { analyzeBehavior } from "@/lib/akash-api"

export async function POST(req: Request) {
  try {
    const { apiKey, model, behaviorData } = await req.json()

    // Validate required fields
    if (!apiKey || !model || !behaviorData) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Call the Akash API
    const result = await analyzeBehavior(apiKey, model, behaviorData)

    return NextResponse.json(result)
  } catch (error: any) {
    console.error("Error in analyze API route:", error)

    return NextResponse.json({ error: error.message || "An error occurred during analysis" }, { status: 500 })
  }
}

