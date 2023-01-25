import React from 'react'
import {
    Chart as chartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'

chartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
function BarChart() {
    const data = {
        labels: ['Mon','Tue', 'Wed'],
        datasets:[
            {
                label:'369',
                data:[3,6,9],
                backgroundColor:'aqua',
                borderColor:'black',
                borderWidth:1,
            }
        ]
    }
  return (
    <div className='w-20 h-20'>
        <Bar
            data={data}
            options={options}
        >

        </Bar>
    </div>
  )
}

export default BarChart