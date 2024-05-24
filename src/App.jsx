import React from 'react'
import { LineChart } from './LineChart'
import { useData } from './useData'

const height = window.innerHeight
const width = window.innerWidth

function App() {
  const data = useData()
  console.log(data)
  return (
    <LineChart height={height} width={width} />
  )
}

export default App