"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  Brain,
  Calendar,
  Home,
  Settings,
  MessageSquare,
  User,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export function DashboardNav() {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Analyses",
      href: "/dashboard/analyses",
      icon: <Brain className="mr-2 h-4 w-4" />,
    },
    {
      title: "Habits",
      href: "/dashboard/habits",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: "Statistics",
      href: "/dashboard/statistics",
      icon: <BarChart2 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Chat",
      href: "/dashboard/chat",
      icon: <MessageSquare className="mr-2 h-4 w-4" />,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: <User className="mr-2 h-4 w-4" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ];

  return (
    <nav className="grid items-start gap-2 py-4">
      {navItems.map((item, index) => (
        <Button
          key={index}
          asChild
          variant={pathname === item.href ? "secondary" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-accent")}
        >
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
