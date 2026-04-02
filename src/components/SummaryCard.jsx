const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-xl font-semibold mt-2">₹ {amount}</p>
    </div>
  );
};

export default SummaryCard;