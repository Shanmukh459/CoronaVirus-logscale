import { line, scaleLog, scaleTime, extent, max } from 'd3'
import React from 'react'
import { XAxis } from './XAxis'
import { YAxis } from './YAxis'

const margin = {
  top: 45,
  right: 20,
  bottom: 55,
  left: 70
}
export const LineChart = ({data, height, width}) => {
  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xValue = d => d.date
  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])

  const yValue = d => d.totalDeaths
  const yScale = scaleLog()
    .domain([1, max(data, yValue)])
    .range([innerHeight, 0])

  const lineGenerator = line()
  .x(d => xScale(xValue(d)))
  .y(d => yScale(yValue(d)))

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text
          textAnchor='middle'
          x={innerWidth/2}
          y={-10}
        >Global Corona virus Deaths Over Time </text>
        <text
        className='axis-label'
          x={innerWidth/2}
          y={innerHeight + 20}
          alignmentBaseline='hanging'
        >Time</text>
        <text
          className='axis-label'
          textAnchor='middle'
          transform={`translate(-35, ${innerHeight/2}) rotate(-90)`}
        >Cummulative Deaths</text>
        <XAxis xScale={xScale} innerHeight={innerHeight} />
        <YAxis yScale={yScale} innerWidth={innerWidth} />
        <path d={lineGenerator(data)} />
      </g>
    </svg>
  )
}
