import axios from "axios"

// Create API client
const createClient = (apiKey: string) => {
  return axios.create({
    baseURL: "https://chatapi.akash.network/api/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  })
}

// Chat completion function
export async function chatCompletion(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  options: { temperature?: number; max_tokens?: number } = {},
) {
  try {
    const client = createClient(apiKey)

    const response = await client.post("/chat/completions", {
      model,
      messages,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 1000,
    })

    return response.data
  } catch (error) {
    console.error("Error in chat completion:", error)
    throw error
  }
}

// Analyze behavior function
export async function analyzeBehavior(
  apiKey: string,
  model: string,
  behaviorData: {
    behavior: string
    antecedent: string
    consequence: string
    previous_attempts?: string
    emotions_thoughts?: string
  },
) {
  const { behavior, antecedent, consequence, previous_attempts, emotions_thoughts } = behaviorData

  // Create the prompt using the template
  const prompt = `Functional behavioral analysis based on radical behaviorism and intervention technique suggestions

BEHAVIORAL DATA:
- Current behavior you want to analyze: "${behavior}"
- Context or environment in which the behavior occurs: "${antecedent}"
- Immediate consequences of the analyzed behavior (what happens right after the behavior): "${consequence}"
- Previous attempts to change the analyzed behavior: "${previous_attempts || "None specified"}"
- Emotional or cognitive context (if applicable): "${emotions_thoughts || "None specified"}"

INSTRUCTIONS:
1. First, perform a functional analysis based on radical behaviorism, considering:
   * The context/environment in which the behavior occurs and the immediate consequence of the behavior
   * Frequency and intensity of the behavior
   * Other contexts/environments where the same behavior occurs
   * Short and long-term consequences
   * Positive and negative reinforcement, and any punishment
   * Behavioral excesses and deficits (e.g., over- or under-reaction, lack of certain skills)
   * Emotional and cognitive factors influencing the behavior
   * Impact on daily functioning
   * Potential barriers to change
   * Strengths from previous attempts

2. Based on this analysis, suggest 3-4 practical habits. For each habit, provide:
   - Habit name: short and clear title
   - Description: brief explanation of the habit
   - Implementation: detailed step-by-step execution
   - Scientific basis: reference or evidence supporting this habit
   - Link to analysis: explain how the habit addresses specific behavioral patterns

3. After suggesting the habits, provide a habit review process for the user to track progress over time. Suggest how to review their progress after 2 weeks and adjust if necessary.

RESPONSE FORMAT (please use this format and the exact keywords - DO NOT CHANGE THE WORD 'Habits:'):
GENERAL:
[Behavioral analysis, more than 3 paragraphs]

Habits:
1. **[Habit name]**
   - **Description:** [brief description]
   - **Implementation:** [detailed steps]
   - **Scientific Basis:** [reference or evidence]
   - **Link to analysis:** [explanation of how this habit addresses the specific behavior]

[Repeat format for each suggested habit]`

  try {
    const result = await chatCompletion(apiKey, model, [{ role: "user", content: prompt }], { temperature: 0.5 })

    return result
  } catch (error) {
    console.error("Error in behavior analysis:", error)
    throw error
  }
}

// Get available models
export async function getAvailableModels(apiKey: string) {
  try {
    const client = createClient(apiKey)
    const response = await client.get("/models")
    return response.data
  } catch (error) {
    console.error("Error fetching models:", error)
    throw error
  }
}

