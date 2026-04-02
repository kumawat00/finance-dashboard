import SummaryCard from "../components/SummaryCard";
import LineChartComponent from "../components/Charts/LineChartComponent";
import PieChartComponent from "../components/Charts/PieChartComponent";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";
import { data } from "../data/mockData";
import { useState } from "react";

const Dashboard = () => {

  const [role, setRole] = useState("viewer");

  const income = data
    .filter(item => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = data
    .filter(item => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">
        Finance Dashboard
      </h1>

      {/* Role Switch */}
      <RoleSwitcher role={role} setRole={setRole} />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Total Income" amount={income} />
        <SummaryCard title="Total Expense" amount={expense} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LineChartComponent data={data} />
        <PieChartComponent data={data} />
      </div>

      {/* Transactions */}
      <TransactionTable data={data} role={role} />

      {/* Insights */}
      <Insights data={data} />
    </div>
  );
};

export default Dashboard;