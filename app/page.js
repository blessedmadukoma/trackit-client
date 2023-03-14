"use client";
// import Image from 'next/image'
import Header from "./components/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Home() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <main className="mx-12 my-5">
      <Header />

      <h1 className="text-2xl font-semibold tracking-wider">Welcome, Jacob</h1>

      <div className="mt-6 flex justify-center space-x-8 rounded-lg bg-white py-4 text-gray-900">
        <section class="flex flex-col items-center">
          <div class="flex h-20 w-20 justify-center rounded-full bg-red-100">
            <img src="assets/minus.svg" alt="Expense" />
          </div>
          <span class="mt-2 block tracking-wide ">Add expense</span>
        </section>

        <section class="flex flex-col items-center">
          <div class="flex h-20 w-20 justify-center rounded-full bg-green-100">
            <img src="assets/plus.svg" alt="Income" />
          </div>
          <span class="mt-2 block tracking-wide">Add income</span>
        </section>

        <section class="flex flex-col items-center">
          <div class="flex h-20 w-20 justify-center rounded-full bg-blue-100">
            <img src="assets/wallet.svg" alt="Budget" />
          </div>
          <span class="mt-2 block tracking-wide">Create budget</span>
        </section>
      </div>

      {/* balance and details section */}
      <section class="mt-6 mb-10 flex space-x-6 capitalize text-gray-900">
        <section class="w-1/5 rounded-lg bg-white p-4">
          <span class="block text-sm">Total Balance</span>
          <div class="flex items-center">
            <img class="py-3" src="assets/total-balance.svg" alt="balance" />
            <span class="pl-4 text-lg font-semibold">&#8358; 100,000</span>
          </div>
        </section>

        <section class="w-1/5 rounded-lg bg-white p-4">
          <span class="block text-sm">Budget</span>
          <div class="flex items-center">
            <img class="py-3" src="assets/budget-outline.svg" alt="budget" />
            <span class="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>

        <section class="w-1/5 rounded-lg bg-white p-4">
          <span class="block text-sm">Income</span>
          <div class="flex items-center">
            <img class="py-3" src="assets/income-up.svg" alt="income" />
            <span class="pl-4 text-lg font-semibold">&#8358; 100,000</span>
          </div>
        </section>

        <section class="w-1/5 rounded-lg bg-white p-4">
          <span class="block text-sm">Expenses</span>
          <div class="flex items-center">
            <img class="py-3" src="assets/expense-down.svg" alt="expense" />
            <span class="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>

        <section class="w-1/5 rounded-lg bg-white p-4">
          <span class="block text-sm">Savings</span>
          <div class="flex items-center">
            <img class="py-3" src="assets/savings.svg" alt="savings" />
            <span class="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>
      </section>
      {/* end of balance and details section */}

      {/* history and graph section */}
      <section class="flex space-x-6 text-gray-900">
        <section class="w-1/2 rounded-lg bg-white p-4">
          <span class="block tracking-wide">Transaction history</span>
          <span class="block pt-4 text-sm text-gray-400">Today</span>
          <div class="mt-2 flex items-center justify-between">
            <div class="flex space-x-3">
              <img src="./assets/svg/total-balance.svg" alt="" />
              <div>
                <span class="block">income</span>
                <span class="block">02:00 PM</span>
              </div>
            </div>
            <span class="text-md text-green-500">&#8358; 100,000</span>
          </div>

          {/* <div class="flex items-center justify-center">
            <span class="p-24 text-gray-400">No Recent Activities</span>
          </div> */}
        </section>
        <section class="w-1/2 rounded-lg bg-white p-4">
          {/* <span class="block tracking-wide">Data Overview</span> */}
          {/* <canvas id="chart2"></canvas> */}
          <Line options={options} data={data} />;
        </section>
      </section>
    </main>
  );
}
