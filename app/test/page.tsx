export default function TestPage() {
  return (
    <div className="p-8">
      <h1>Test Page</h1>
      <p>If you can see this, Next.js is working.</p>
      <p>
        Clerk Publishable Key:{" "}
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? "Found" : "Missing"}
      </p>
    </div>
  );
}
