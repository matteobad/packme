"use client";

import { useRouter } from "next/navigation";

import { Button } from "./ui/button";

export function ErrorFallback() {
  const router = useRouter();

  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <div>
        <h2 className="text-md">Something went wrong</h2>
      </div>
      <Button onClick={() => router.refresh()} variant="outline">
        Try again
      </Button>
    </div>
  );
}
