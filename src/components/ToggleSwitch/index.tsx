interface ToggleSwitchProps {
  handleToggle: () => void
  isChecked?: boolean
}

export const ToggleSwitch = ({ handleToggle, isChecked }: ToggleSwitchProps) => {
  return (
    <div className="flex w-12 items-center p-2">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked ?? false}
        onChange={() => {
          handleToggle()
        }}
        id="toggle"
      />
      <label
        htmlFor="toggle"
        className={`relative h-4 w-8 cursor-pointer rounded-full bg-transparent outline outline-2 outline-offset-2 ${isChecked ? 'outline-gray-200' : 'outline-gray-950'} transition duration-200 ease-in-out`}
      >
        <span
          className={`absolute left-0 h-4 w-4 transform rounded-full ${isChecked ? 'bg-gray-300' : 'bg-gray-950'} shadow-md transition-transform duration-200 ease-in-out ${
            isChecked ? 'translate-x-full' : ''
          }`}
        ></span>
      </label>
    </div>
  )
}
