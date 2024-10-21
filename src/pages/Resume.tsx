import { Button } from '../components/Button'

export const Resume = () => {
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
    <div className="mt-32">
      <h1 className="mb-11 text-center text-[2rem] font-normal">Resume</h1>

      <p className="mb-6 text-center">Clique no botão abaixo para fazer o download do meu currílo no formato .PDF</p>
      <div className="flex justify-center">
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
    </div>
  )
}
