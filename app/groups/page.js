
"use client";
import { useRouter } from "next/navigation";

export default function GroupsPage() {
  const router = useRouter();

  return (
    <div>

      {/* TOP HEADING */}
      <div className="bg-[#2D6A4F] w-full pt-6 pb-6 flex justify-center items-start">
        <h1 className="text-4xl font-bold text-white text-center font-poppins">
          🌿🍃 Join Eco Communities
        </h1>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6 p-5">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Zero Waste Team */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-green-100 to-green-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-green-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://cdn4.vectorstock.com/i/1000x1000/92/13/recycle-truck-on-half-earth-icon-day-related-vector-37049213.jpg" className="w-36 h-36 animate-wiggle" />
            </div>

            <div>
              <p className="text-3xl font-bold text-green-900 font-poppins">
                Zero Waste Team
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Reduce waste, recycle smarter, and live cleaner.
              </p>
              <button
  onClick={() => router.push("/groups/zero-waste-team")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>


            </div>
          </div>

          {/* Plant Squad */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-green-100 to-green-300
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-green-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N_ph72BxKyESn7KLW3dvSc-Q-X621DmQKw&s" className="w-36 h-36 animate-float" />
            </div>

            <div>
              <p className="text-3xl font-bold text-green-900 font-poppins">
                Plant Squad
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Grow plants, green your surroundings, spread nature.
              </p>
              <button
  onClick={() => router.push("/groups/plant-squad")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Walk More Club */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-green-100 to-green-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-green-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://m.media-amazon.com/images/I/51nmFv3plfL._AC_UF894,1000_QL80_.jpg" className="w-36 h-36 animate-wiggle" />
            </div>

            <div>
              <p className="text-3xl font-bold text-green-900 font-poppins">
                Walk More Club
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Take steps for your health and a cleaner planet.
              </p>
              <button
  onClick={() => router.push("/groups/walk-more-club")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

        </div>

        {/* SECOND COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Public Transport Heroes */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-blue-100 to-blue-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-blue-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://www.shutterstock.com/image-vector/bus-cartoon-icon-illustration-school-600nw-2506662009.jpg" className="w-36 h-36 animate-float" />
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-900 font-poppins">
                Public Transport Heroes
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Choose buses and metros to reduce pollution.
              </p>
              <button
  onClick={() => router.push("/groups/public-transport-team")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Energy Saver Squad */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-blue-100 to-blue-300
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-blue-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZkE_f092IXu6nRSGYmILJCo6lC_aZ7Eivg&s" className="w-36 h-36 animate-wiggle" />
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-900 font-poppins">
                Energy Saver Squad
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Save electricity, reduce bills, protect the planet.
              </p>
             <button
  onClick={() => router.push("/groups/energy-saver-squad")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Solar Power Group */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-blue-100 to-blue-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-blue-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://media.istockphoto.com/id/1382325937/vector/renewable-solar-photovoltaic-power-station-plant.jpg?s=612x612&w=0&k=20&c=_jo81e9CK-hV7MiIaWXTd2UUaCXyiLp7h8EwxdP5uH8=" className="w-36 h-36 animate-pulse-soft" />
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-900 font-poppins">
                Solar Power Group
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Promote clean, renewable, sun-powered energy.
              </p>
              <button
  onClick={() => router.push("/groups/solar-power")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

        </div>

        {/* THIRD COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Clean City League */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-blue-100 to-blue-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-blue-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://media.istockphoto.com/id/1828200520/vector/funny-trash-can-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=v7ixBcu6u0I2RM41L0MNrxqoN3NlEr651BZadvXnD44=" className="w-36 h-36 animate-wiggle" />
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-900 font-poppins">
                Clean City League
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Keep your city clean, tidy and trash-free.
              </p>
              <button
  onClick={() => router.push("/groups/clean-city")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Water Savers */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-blue-100 to-blue-300
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-blue-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBUFGMPA0oH9uJJYsoLAvnfXxEx4DPPvDqA&s" className="w-36 h-36 animate-pulse-soft" />
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-900 font-poppins">
                Water Savers
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Conserve water and protect our precious resource.
              </p>
              <button
  onClick={() => router.push("/groups/water-saver")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Healthy Eating Club */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-orange-100 to-orange-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-orange-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://cdn.vectorstock.com/i/1000v/64/93/carrots-vegetable-cartoon-colored-clipart-vector-46536493.jpg" className="w-36 h-36 animate-float" />
            </div>

            <div>
              <p className="text-3xl font-bold text-orange-900 font-poppins">
                Healthy Eating Club
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Eat fresh, stay healthy, and reduce food waste.
              </p>
             <button
  onClick={() => router.push("/groups/healthy-eating")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

        </div>

        {/* FOURTH COLUMN */}
        <div className="flex flex-col gap-6">

          {/* Reusable Bag Team */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-yellow-100 to-yellow-200
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-yellow-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://i.pinimg.com/736x/dd/55/3f/dd553f01c60c15b6e1ac3678c7414c38.jpg" className="w-36 h-36 animate-wiggle" />
            </div>

            <div>
              <p className="text-3xl font-bold text-yellow-900 font-poppins">
                Reusable Bag Team
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Say NO to plastic. Carry your own bag.
              </p>
              <button
  onClick={() => router.push("/groups/resuable")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Save the Earth Group */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-green-100 to-blue-100
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-green-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIPAKJQDJmRcAATs0-DDuEZta-k2U6_gNxQ&s" className="w-36 h-36 animate-float" />
            </div>

            <div>
              <p className="text-3xl font-bold text-green-900 font-poppins">
                Save the Earth Group
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Protect nature, wildlife, oceans, and forests.
              </p>
              <button
  onClick={() => router.push("/groups/save-earth")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
          </div>

          {/* Clean Fuel Community */}
          <div className="flex items-center gap-6 p-6 
            bg-gradient-to-r from-green-100 to-yellow-100
            rounded-2xl shadow-xl hover:shadow-2xl 
            hover:scale-[1.02] transition-all duration-300 ease-out
            border border-green-300">
            
            <div className="bg-white p-4 rounded-2xl shadow-md">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/008/808/995/small/cng-car-icon-in-logotype-vector.jpg" className="w-36 h-36 animate-pulse-soft" />
            </div>

            <div>
              <p className="text-3xl font-bold text-green-900 font-poppins">
                Clean Fuel Community
              </p>
              <p className="text-sm text-gray-700 mt-1 font-poppins">
                Switch to cleaner fuels for a greener future.
              </p>
              <button
  onClick={() => router.push("/groups/cleaning-comm")}
  className="mt-4 px-6 py-2 bg-green-600 text-white rounded-xl
  font-poppins hover:bg-green-700 hover:shadow-xl transition-all duration-200"
>
  Join Group
</button>

            </div>
            
          </div>

        </div>

      </div>
      {/* ----------------------------------------------------------- */}
{/* ⭐ NEW SECTIONS: Group Challenges + Group Progress + Create Group */}
{/* ----------------------------------------------------------- */}

{/* GROUP CHALLENGES */}
<div className="px-6 mt-12">
  <h2 className="text-3xl font-bold text-white font-poppins mb-4">
    🌟 Group Challenges
  </h2>

  <div className="grid grid-cols-2 gap-6">

    {/* Challenge 1 */}
    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-green-200">
      <span className="text-5xl">🚯</span>
      <p className="text-xl font-semibold text-green-900 font-poppins">
        Plastic-Free Week
      </p>
    </div>

    {/* Challenge 2 */}
    <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-md border border-green-200">
      <span className="text-5xl">🚲</span>
      <p className="text-xl font-semibold text-green-900 font-poppins">
        Bike to College Day
      </p>
    </div>

  </div>
</div>

{/* GROUP PROGRESS */}
<div className="px-6 mt-12">
  <h2 className="text-3xl font-bold text-white font-poppins mb-4">
    📈 Group Progress
  </h2>

  <div className="w-full bg-green-200 h-6 rounded-full overflow-hidden">
    <div className="h-full bg-green-700 w-[45%] rounded-full"></div>
  </div>
</div>

{/* CREATE GROUP BUTTON */}
<div className="px-6 mt-12 flex justify-center pb-12">
  <button className="
    bg-red-700
    px-12 py-4 rounded-3xl 
    border border-green-900 
    text-white font-bold text-2xl font-poppins
    shadow-md hover:shadow-xl hover:bg-green-600 hover:text-white
    transition-all duration-200
  ">
    ➕ Create a Group
  </button>
</div>

    </div>
  );
}
