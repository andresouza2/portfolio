import DevImg from '../assets/imgs/image-dev.svg'
import { Button } from '../components/Button'

export const Home = () => {
  const URL_PDF_FILE: string = 'https://portifolioandre.netlify.app/cv_andre.pdf'

  function downloadFile(url: string) {
    const fileName = url.split('/').pop() ?? ''
    console.log(fileName)
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('target', '_blank')
    aTag.setAttribute('donwload', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className="mt-32 flex flex-row justify-center md:justify-between">
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-col">
          <p className="text-2xl font-light">Olá, sou</p>
          <p className="text-[5rem] font-semibold">André Souza</p>
          <p className="text-[1.5rem] font-light">Desenvolvedor Front-End e Back-end</p>
        </div>

        <Button
          name="baixarCV"
          className="mt-0"
          handleClick={() => {
            downloadFile(URL_PDF_FILE)
          }}
        >
          Baixe o meu currículo
        </Button>
      </div>

      <img src={DevImg} alt="desenvolvedor front-end" className="hidden md:inline" />
    </div>
  )
}
