const NotFound = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container mx-auto px-6 py-16 lg:px-12">
      <h1 className="font-serif text-2xl font-semibold">404 — Page not found</h1>
      <p className="mt-4 text-sm">
        <a href="/" className="underline underline-offset-2">
          Return to home
        </a>
      </p>
    </div>
  </main>
);

export default NotFound;
