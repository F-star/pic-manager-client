import React from 'react'
import Header from './Header'

interface Props {
  
}

const NormalFrame: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>这里是侧边栏</div>
      { children }
    </div>
  )
}

export default NormalFrame


