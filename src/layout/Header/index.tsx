import { LinkItem } from '../../components/LinkItem'
import { ToggleSwitch } from '../../components/ToggleSwitch'
import { useTheme } from '../../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const linkItems = [
  {
    name: 'Home',
    path: '#home',
  },
  {
    name: 'Projetos',
    path: '#project',
  },
  {
    name: 'Currículo',
    path: '#resume',
  },
  {
    name: 'Contato',
    path: '#contact',
  },
]

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center justify-end py-6">
      {linkItems.map((link) => (
        <LinkItem key={link.name} name={link.name} path={link.path} />
      ))}
      <SunIcon className="h-6 w-6 fill-gray-950 dark:fill-gray-200" />
      <ToggleSwitch handleToggle={toggleTheme} isChecked={theme === 'dark'} />
      <MoonIcon className="h-6 w-6 fill-gray-950 dark:fill-gray-200" />
    </div>
  )
}
