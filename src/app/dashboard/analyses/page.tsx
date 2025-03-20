"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardHeader } from "../../../components/dashboard/dashboard-header"
import { DashboardShell } from "../../../components/dashboard/dashboard-shell"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Plus, Search } from "lucide-react"
import Link from "next/link"

// Sample analyses data
const analysesData = [
  {
    id: "1",
    date: "2025-03-15",
    behavior: "Procrastination on work tasks",
    model: "Meta-Llama-3-1-70B-Instruct",
    status: "Completed",
  },
  {
    id: "2",
    date: "2025-03-12",
    behavior: "Stress eating in evenings",
    model: "DeepSeek-R1",
    status: "Completed",
  },
  {
    id: "3",
    date: "2025-03-08",
    behavior: "Phone checking during conversations",
    model: "Meta-Llama-3-1-8B-Instruct-FP8",
    status: "Completed",
  },
  {
    id: "4",
    date: "2025-03-05",
    behavior: "Morning exercise routine",
    model: "DeepSeek-R1-Distill-Llama-70B",
    status: "Completed",
  },
  {
    id: "5",
    date: "2025-03-01",
    behavior: "Social media usage",
    model: "Meta-Llama-3-1-70B-Instruct",
    status: "Completed",
  },
  {
    id: "6",
    date: "2025-02-25",
    behavior: "Late night snacking",
    model: "DeepSeek-R1",
    status: "Completed",
  },
  {
    id: "7",
    date: "2025-02-20",
    behavior: "Work-life balance",
    model: "Meta-Llama-3-1-8B-Instruct-FP8",
    status: "Completed",
  },
  {
    id: "8",
    date: "2025-02-15",
    behavior: "Screen time before bed",
    model: "DeepSeek-R1-Distill-Qwen-14B",
    status: "Completed",
  },
  {
    id: "9",
    date: "2025-02-10",
    behavior: "Water intake habits",
    model: "Meta-Llama-3-1-70B-Instruct",
    status: "Completed",
  },
  {
    id: "10",
    date: "2025-02-05",
    behavior: "Mindfulness practice",
    model: "DeepSeek-R1",
    status: "Completed",
  },
]

export default function AnalysesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter analyses based on search term
  const filteredAnalyses = analysesData.filter(
    (analysis) =>
      analysis.behavior.toLowerCase().includes(searchTerm.toLowerCase()) ||
      analysis.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      analysis.date.includes(searchTerm),
  )

  return (
    <DashboardShell>
      <DashboardHeader heading="Behavioral Analyses" text="View and manage your behavioral analyses">
        <Button asChild>
          <Link href="/dashboard/new-analysis">
            <Plus className="mr-2 h-4 w-4" /> New Analysis
          </Link>
        </Button>
      </DashboardHeader>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Analyses</CardTitle>
              <CardDescription>A history of your behavioral analyses</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search analyses..."
                  className="pl-8 w-[250px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Behavior</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAnalyses.length > 0 ? (
                filteredAnalyses.map((analysis) => (
                  <TableRow key={analysis.id}>
                    <TableCell className="font-medium">{analysis.date}</TableCell>
                    <TableCell>{analysis.behavior}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{analysis.model.split("-")[0]}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{analysis.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm" variant="ghost">
                        <Link href={`/dashboard/analyses/${analysis.id}`}>
                          <Eye className="h-4 w-4 mr-1" /> View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                    No analyses found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  )
}

