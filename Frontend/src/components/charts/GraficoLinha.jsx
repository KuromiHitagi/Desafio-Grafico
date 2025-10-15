import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { agendamentosData } from "./chartData";
import "./index.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraficoLinha() {
  // Extrair labels (datas) e valores (agendamentos)
  const labels = agendamentosData.map((item) => item._id);
  const valores = agendamentosData.map((item) => item.totalAgendamentos);

  const data = {
    labels,
    datasets: [
      {
        label: "Total de Agendamentos",
        data: valores,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Agendamentos por Dia" },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
}
