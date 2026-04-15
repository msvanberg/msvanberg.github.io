import { NavLink } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
];

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">


          <div className="flex flex-wrap gap-2" aria-label="Primary tabs">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "border px-3 py-1 text-sm",
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-foreground hover:border-foreground",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
