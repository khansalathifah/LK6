import './App.css'

function App() {

  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x200"
          alt="Card Image"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Card Title
          </h2>
          <p className="text-gray-600 mb-4">
            This is a description of the card. It gives a brief overview of the content or purpose of the card.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
  )
}

export default App
