import Nav from "./components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="container mx-auto p-8 space-y-6">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to your Multi-Tenant Blog
        </h1>
      </div>
    </main>
  );
}
