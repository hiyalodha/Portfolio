import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Research from '@/components/Research'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Hackathons from '@/components/Hackathons'
import Organizations from '@/components/Organizations'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Research />
        <Experience />
        <Certifications />
        <Hackathons />
        <Organizations />
        <Projects />
        <Contact />
      </main>
    </>
  )
}