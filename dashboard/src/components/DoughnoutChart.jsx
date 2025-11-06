import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const DoughnoutChart = ({ data }) => {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Doughnut data={data} />
    </div>
  );
};
