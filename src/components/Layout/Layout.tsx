import React, { ReactNode } from 'react'
import Header from '../Header/Header'

export default function Layout(children: ReactNode) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
