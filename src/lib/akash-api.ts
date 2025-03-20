import axios from "axios";

// Create API client
const createClient = (apiKey: string) => {
  return axios.create({
    baseURL: "https://chatapi.akash.network/api/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    timeout: 180000, // 180 second timeout (3 minutes)
  });
};

// Static list of available models from documentation
export const AVAILABLE_MODELS = [
  "DeepSeek-R1",
  "DeepSeek-R1-Distill-Llama-70B",
  "DeepSeek-R1-Distill-Qwen-14B",
  "DeepSeek-R1-Distill-Qwen-32B",
  "Meta-Llama-3-1-8B-Instruct-FP8",
  "Meta-Llama-3-1-405B-Instruct-FP8",
  "Meta-Llama-3-2-3B-Instruct",
  "Meta-Llama-3-3-70B-Instruct",
];

// Default model that works most reliably with most keys
export const DEFAULT_MODEL = "Meta-Llama-3-2-3B-Instruct";

// Function to clean model thinking output from responses
const cleanResponseContent = (content: string): string => {
  // Remove <think>...</think> sections
  const cleanedContent = content
    .replace(/<think>[\s\S]*?<\/think>/g, "")
    .trim();

  // If nothing left after removing thinking blocks, return original content
  if (!cleanedContent && content) {
    return content;
  }

  return cleanedContent;
};

// Chat completion function with improved error handling
export async function chatCompletion(
  apiKey: string,
  model: string,
  messages: Array<{ role: string; content: string }>,
  options: { temperature?: number; max_tokens?: number } = {}
) {
  // For client-side only execution, this prevents hydration mismatch
  if (typeof window === "undefined") {
    return {
      id: "server-render-placeholder",
      error: true,
      message: "API calls are only available on client-side",
      choices: [],
    };
  }

  try {
    // Check if the model is in the list of available models
    if (!AVAILABLE_MODELS.includes(model)) {
      console.warn(
        `Model ${model} is not in the list of known available models. Using ${DEFAULT_MODEL} instead.`
      );
      model = DEFAULT_MODEL;
    }

    const client = createClient(apiKey);

    // Format messages to ensure they follow the correct structure
    const formattedMessages = messages.map((msg) => ({
      role:
        msg.role === "user" || msg.role === "assistant" || msg.role === "system"
          ? msg.role
          : "user", // Default to user if invalid role
      content: msg.content || "", // Ensure content is never undefined
    }));

    // Add a system message at the beginning if one doesn't exist
    if (!formattedMessages.some((msg) => msg.role === "system")) {
      formattedMessages.unshift({
        role: "system",
        content:
          "You are a helpful behavioral analysis assistant that provides evidence-based advice. Be concise, practical, and friendly. Format your responses with clear headings and bullet points when appropriate. Make your responses look professional and don't include any internal thinking or markdown symbols in your output that would make your response look raw or unformatted.",
      });
    }

    const response = await client.post("/chat/completions", {
      model,
      messages: formattedMessages,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 2000, // Increase max tokens for more complete responses
    });

    // Clean up any thinking tags in the response
    if (
      response.data &&
      response.data.choices &&
      response.data.choices.length > 0 &&
      response.data.choices[0].message &&
      response.data.choices[0].message.content
    ) {
      response.data.choices[0].message.content = cleanResponseContent(
        response.data.choices[0].message.content
      );
    }

    return response.data;
  } catch (error: any) {
    console.error("Error in chat completion:", error);

    // Extract information about allowed models if that's the error
    const errorMessage =
      error.response?.data?.error?.message ||
      error.message ||
      "Unknown error occurred";
    let allowedModels: string[] = [];

    // Try to parse allowed models from error message
    const modelMatch = errorMessage.match(/Allowed team models = \[(.*?)\]/);
    if (modelMatch && modelMatch[1]) {
      try {
        allowedModels = modelMatch[1]
          .split(",")
          .map((model: string) => model.replace(/'/g, "").trim())
          .filter(Boolean);
      } catch (e) {
        console.error("Failed to parse allowed models:", e);
      }
    }

    // Return a formatted error that can be displayed to the user
    return {
      error: true,
      message: errorMessage,
      allowedModels: allowedModels.length > 0 ? allowedModels : [DEFAULT_MODEL],
      suggestedModel:
        allowedModels.length > 0 ? allowedModels[0] : DEFAULT_MODEL,
      choices: [
        {
          message: {
            role: "assistant",
            content: errorMessage.includes("Team not allowed to access model")
              ? "I'm sorry, but this model isn't available with your current API key. I'll automatically switch to another available model for you. Please try again."
              : "I'm sorry, but I couldn't process your request. Please try again or use a different model. Error: " +
                errorMessage,
          },
        },
      ],
    };
  }
}

// Analyze behavior function
export async function analyzeBehavior(
  apiKey: string,
  model: string,
  behaviorData: {
    behavior: string;
    antecedent: string;
    consequence: string;
    previous_attempts?: string;
    emotions_thoughts?: string;
  }
) {
  // For client-side only execution, this prevents hydration mismatch
  if (typeof window === "undefined") {
    return {
      id: "server-render-placeholder",
      error: true,
      message: "API calls are only available on client-side",
      choices: [],
    };
  }

  const {
    behavior,
    antecedent,
    consequence,
    previous_attempts,
    emotions_thoughts,
  } = behaviorData;

  // Create the prompt using the template
  const prompt = `Functional behavioral analysis based on radical behaviorism and intervention technique suggestions

BEHAVIORAL DATA:
- Current behavior you want to analyze: "${behavior}"
- Context or environment in which the behavior occurs: "${antecedent}"
- Immediate consequences of the analyzed behavior (what happens right after the behavior): "${consequence}"
- Previous attempts to change the analyzed behavior: "${
    previous_attempts || "None specified"
  }"
- Emotional or cognitive context (if applicable): "${
    emotions_thoughts || "None specified"
  }"

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

[Repeat format for each suggested habit]`;

  try {
    // Using the improved chatCompletion function
    const result = await chatCompletion(
      apiKey,
      model,
      [
        {
          role: "system",
          content:
            "You are a behavioral analysis expert who provides detailed, evidence-based analyses and practical suggestions. Format your response professionally with clear headings and avoid showing any internal thinking or raw markdown symbols.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      { temperature: 0.5 }
    );

    return result;
  } catch (error) {
    console.error("Error in behavior analysis:", error);
    throw error;
  }
}

// Get available models - returns the static list instead of calling the API
export async function getAvailableModels() {
  // For client-side only execution, preventing hydration mismatch
  if (typeof window === "undefined") {
    // Return empty array during server-side rendering
    return { models: [] };
  }

  // Create a response object similar to what the API would return
  return {
    models: AVAILABLE_MODELS.map((id) => ({
      id,
      object: "model",
      created: Date.now(),
      owned_by: "akash",
    })),
  };
}
