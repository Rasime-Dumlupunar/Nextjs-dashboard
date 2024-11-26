"use client";

import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Order } from "@/types";


// Chart.js modüllerini kaydediyoruz
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement);

const Graph = ({data} : {data:Order[] }) => {
  // grafik kütüphanesinin istediği veri formatı
  console.log(data);
    const data1 = {
        labels: data.map((i) => i.orderDate),
        datasets: [
          {
            id: 1,
            label: "Fiyat",
            data: data.map((i) => i.totalAmount),
            borderColor: 'rgba(75,192,192,1)',  // Çizgi rengi
            tension: 0.2, // Çizgi eğriliği
            pointRadius: 5, // Nokta yarıçapı
            pointBackgroundColor: 'rgba(75,192,192,1)', // Nokta arka plan rengi
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Satış Grafiği",
          },
        },
        scales: {
          x: {
            id: 'x',
            type: 'category', // X ekseni kategorik olacak
            title: {
              display: true,
              text: "--- Tarih ---",
            },
          },
          y: {
            id: 'y',
            type: 'linear', // Y ekseni sayısal olacak
            title: {
              display: true,
              text: "--- Fiyat ---",
            },
          },
        },
      };
  return (
    <div>
         <Line data={data1}  />
    </div>
  )
}

export default Graph;
