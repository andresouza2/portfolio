import { Button } from '../components/Button'

export const Resume = () => {
  return (
    <div className="mt-32">
      <h1 className="mb-11 text-center text-[2rem] font-normal">Resume</h1>

      <p className="mb-6 text-center">Clique no botão abaixo para fazer o download do meu currílo no formato .PDF</p>
      <div className="flex justify-center">
        <Button name="baixarCV" className="mt-0" handleClick={() => {}}>
          Baixe o meu currículo
        </Button>
      </div>
    </div>
  )
}
