"use client";
// import Image from 'next/image'
import Header from "../../components/Header";
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
import { useAuth } from "../../context/Auth";
import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

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
  // const router = useRouter();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data Overview",
      },
    },
  };

  const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Transactions",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const { user, isAuthenticated } = useAuth();

  const firstname =
  user?.firstname.charAt(0).toUpperCase()
  + user?.firstname.slice(1)
  
  // console.log("user:", user, isAuthenticated);

  return (
    <section className="mx-12 my-5">
      <Header />

      <h1 className="text-2xl font-semibold tracking-wider">Welcome, {firstname}</h1>

      <section className="mt-6 flex justify-center space-x-10 rounded-lg bg-white py-4 text-gray-900">
        <section className="flex cursor-pointer flex-col items-center">
          <div className="flex h-20 w-20 justify-center rounded-full bg-red-100">
            <img src="../assets/minus.svg" alt="Expense" />
          </div>
          <span className="mt-2 block tracking-wide ">Add expense</span>
        </section>

        <section className="flex cursor-pointer flex-col items-center">
          <div className="flex h-20 w-20 justify-center rounded-full bg-green-100">
            <img src="../assets/plus.svg" alt="Income" />
          </div>
          <span className="mt-2 block tracking-wide">Add income</span>
        </section>

        <section className="flex cursor-pointer flex-col items-center">
          <div className="flex h-20 w-20 justify-center rounded-full bg-blue-100">
            <img src="../assets/wallet.svg" alt="Budget" />
          </div>
          <span className="mt-2 block tracking-wide">Create budget</span>
        </section>
      </section>

      {/* balance and details section */}
      <section className="mt-6 mb-10 flex space-x-6 capitalize text-gray-900">
        <section className="w-1/5 rounded-lg bg-white p-4">
          <span className="block text-sm">Total Balance</span>
          <div className="flex items-center">
            <img
              className="py-3"
              src="../assets/total-balance.svg"
              alt="balance"
            />
            <span className="pl-4 text-lg font-semibold">&#8358; 100,000</span>
          </div>
        </section>

        <section className="w-1/5 rounded-lg bg-white p-4">
          <span className="block text-sm">Budget</span>
          <div className="flex items-center">
            <img
              className="py-3"
              src="../assets/budget-outline.svg"
              alt="budget"
            />
            <span className="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>

        <section className="w-1/5 rounded-lg bg-white p-4">
          <span className="block text-sm">Income</span>
          <div className="flex items-center">
            <img className="py-3" src="../assets/income-up.svg" alt="income" />
            <span className="pl-4 text-lg font-semibold">&#8358; 100,000</span>
          </div>
        </section>

        <section className="w-1/5 rounded-lg bg-white p-4">
          <span className="block text-sm">Expenses</span>
          <div className="flex items-center">
            <img className="py-3" src="../assets/expense-down.svg" alt="expense" />
            <span className="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>

        <section className="w-1/5 rounded-lg bg-white p-4">
          <span className="block text-sm">Savings</span>
          <div className="flex items-center">
            <img className="py-3" src="../assets/savings.svg" alt="savings" />
            <span className="pl-4 text-lg font-semibold">&#8358; 0</span>
          </div>
        </section>
      </section>
      {/* end of balance and details section */}

      {/* history and graph section */}
      <section className="flex space-x-6 text-gray-900">
        <section className="w-1/2 rounded-lg bg-white p-4">
          <span className="block tracking-wide">Transaction history</span>
          <span className="block pt-4 text-sm text-gray-400">Today</span>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex space-x-3">
              <img src="../assets/total-balance.svg" alt="balance" />
              <div className="flex flex-col justify-between">
                <span className="block">income</span>
                <span className="block text-sm font-medium tracking-wider text-gray-400">
                  02:00 PM
                </span>
              </div>
            </div>
            <span className="text-md text-green-500">&#8358; 100,000</span>
          </div>

          {/* <div className="flex items-center justify-center">
            <span className="p-24 text-gray-400">No Recent Activities</span>
          </div> */}
        </section>
        <section className="w-1/2 rounded-lg bg-white p-4">
          {/* <span className="block tracking-wide">Data Overview</span> */}
          {/* <canvas id="chart2"></canvas> */}
          <Line options={options} data={data} />
        </section>
      </section>
    </section>
  );
}
