import { NextResponse } from "next/server"
import { chatCompletion } from "@/lib/akash-api"

export async function POST(req: Request) {
  try {
    const { apiKey, model, messages, options } = await req.json()

    // Validate required fields
    if (!apiKey || !model || !messages) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Call the Akash API
    const result = await chatCompletion(apiKey, model, messages, options)

    return NextResponse.json(result)
  } catch (error: any) {
    console.error("Error in chat API route:", error)

    return NextResponse.json({ error: error.message || "An error occurred during chat" }, { status: 500 })
  }
}

