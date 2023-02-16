import cx from 'classnames'

interface HeadTableProps {
  title: string
  little?: boolean
}

const HeadTable: React.FC<HeadTableProps> = ({ title, little = false }) => {
  return (
    <p
      className={cx(
        'w-[230px] h-[33px] flex justify-center items-center p-[10px] gap-[10px] uppercase font-normal text-[11px] leading-[13px]',
        {
          'w-[84px]': little
        }
      )}
    >
      {title}
    </p>
  )
}

export default HeadTable
