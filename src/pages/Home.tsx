import DevImg from '../assets/imgs/image-dev.svg'
import { Button } from '../components/Button'

export const Home = () => {
  return (
    <div className="mt-32 flex flex-row justify-center md:justify-between">
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col">
          <p className="text-2xl font-light">Olá, sou</p>
          <p className="text-[5rem] font-semibold">André Souza</p>
          <p className="text-[1.5rem] font-light">Desenvolvedor Front-End e Back-end</p>
        </div>

        <Button name="baixarCV" className="mt-0" handleClick={() => {}}>
          Baixe o meu currículo
        </Button>
      </div>

      <img src={DevImg} alt="desenvolvedor front-end" className="hidden md:inline" />
    </div>
  )
}
