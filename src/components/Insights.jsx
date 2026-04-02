const Insights = ({ data }) => {

  const categoryTotals = {};

  data.forEach(item => {
    if (item.type === "expense") {
      categoryTotals[item.category] =
        (categoryTotals[item.category] || 0) + item.amount;
    }
  });

  const highestCategory = Object.keys(categoryTotals).length > 0
    ? Object.keys(categoryTotals).reduce((a, b) =>
        categoryTotals[a] > categoryTotals[b] ? a : b
      )
    : "N/A";

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-5">
      <h2 className="font-semibold mb-2">Insights</h2>

      <p>Highest spending: {highestCategory}</p>
      <p>Total Transactions: {data.length}</p>
    </div>
  );
};

export default Insights;