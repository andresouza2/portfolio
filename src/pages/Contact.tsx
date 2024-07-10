import MailIcon from '../assets/icons/mail-icon.svg?react'
import WhatsAppIcon from '../assets/icons/whatsapp-icon.svg?react'
import Icon from '../components/Icon'

export const Contact = () => {
  return (
    <div className="mt-32">
      <h1 className="mb-11 text-center text-[2rem] font-normal">Contato</h1>

      <div className="mb-2 flex items-center justify-center">
        <Icon SvgComponent={MailIcon} className="mr-2" />
        <p className="">andssouzza@gmail.com</p>
      </div>
      <div className="mb-2 flex items-center justify-center">
        <Icon SvgComponent={WhatsAppIcon} className="mr-2" />
        <p className="">(92) 9 8104-0910</p>
      </div>
    </div>
  )
}
