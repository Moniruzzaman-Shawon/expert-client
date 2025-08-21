import PropTypes from "prop-types";

export default function Cart({ cartItems }) {
// Calculate total cost (sum of salaries)
  const totalSalary = cartItems.reduce((sum, item) => sum + item.salary, 0);

  return (
    <div className="bg-gray-100 shadow-md rounded-2xl p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {/* Summary */}
      <p className="mb-1 font-semibold">Experts Added: {cartItems.length}</p>
      <p className="mb-4 font-semibold">Total Cost: ${totalSalary}</p>

      {/* List of experts */}
      <ul className="flex flex-col gap-3 mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex items-center gap-3 bg-white p-2 rounded shadow">
            <img
              src={item.img}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Confirm List Button */}
      <button
        className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        onClick={() => alert("List Confirmed!")}
      >
        Confirm List
      </button>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
    })
  ).isRequired,
};
