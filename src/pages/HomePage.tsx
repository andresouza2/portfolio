import { AboutMe } from './AboutMe'
import { Contact } from './Contact'
import { Home } from './Home'
import { Projects } from './Projects'
import { Resume } from './Resume'

export const HomePage = () => {
  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <Contact />
    </>
  )
}
