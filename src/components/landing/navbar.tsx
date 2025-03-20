"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../mode-toggle";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-primary flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-opacity-20 [background-size:10px_10px] opacity-20" />
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">AkashChat</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 mr-2">
            <Link
              href="#features"
              className="group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Features
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="#benefits"
              className="group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Benefits
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="#testimonials"
              className="group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Testimonials
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/chat"
              className="group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Chat
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/dashboard"
              className="group relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            >
              Dashboard
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
          <ModeToggle />
          <Button
            asChild
            size="sm"
            className="rounded-full px-4 shadow-md transition-all hover:shadow-lg"
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-full"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-x-0 top-[5rem] z-50 origin-top transform overflow-hidden bg-background/95 backdrop-blur-md shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? "h-auto opacity-100 scale-100" : "h-0 opacity-0 scale-95"
        }`}
      >
        <div className="container py-6">
          <nav className="flex flex-col gap-5 divide-y divide-muted">
            <div className="grid gap-4 py-4">
              <Link
                href="#features"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#benefits"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="#testimonials"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/chat"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
            <div className="pt-6">
              <Button asChild className="w-full rounded-full shadow-md">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
