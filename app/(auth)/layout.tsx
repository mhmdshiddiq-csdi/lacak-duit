import Logo from '@/components/Logo'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center'>
      <Logo />
      <div className='mt-4'>{children}</div>
    </div>
  )
}

export default layout
