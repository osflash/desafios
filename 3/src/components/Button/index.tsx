import cx from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  full?: boolean
  loading?: boolean
  leftIcon?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled
}) => {
  return (
    <button
      className={cx(
        'flex flex-row justify-center items-center py-3 px-6 gap-2 font-medium text-sm leading-6 rounded-3xl uppercase',
        {
          'bg-[#8257E5] hover:bg-[#9674E6] focus:bg-[#8257E5] focus:outline focus:outline-[#D9CDF7]':
            variant === 'primary'
        },
        {
          'opacity-[0.56]': disabled
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
