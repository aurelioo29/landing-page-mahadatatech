import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Capabilities from "@/components/home/Capabilities";
import Page from "@/components/utility/Page";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        title: "Mahadata Technology",
        desc: "Mahadata Technology builds websites, platforms, and digital systems designed to solve real business problems with clarity, efficiency, and intention.",
      }}
    >
      <Hero />

      <main className="space-y-32">
        <Projects />
        <Capabilities />
        <Testimonials />
      </main>

      <CTA />
    </Page>
  );
}
