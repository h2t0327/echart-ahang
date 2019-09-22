import React from 'react'
import { lineCharts, barCharts, pieCharts } from './charts'
import { lineOption, barOption, pieOption } from './options'
const pathObj = {
  line: [lineOption, lineCharts],
  bar: [barOption, barCharts],
  pie: [pieOption, pieCharts]
}

export default props => {
  const Echarts = pathObj[props.type][1]
  const obj = { option: pathObj[props.type][0], ...props }
  if (props.data.length > 0) {
    if (props.type === 'pie') {
      obj.option.series[0].data = [...props.data]
    } else {
      obj.option.series[0].data = props.data.map(item => item.value)
      obj.option.xAxis.data = props.data.map(item => item.name)
    }
  }
  obj.option.series[0].name = props.name
  return <Echarts {...obj} />
}
