import { axisLeft, select } from "d3"
import { useEffect, useRef } from "react"

export const YAxis = ({ yScale }) => {
  const ref = useRef()

  useEffect(() => {
    const yAxisG = select(ref.current)
    const yAxis = axisLeft(yScale)
      .tickSize(-innerWidth)
      .tickPadding(5)


    yAxisG.call(yAxis)
  }, [])
  return <g ref={ref}></g>
}