import LinkedInIcon from '../../assets/icons/linkedin-icon.svg?react'
import GithubIcon from '../../assets/icons/github-icon.svg?react'
import InstagramIcon from '../../assets/icons/instagram-icon.svg?react'
import IconButton from '../../components/IconButton'

export const Footer = () => {
  return (
    <div className="container mx-auto mt-32">
      <div className="flex items-center justify-center">
        <IconButton icon={GithubIcon} className="mr-2" />
        <IconButton icon={InstagramIcon} className="mr-2" />
        <IconButton icon={LinkedInIcon} className="mr-2" />
      </div>

      <div className="text-primary w-full py-2 text-center text-sm">
        André Souza © 2022. Todos os direitos reservados.
      </div>
    </div>
  )
}
