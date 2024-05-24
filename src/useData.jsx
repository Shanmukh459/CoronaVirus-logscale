import { csv, timeParse } from "d3";
import { useEffect, useState } from "react";

const csvUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';

const sum = (accumulator, currentValue) => accumulator + currentValue

const timeFormat = "%m/%d/%y"
const parseDay = timeParse(timeFormat)

const transformData = (rawData) => {
  const days = rawData.columns.slice(4)
  return days.map(day => ({
    date: parseDay(day),
    totalDeaths: rawData.map(d => +d[day]).reduce(sum, 0)
  }))
}

export const useData = () => {
  const [data,setData] = useState()

  useEffect(() => {
    csv(csvUrl).then(rawData => setData(transformData(rawData)))
  }, [])
  return data
}
