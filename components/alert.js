import cx from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={cx({
        'text-green-400': type === 'success',
        'text-red-400': type === 'error'
      })}
    >
      {children}
    </div>
  )
}