"use client";

export default function HealthyEatingClub() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-lg p-8 border border-orange-200">
        <h1 className="text-4xl font-extrabold text-orange-700">
          🥕 Healthy Eating Club
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Eat fresh, stay healthy, and reduce food waste with simple, delicious
          choices.
        </p>
      </div>

      {/* HERO + QUICK INFO */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Healthy food"
            className="w-full max-w-[650px] h-[360px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-orange-200 text-sm">
          <h2 className="text-xl font-bold text-orange-700 mb-4">
            🍽 What We Focus On
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>More fruits, veggies, and whole foods.</li>
            <li>Less junk, sugary drinks, and processed snacks.</li>
            <li>Smart portion sizes to avoid food waste.</li>
            <li>Easy, student-friendly recipes.</li>
          </ul>
        </div>
      </div>

      {/* MEAL IDEAS */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-orange-200">
        <h2 className="text-2xl font-bold text-orange-700 mb-6">
          🥗 3 Simple Meal Ideas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800">
              🍚 Veggie Bowl
            </h3>
            <p className="text-gray-700 mt-2">
              Leftover rice + sautéed veggies + curd = quick, balanced meal.
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800">
              🥪 Smart Sandwich
            </h3>
            <p className="text-gray-700 mt-2">
              Whole wheat bread + cucumber + tomato + paneer / sprouts.
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-2xl border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-800">
              🍎 Fruit-Yogurt Cup
            </h3>
            <p className="text-gray-700 mt-2">
              Curd + cut fruits + handful of nuts instead of packaged dessert.
            </p>
          </div>
        </div>
      </div>

      {/* FOOD WASTE SECTION */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-orange-200">
        <h2 className="text-2xl font-bold text-orange-700 mb-6">
          🚯 Food Waste Fighters
        </h2>

        <div className="flex flex-col md:flex-row gap-6 text-sm">
          <img
            src="https://media.istockphoto.com/id/1403121168/vector/3d-isometric-flat-vector-conceptual-illustration-of-reducing-food-waste.jpg?s=612x612&w=0&k=20&c=TkU3FcZHtx892qnphIey_g-zdTFz4QFmBANpK8k1RQU="
            alt="Food waste"
            className="w-full md:w-72 h-52 md:h-60 rounded-2xl object-cover"
          />
          <div>
            <p className="text-gray-700">
              Simple ways Healthy Eating Club reduces food waste:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
              <li>Share extra food with roommates / neighbours.</li>
              <li>Store leftovers properly and use them the next day.</li>
              <li>Plan portions – don&apos;t overload plates.</li>
              <li>Turn extra veggies into soups or stir-fries.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MEMBER HABIT WALL */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mt-10 border border-orange-200">
        <h2 className="text-2xl font-bold text-orange-700 mb-6">
          🧡 Healthy Habit Wall
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-orange-50 border p-4 rounded-xl">
            <img 
                src="https://img.freepik.com/free-photo/platter-mixed-fruit_23-2147689622.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Healthy snack"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-orange-900">Raksha</p>
            <p className="text-gray-700 mt-1">
              Replaced evening chips with fruit and nuts 5 days a week.
            </p>
          </div>
          <div className="bg-orange-50 border p-4 rounded-xl">
            <img 
                src="https://img.freepik.com/free-photo/delicious-salmon-bowls-table-arrangement_23-2150427656.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Homemade lunch"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-orange-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Carries home lunch to avoid oily canteen food.
            </p>
          </div>
          <div className="bg-orange-50 border p-4 rounded-xl">
            <img 
                src="https://media.gettyimages.com/id/2212535356/photo/family-and-friends-enjoying-a-meal-together-outdoors.jpg?s=612x612&w=gi&k=20&c=8BpplF7x1v44qhVNgxN5QcNoP-N5cFGkGzv34vGBXCA="
                alt="Salad bowl"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-orange-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Started a &quot;Salad Saturday&quot; challenge in her friend group.
            </p>
          </div>
        </div>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-orange-600 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-orange-700 transition-all">
          ✔ You Are in Healthy Eating Club
        </button>
      </div>
    </div>
  );
}
