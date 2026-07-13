const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-6 left-0 right-0 flex justify-center items-center px-4'>
      <div className={`${type === 'danger' ? 'border-red-400/30 bg-red-500/15 text-red-100' : 'border-cyan-300/30 bg-cyan-400/15 text-cyan-50'} flex items-center gap-3 rounded-full border px-4 py-3 shadow-lg backdrop-blur-xl`} role="alert">
        <p className={`${type === 'danger' ? 'bg-red-400/20 text-red-100' : 'bg-cyan-400/20 text-cyan-50'} flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]`}>
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className='text-sm text-left'>{text}</p>
      </div>
    </div>
  )
}

export default Alert
