const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Maja Svanberg. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Technology Policy Researcher · Chalmers University of Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
