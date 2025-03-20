import { NextResponse } from "next/server"
import { getAvailableModels } from "@/lib/akash-api"

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const apiKey = url.searchParams.get("apiKey")

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 400 })
    }

    // Call the Akash API
    const models = await getAvailableModels(apiKey)

    return NextResponse.json(models)
  } catch (error: any) {
    console.error("Error in models API route:", error)

    return NextResponse.json({ error: error.message || "An error occurred while fetching models" }, { status: 500 })
  }
}

