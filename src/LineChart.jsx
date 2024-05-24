import { line, scaleLinear, scaleTime, extent, max } from 'd3'
import React from 'react'
import { XAxis } from './XAxis'
import { YAxis } from './YAxis'

const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 80
}
export const LineChart = ({data, height, width}) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xValue = d => d.date
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])

  const yValue = d => d.totalDeaths
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])

  const lineGenerator = line()
  .x(d => xScale(xValue(d)))
  .y(d => yScale(yValue(d)))

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />
        <path d={lineGenerator(data)} />
      </g>
    </svg>
  )
}
