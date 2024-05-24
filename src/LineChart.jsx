import { line, scaleLinear, scaleTime, extent, max } from 'd3'
import React from 'react'

export const LineChart = ({data, height, width}) => {

  const xScale = scaleTime()
    .domain(extent(data, d => d.date))
    .range([0, width])

  const yScale = scaleLinear()
    .domain([0, max(data, d => d.totalDeaths)])
    .range([height, 0])

  const lineGenerator = line()
  .x(d => xScale(d.date))
  .y(d => yScale(d.totalDeaths))

  return (
    <svg height={height} width={width}>
      <path d={lineGenerator(data)} stroke="black" />
    </svg>
  )
}
