import React from 'react'
import { LineChart } from './LineChart'
import { useData } from './useData'

const height = window.innerHeight
const width = window.innerWidth

function App() {
  const data = useData()
  return data ? (
    <LineChart data={data} height={height} width={width} />
  ): <h1>Loading...</h1>
}

export default App