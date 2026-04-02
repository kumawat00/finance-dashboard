import { useState } from "react";

const TransactionTable = ({ data, role }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  // filter + search logic
  const filteredData = data
    .filter(item =>
      item.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter(item =>
      filterType === "all" ? true : item.type === filterType
    );

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-5">
      <h2 className="text-lg font-semibold mb-3">
        Transactions
      </h2>

      {/* ✅ Admin Button */}
      {role === "admin" && (
        <button className="mb-3 bg-blue-500 text-white px-4 py-2 rounded">
          Add Transaction
        </button>
      )}

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map(item => (
                <tr key={item.id}>
                  <td className="p-2 border">{item.date}</td>
                  <td className="p-2 border">{item.category}</td>
                  <td className="p-2 border capitalize">
                    {item.type}
                  </td>
                  <td className="p-2 border">₹ {item.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-3">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;