import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import HighlightProject from "@/components/sections/HighlightProject";
import OurServices from "@/components/sections/OurServices";
import OurVision from "@/components/sections/OurVision";

export default function Home() {
  return (
    <main className="space-y-12">
      <Hero />
      <HighlightProject />
      <OurServices />
      <Trust />
      <OurVision />
    </main>
  );
}
