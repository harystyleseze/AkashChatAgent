"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "../../components/dashboard/dashboard-header";
import { DashboardShell } from "../../components/dashboard/dashboard-shell";
import { BehaviorForm } from "../../components/dashboard/behavior-form";
import { ModelSelector } from "../../components/dashboard/model-selector";
import { RecentAnalyses } from "../../components/dashboard/recent-analyses";
import { BehaviorStats } from "../../components/dashboard/behavior-stats";
import { HabitTracker } from "../../components/dashboard/habit-tracker";
import { BarChart2, Brain, Calendar, Plus } from "lucide-react";

export default function DashboardPage() {
  const [selectedModel, setSelectedModel] = useState(
    "Meta-Llama-3-1-70B-Instruct"
  );

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Track and analyze your behavioral patterns"
      >
        <Button asChild>
          <Link href="/dashboard/new-analysis">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Analyses
            </CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Habits</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Improvement Rate
            </CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Consistency Score
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Behavior Trends</CardTitle>
            <CardDescription>
              Track your behavioral patterns over time
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BehaviorStats />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Habit Tracker</CardTitle>
            <CardDescription>Monitor your habit consistency</CardDescription>
          </CardHeader>
          <CardContent>
            <HabitTracker />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Analyses</CardTitle>
            <CardDescription>
              Your most recent behavioral analyses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentAnalyses />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <Tabs defaultValue="new-analysis">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analysis Tools</CardTitle>
              </div>
              <CardDescription>
                Create a new analysis or select a model
              </CardDescription>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="new-analysis">New Analysis</TabsTrigger>
                <TabsTrigger value="model">Select Model</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="new-analysis" className="mt-0">
                <BehaviorForm />
              </TabsContent>
              <TabsContent value="model" className="mt-0">
                <ModelSelector
                  selectedModel={selectedModel}
                  setSelectedModel={setSelectedModel}
                />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </DashboardShell>
  );
}
