'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-ayurveda-cream flex flex-col items-center justify-center p-4 text-center">
      <h2 className="font-serif text-2xl font-bold text-ayurveda-green mb-2">Something went wrong</h2>
      <p className="text-ayurveda-textMuted max-w-md mb-6">{error.message || "An unexpected error occurred."}</p>
      <div className="flex gap-4">
        <button onClick={() => reset()} className="btn-ayurveda-primary">
          Try again
        </button>
        <Link href="/" className="btn-ayurveda-outline">
          Go Home
        </Link>
      </div>
    </div>
  );
}
