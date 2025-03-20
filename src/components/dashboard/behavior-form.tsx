"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function BehaviorForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Analysis submitted",
        description: "Your behavioral analysis has been submitted successfully.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="behavior">Current behavior</Label>
        <Textarea
          id="behavior"
          placeholder="Describe the behavior you want to analyze..."
          className="min-h-[80px]"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="antecedent">Context or environment</Label>
        <Input id="antecedent" placeholder="When and where does this behavior occur?" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="consequence">Immediate consequences</Label>
        <Input id="consequence" placeholder="What happens right after the behavior?" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="emotions">Emotional context</Label>
        <Input id="emotions" placeholder="How do you feel before, during, and after?" />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Analyzing..." : "Analyze Behavior"}
      </Button>
    </form>
  )
}

