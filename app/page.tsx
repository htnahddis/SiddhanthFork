import Departments from "@/components/Departments";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaAnchor, FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Projects", link: "/projects", icon: <FaAnchor /> },
            { name: "Events", link: "/events", icon: <FaHome /> },
            { name: "Team", link: "/team", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Departments />
        <Grid />
      </div>

      <hr className="my-8 w-full border-t border-gray-200 dark:border-gray-700" />
      <p className="py-4 font-mono">
        Check out <span className="text-purple">@DJS Compute</span>
      </p>
    </main>
  );
}
