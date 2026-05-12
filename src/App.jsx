import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Carrossel } from './components/Carrossel'

function App() {
  const imgs = [
    {src: "../public/imgs/dante.webp", alt: "Dante", title: "The Legendary Devil Hunter"},
    {src: "../public/imgs/nero.webp", alt: "Vergil", title: "The Devil Hunter"},
    {src: "../public/imgs/v.webp", alt: "Nero", title: "The Mysterious One"}
  ]

  return (
    <Carrossel data={imgs} />
  )
}

export default App
