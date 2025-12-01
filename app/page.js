import Button from "./components/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600 max-w-md mb-6">
          This is a simple landing page with header, footer, and a button imported from components.
        </p>
        <Button>Get Started</Button>
      </main>
    </div>
  );
}