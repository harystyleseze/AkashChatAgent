"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Brain } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);

      // Set a cookie to simulate authentication
      document.cookie = "auth=true; path=/; max-age=86400";

      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/20 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl rounded-3xl overflow-hidden shadow-2xl">
        {/* Left panel - visible on larger screens */}
        <div className="relative hidden lg:flex flex-col justify-between bg-primary p-8 text-white overflow-hidden">
          {/* Dot pattern with improved opacity */}
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-opacity-20 [background-size:16px_16px] opacity-30" />

          {/* Enhanced gradient background with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/20 animate-gradient-slow"></div>

          {/* Abstract shapes for visual interest */}
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

          <div className="relative z-20">
            <Link
              href="/"
              className="flex items-center gap-2 mb-8 transition-transform hover:scale-105"
            >
              <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                AkashChat
              </span>
            </Link>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Unlock the power of{" "}
              <span className="relative inline-block">
                behavioral{" "}
                <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-white/40 rounded-full"></span>
              </span>{" "}
              analytics
            </h2>

            <p className="text-primary-foreground/90 mb-6 text-lg">
              Track, analyze, and improve your habits with AI-powered insights.
            </p>

            {/* Feature points with icons */}
            <div className="space-y-3 mt-8 hidden xl:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">
                  Advanced behavioral pattern recognition
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">
                  Personalized habit recommendations
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-auto">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <blockquote className="space-y-2">
                <p className="text-lg leading-relaxed">
                  "AkashChat Agent has completely transformed how I understand
                  my behaviors and habits. The personalized insights have helped
                  me make lasting changes in my daily routine."
                </p>
                <footer className="flex items-center gap-3 mt-4">
                  <div className="h-10 w-10 rounded-full bg-white/30 overflow-hidden">
                    <svg
                      className="h-full w-full text-white/80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 3c-3 0-9 1.5-9 4.5V21h18v-1.5c0-3-6-4.5-9-4.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-white">Sarah Johnson</div>
                    <div className="text-xs text-primary-foreground/70">
                      Product Designer
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right panel - forms */}
        <div className="bg-card p-4 sm:p-8 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="smallGrid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          <div className="w-full max-w-md mx-auto space-y-6 relative">
            {/* Mobile logo - only visible on small screens */}
            <div className="flex justify-center lg:hidden mb-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-primary">
                  AkashChat
                </span>
              </Link>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access your account
              </p>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 p-1">
                <TabsTrigger value="login" className="rounded-lg text-sm">
                  Login
                </TabsTrigger>
                <TabsTrigger value="register" className="rounded-lg text-sm">
                  Register
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0 pb-3">
                    <CardTitle className="text-xl">Login</CardTitle>
                    <CardDescription>
                      Enter your email and password to login to your account
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4 px-0">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link
                            href="/forgot-password"
                            className="text-xs text-primary hover:underline"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <Input
                          id="password"
                          type="password"
                          className="h-11"
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-3">
                      <Button
                        type="submit"
                        className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-md"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Logging in...
                          </span>
                        ) : (
                          "Login"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>

              <TabsContent value="register">
                <Card className="border-0 shadow-none">
                  <CardHeader className="px-0 pb-3">
                    <CardTitle className="text-xl">Create an account</CardTitle>
                    <CardDescription>
                      Enter your information to create an account
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4 px-0">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-email">Email</Label>
                        <Input
                          id="register-email"
                          type="email"
                          placeholder="name@example.com"
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-password">Password</Label>
                        <Input
                          id="register-password"
                          type="password"
                          className="h-11"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Confirm Password
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="h-11"
                          required
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="px-0 pt-3">
                      <Button
                        type="submit"
                        className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all hover:shadow-md"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Creating account...
                          </span>
                        ) : (
                          "Create account"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>

            <p className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
