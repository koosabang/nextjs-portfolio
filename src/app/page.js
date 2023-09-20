import Image from 'next/image'
import HeroSection from '@/app/components/HeroSection'
import Navbar from '@/app/components/Navbar'
import AchievementsSection from "./components/AchievementsSection"
import AboutSection from '@/app/components/AboutSection'
import ProjectsSection from "@/app/components/ProjectsSection"
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  mx-auto">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
