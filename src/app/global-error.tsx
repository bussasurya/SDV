'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-ayurveda-cream min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-ayurveda-green mb-2">Application Error</h2>
          <p className="text-ayurveda-textMuted mb-4">{error.message}</p>
          <button onClick={() => reset()} className="btn-ayurveda-primary">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
