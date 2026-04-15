import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <main className="min-h-screen bg-background text-foreground">
          <div className="container mx-auto px-6 py-12 lg:px-12">
            <p className="text-sm text-muted-foreground">Loading…</p>
          </div>
        </main>
      }
    >
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Navigate to="/about" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
