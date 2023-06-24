import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, ChartOptions, Tooltip, Legend } from 'chart.js';

import { GetSelectedDateState } from 'services/calendarService';
import { getApiCalendarReportData } from 'services/calendarApiService';

import styles from './styles.module.scss';

interface ChartData {
  labels: string[];
  datasets: any;
}

const initialData: ChartData = {
  labels: ['텀블러', '대중교통', '장바구니'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [400, 50, 100],
      backgroundColor: ['rgb(144, 210, 60)', 'rgb(36, 174, 50)', 'rgb(57, 164, 240)'],
      hoverOffset: 4,
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        font: {
          size: 18,
        },
      },
    },
  },
};

export default function IsReportDataDiary() {
  const selectedValue = GetSelectedDateState();
  const [data, setData] = useState<ChartData>(initialData);
  const selectedValueInReport = dayjs(selectedValue).format('YYYY-MM');

  const monthData = dayjs(selectedValue).format('M');

  Chart.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    getApiCalendarReportData(selectedValueInReport).then((response) => {
      setData((prevData) => ({
        ...prevData,
        labels: Object.keys(response),
        datasets: [
          {
            ...prevData.datasets[0],
            data: Object.values(response),
          },
        ],
      }));
    });
  }, [selectedValue]);

  return (
    <div className={styles.reportContainer}>
      <span>{monthData}월 통계 데이터</span>
      <Doughnut data={data} options={options} />
    </div>
  );
}
