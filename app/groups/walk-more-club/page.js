"use client";

export default function WalkMoreClub() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* TOP HEADER */}
      <div className="bg-white w-full rounded-3xl shadow-lg p-8 border border-teal-200">
        <h1 className="text-4xl font-extrabold text-teal-700">
          🚶‍♀️ Walk More Club
        </h1>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          Take more steps every day for better health and a cleaner, low-carbon
          lifestyle.
        </p>
      </div>

      {/* HERO IMAGE */}
      <div className="w-full flex justify-center mt-8">
        <img
          src="https://media.istockphoto.com/id/172432798/photo/diverse-fitness-group.jpg?s=612x612&w=0&k=20&c=0u5-nZGWKWMysdXVn71_ywZAPceuLl_szy80o3QP-54="
          alt="Walking in park"
          className="w-[800px] h-[380px] object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* STEP GOALS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-teal-200">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          🎯 Pick Your Daily Step Goal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-teal-50 p-5 rounded-2xl border border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800">
              🌱 Beginner – 4,000 steps
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Perfect if you are just starting. Walk to nearby shops instead of
              taking a bike.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-2xl border border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800">
              💪 Consistent – 7,000 steps
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Add a 20–30 minute evening or morning walk to your day.
            </p>
          </div>
          <div className="bg-teal-50 p-5 rounded-2xl border border-teal-200">
            <h3 className="text-lg font-semibold text-teal-800">
              🔥 Pro – 10,000 steps
            </h3>
            <p className="text-gray-700 text-sm mt-2">
              Aim for long walks + use stairs instead of lifts whenever
              possible.
            </p>
          </div>
        </div>
      </div>

      {/* STREAKS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-teal-200">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          🔁 Walk Streaks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-teal-50 border p-4 rounded-xl">
            <img
                src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1890775,resizemode-75,msid-122863098/industry/healthcare/biotech/healthcare/7000-steps-a-day-may-be-the-new-magic-number-for-better-health-lancet-study.jpg"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-teal-900">Raksha</p>
            <p className="text-gray-700 mt-1">8-day streak of 7,000+ steps.</p>
          </div>
          <div className="bg-teal-50 border p-4 rounded-xl">
            <img
                src="https://media.gettyimages.com/id/623889762/photo/two-women-pushing-bikes-in-park-and-talking.jpg?s=612x612&w=gi&k=20&c=gu9FkOmRFzxvng3DPqqvqC-EIGFn18rs7AFijqUxJU4="
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-teal-900">Aditya</p>
            <p className="text-gray-700 mt-1">
              Walks to college instead of taking a two-wheeler.
            </p>
          </div>
          <div className="bg-teal-50 border p-4 rounded-xl">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzgGqhtTAzp6oitQkEMhxmL6Jnt7Bqq8v8Ug&s"
                className="w-full h-72 rounded-lg object-cover"
            />
            <p className="font-semibold text-teal-900">Meghana</p>
            <p className="text-gray-700 mt-1">
              Evening walk group leader in her apartment.
            </p>
          </div>
        </div>
      </div>

      {/* SIMPLE HABITS */}
      <div className="w-full bg-white rounded-3xl shadow-lg p-8 mt-10 border border-teal-200">
        <h2 className="text-2xl font-bold text-teal-700 mb-6">
          👣 Tiny Habits to Add Steps
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
          <li>Get down one stop earlier and walk the rest.</li>
          <li>Use stairs for 1–2 floors instead of the lift.</li>
          <li>Walk while talking on the phone.</li>
          <li>Take a 5-minute walk break for every 45 minutes of sitting.</li>
        </ul>
      </div>

      {/* JOIN STATUS */}
      <div className="w-full text-center mt-12 pb-10">
        <button className="px-14 py-4 bg-teal-700 text-white rounded-2xl text-xl font-bold shadow-md hover:bg-teal-800 transition-all">
          ✔ You Are in Walk More Club
        </button>
      </div>
    </div>
  );
}
