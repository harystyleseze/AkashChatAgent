"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ModelSelectorProps {
  selectedModel: string
  setSelectedModel: (model: string) => void
}

export function ModelSelector({ selectedModel, setSelectedModel }: ModelSelectorProps) {
  const { toast } = useToast()

  const models = [
    "DeepSeek-R1",
    "DeepSeek-R1-Distill-Llama-70B",
    "DeepSeek-R1-Distill-Qwen-14B",
    "DeepSeek-R1-Distill-Qwen-32B",
    "Meta-Llama-3-1-8B-Instruct-FP8",
    "Meta-Llama-3-1-405B-Instruct-FP8",
    "Meta-Llama-3-2-3B-Instruct",
    "Meta-Llama-3-3-70B-Instruct",
  ]

  const handleSave = () => {
    toast({
      title: "Model updated",
      description: `You are now using ${selectedModel} for your analyses.`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Select AI Model</Label>
        <RadioGroup value={selectedModel} onValueChange={setSelectedModel} className="space-y-2">
          {models.map((model) => (
            <div key={model} className="flex items-center space-x-2">
              <RadioGroupItem value={model} id={model} />
              <Label htmlFor={model} className="cursor-pointer">
                {model}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button onClick={handleSave} className="w-full">
        Save Preference
      </Button>
    </div>
  )
}

