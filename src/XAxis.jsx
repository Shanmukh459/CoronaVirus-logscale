import { axisBottom, select } from "d3"
import { useEffect, useRef } from "react"

export const XAxis = ({ xScale, innerHeight }) => {
  const ref = useRef()

  useEffect(() => {
    const xAxisG = select(ref.current)
    const xAxis = axisBottom(xScale).tickSize(innerHeight).tickPadding(5)
    xAxisG.call(xAxis)
  }, [])
  return <g ref={ref}></g>
}
