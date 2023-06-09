import Image from 'next/image'
import Hero from './component/hero'
import Contact from './component/contact'
import Projects from './component/project'
import About from './component/about'
import Skills from './component/skill'

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}
