import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { cursosData } from "./chartData";
import "./index.scss";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function GraficoBarras() {
  // Transformar os dados do JSON em arrays utilizáveis
  const labels = cursosData.map(
    (item) => `${item._id.courseName} (${item._id.periodName})`
  );
  const valores = cursosData.map((item) => item.totalInscritos);

  const data = {
    labels,
    datasets: [
      {
        label: "Total de Inscritos",
        data: valores,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Inscritos por Curso e Período" },
    },
    scales: {
      x: {
        ticks: { font: { size: 10 } },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}
