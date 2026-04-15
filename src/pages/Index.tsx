import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import profilePic from "@/assets/profile.jpg";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-6 py-10 lg:px-12">
        <header className="mb-8 border-b border-border pb-6">
          <div className="flex items-start gap-6">
            <img
              src={profilePic}
              alt="Maja Svanberg"
              className="w-24 flex-shrink-0 "
            />
            <div>
              <h1 className="font-serif text-3xl font-semibold md:text-4xl">Maja Svanberg</h1>
              <p className="mt-2 max-w-3xl text-base text-muted-foreground">
                PhD student in Technology Management and Economics,
                Chalmers University of Technology
              </p>
            </div>
          </div>
        </header>

        <section className="max-w-4xl">
          <Outlet />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;
