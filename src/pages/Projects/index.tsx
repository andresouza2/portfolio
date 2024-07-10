import { Card } from './components/Card'
import { infoProjects } from '../../data/Info-projects'

export const Projects = () => {
  return (
    <div className="mt-32">
      <h2 className="mb-11 text-center text-[2rem] font-normal">Projetos</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {infoProjects.map((project) => (
          <Card
            key={project.id}
            img={project.img}
            title={project.title}
            body={project.body}
            handleClick={project.handleClick}
            className=""
          />
        ))}
      </div>
    </div>
  )
}
