import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function SectionTracker() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if at bottom of page
      if (scrollPosition + viewportHeight >= documentHeight - 50) {
        setActiveSection("contact");
        return;
      }

      // Find the section that's most visible in the viewport
      // We check which section's center is closest to the top third of viewport
      const triggerPoint = scrollPosition + viewportHeight * 0.3;
      
      let currentSection = "home";
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          
          if (triggerPoint >= elementTop) {
            currentSection = sections[i].id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    updateActiveSection();
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-8 xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="space-y-5">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <div key={section.id} className="flex items-center gap-4">
              <button
                onClick={() => scrollToSection(section.id)}
                className="relative group"
                aria-label={section.label}
              >
                <div
                  className={`rounded-full transition-all duration-500 ease-out ${
                    isActive
                      ? "w-2.5 h-2.5 bg-gray-900"
                      : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </button>
              
              {/* Active label only */}
              {isActive && (
                <div className="absolute left-6 transition-opacity duration-500 ease-out">
                  <span className="text-sm text-gray-700 whitespace-nowrap">
                    {section.label}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
