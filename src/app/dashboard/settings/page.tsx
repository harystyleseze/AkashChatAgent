"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../components/dashboard/dashboard-shell"
import { useToast } from "@/hooks/use-toast"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function SettingsPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("Meta-Llama-3-1-70B-Instruct")

  const handleSave = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1500)
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Settings" text="Configure your application preferences" />

      <div className="grid gap-6">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="ai-models">AI Models</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Configure general application settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select defaultValue="system">
                    <SelectTrigger id="theme">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoSave">Auto-save</Label>
                    <p className="text-sm text-muted-foreground">Automatically save your progress</p>
                  </div>
                  <Switch id="autoSave" defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="ai-models" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Model Settings</CardTitle>
                <CardDescription>Configure your preferred AI models for analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultModel">Default Model</Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel}>
                    <SelectTrigger id="defaultModel">
                      <SelectValue placeholder="Select a model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DeepSeek-R1">DeepSeek-R1</SelectItem>
                      <SelectItem value="DeepSeek-R1-Distill-Llama-70B">DeepSeek-R1-Distill-Llama-70B</SelectItem>
                      <SelectItem value="DeepSeek-R1-Distill-Qwen-14B">DeepSeek-R1-Distill-Qwen-14B</SelectItem>
                      <SelectItem value="DeepSeek-R1-Distill-Qwen-32B">DeepSeek-R1-Distill-Qwen-32B</SelectItem>
                      <SelectItem value="Meta-Llama-3-1-8B-Instruct-FP8">Meta-Llama-3-1-8B-Instruct-FP8</SelectItem>
                      <SelectItem value="Meta-Llama-3-1-405B-Instruct-FP8">Meta-Llama-3-1-405B-Instruct-FP8</SelectItem>
                      <SelectItem value="Meta-Llama-3-2-3B-Instruct">Meta-Llama-3-2-3B-Instruct</SelectItem>
                      <SelectItem value="Meta-Llama-3-1-70B-Instruct">Meta-Llama-3-1-70B-Instruct</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="temperature">Temperature</Label>
                    <span className="text-sm text-muted-foreground">0.7</span>
                  </div>
                  <Slider id="temperature" defaultValue={[0.7]} max={1} step={0.1} className="w-full" />
                  <p className="text-xs text-muted-foreground">
                    Controls randomness: Lower values are more deterministic, higher values are more creative.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maxTokens">Max Tokens</Label>
                    <span className="text-sm text-muted-foreground">1000</span>
                  </div>
                  <Slider id="maxTokens" defaultValue={[1000]} min={100} max={2000} step={100} className="w-full" />
                  <p className="text-xs text-muted-foreground">Maximum number of tokens to generate in the response.</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cache Responses</Label>
                    <p className="text-sm text-muted-foreground">Cache AI responses to improve performance</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Analysis Settings</CardTitle>
                <CardDescription>Configure your behavioral analysis preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="analysisDepth">Analysis Depth</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="analysisDepth">
                      <SelectValue placeholder="Select analysis depth" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Controls the depth and detail level of behavioral analyses.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="habitSuggestions">Habit Suggestions</Label>
                  <Select defaultValue="3">
                    <SelectTrigger id="habitSuggestions">
                      <SelectValue placeholder="Select number of suggestions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 suggestions</SelectItem>
                      <SelectItem value="3">3 suggestions</SelectItem>
                      <SelectItem value="4">4 suggestions</SelectItem>
                      <SelectItem value="5">5 suggestions</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Number of habit suggestions to generate per analysis.</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Scientific References</Label>
                    <p className="text-sm text-muted-foreground">Include scientific references in analyses</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Implementation Steps</Label>
                    <p className="text-sm text-muted-foreground">Include detailed implementation steps for habits</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Settings</CardTitle>
                <CardDescription>Manage your API keys and integration settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">Akash API Key</Label>
                  <div className="flex gap-2">
                    <Input
                      id="apiKey"
                      type="password"
                      value="••••••••••••••••••••••••••••••"
                      readOnly
                      className="font-mono"
                    />
                    <Button variant="outline">Show</Button>
                    <Button variant="outline">Regenerate</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Your API key for accessing the Akash Chat API.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input id="webhookUrl" placeholder="https://your-app.com/webhook" />
                  <p className="text-xs text-muted-foreground">
                    URL to receive webhook notifications for completed analyses.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>API Rate Limiting</Label>
                    <p className="text-sm text-muted-foreground">Enable rate limiting for API requests</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  )
}

