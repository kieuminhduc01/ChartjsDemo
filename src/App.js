import logo from './logo.svg';
import './App.css';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from 'react-chartjs-2';

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const data = {
  labels: ["Today", "Nov 24", "Nov 25", "Nov 26", "Nov 27", "Nov 28"],
  datasets: [
    {
      label: "Temperature",
      data: [75, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }
  ]
};

function App() {
  return (
    <div className="App">
      <div style={{ width: '900px', height: '900px' }}>
        <Line data={data}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Temperature",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;
