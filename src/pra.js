import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './contextpra'

const Pra = () => {
    const name = useGlobalContext()
  return (
    <div>Hi ! This is <p>{name}</p></div>
  )
}

export default Pra