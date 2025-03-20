import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

export function RecentAnalyses() {
  const analyses = [
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
  ]

  return (
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
        {analyses.map((analysis) => (
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
        ))}
      </TableBody>
    </Table>
  )
}

