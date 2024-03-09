import React from 'react'

interface CellProps {
    displayList: any; 
    chartTable: any;
  }
const Cell: React.FC<CellProps>=({displayList, chartTable})=> {
    console.log(displayList)
    console.log(chartTable)
  return (
    <div>Cell</div>
  )
}

export default Cell