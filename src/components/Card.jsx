import PropTypes from "prop-types";

export default function Card({ expert, addToCart }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition flex flex-col items-center">
      <img
        src={expert.img}
        alt={expert.name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-xl font-bold">{expert.name}</h2>
      <p className="text-sm text-gray-600">Age: {expert.age}</p>
      <p className="text-sm text-gray-600">Designation: {expert.designation}</p>
      <p className="text-sm text-gray-600">Address: {expert.address}</p>
      <p className="text-sm text-gray-600">Salary: ${expert.salary}</p>
      <button
        onClick={() => addToCart(expert)}
        className="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition"
      >
        Add to List
      </button>
    </div>
  );
}

Card.propTypes = {
  expert: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    designation: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
