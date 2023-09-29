export default function Restaurants({name, location, contact}){
    return (
        <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
            <span className="bg-red-100 border border-red-500 rounded-full text-blue-700 text-sm poppins px-4 py-1 inline-block mb-4 ">{name}</span>
            <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/42/09/4f/pool.jpg?w=600&h=-1&s=1" alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <p className="text-gray-500 poppins text-sm text-center">{location}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">${contact}</h2>
                <button className="bg-yellow-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">Check Menu and Order</button>
            </div>
        </div>
    )
}