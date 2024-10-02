import { Card } from './components/Card'
import { useCallback, useEffect, useState } from 'react'

interface Project {
  id: number
  html_url: string
  full_name: string
}

export const Projects = () => {
  const [project, setProject] = useState<Project[]>()

  const allProjects = useCallback(async () => {
    fetch('https://api.github.com/users/andresouza2/repos')
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    allProjects()
  }, [allProjects])

  return (
    <div className="mt-32">
      <h2 className="mb-11 text-center text-[2rem] font-normal">Projetos</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {project?.map((item) => (
          <Card
            key={item.id}
            title={item.full_name}
            body={item.full_name}
            handleClick={() => window.open(item.html_url, '_blank')}
            className=""
          />
        ))}
      </div>
    </div>
  )
}
