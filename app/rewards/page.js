"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Confetti
const showConfetti = () => {
  import("canvas-confetti").then((module) => {
    const confetti = module.default;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
};

export default function RewardsPage() {
  const router = useRouter();

  // Points
  const [userPoints] = useState(240);
  const [groupPoints] = useState(1460);
  const [groupName] = useState("Earth saver");

  // Modal Data
  const [modalData, setModalData] = useState(null);

  // ⭐ Notification State
  const [notification, setNotification] = useState("");

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 2000);
  };

  // Reward Lists
  const personalRewards = [
    {
      title: "Water Saver",
      req: 100,
      image: "https://t4.ftcdn.net/jpg/05/81/09/49/360_F_581094947_Fj3N2kmOTxBXjABcl0GuRYlYjy4z9nmF.jpg",
      titleColor: "text-blue-600",
    },
    {
      title: "Eco Traveller",
      req: 200,
      image: "https://media.istockphoto.com/id/1372488167/photo/a-lake-in-the-shape-of-an-airplane-in-the-middle-of-untouched-nature-a-concept-illustrating.jpg?s=612x612&w=0&k=20&c=d-2X_9pmP_RRfvNfTsptxluq5mCcF_ahUZhMi6ESlow=",
      titleColor: "text-purple-600",
    },
    {
      title: "Zero Waste Beginner",
      req: 300,
      image: "https://media.istockphoto.com/id/1956680689/photo/waste-recycling-for-a-clean-and-healthy-environment-zero-waste-concept.jpg?s=612x612&w=0&k=20&c=OMHzooo2GbWWxWYNOIO1MGcL4ACBLOpoz7xSj8m73Sc=",
      titleColor: "text-green-600",
    },
  ];

  const groupRewards = [
    {
      title: "Group Bronze Badge",
      req: 1000,
      image: "https://img.freepik.com/premium-vector/bronze-award-sport-medal-winners-with-red-ribbon-third-place-trophy-honor-badges_599062-3503.jpg?semt=ais_hybrid&w=740&q=80",
      titleColor: "text-yellow-700",
    },
    {
      title: "Group Silver Badge",
      req: 5000,
      image: "https://img.freepik.com/premium-vector/silver-award-medal-with-star-illustration-from-geometric-shapes_599062-9011.jpg?semt=ais_hybrid&w=740&q=80",
      titleColor: "text-gray-500",
    },
    {
      title: "Group Gold Badge",
      req: 10000,
      image: "https://t4.ftcdn.net/jpg/03/50/11/83/360_F_350118359_fs2GIXzHjBhStQtRXq4yI927EcSxfS9A.jpg",
      titleColor: "text-orange-500",
    },
  ];

  const checkUnlocked = (current, required) => current >= required;

  // Confetti on load
  useEffect(() => {
    personalRewards.forEach((r) => checkUnlocked(userPoints, r.req) && showConfetti());
    groupRewards.forEach((r) => checkUnlocked(groupPoints, r.req) && showConfetti());
  }, []);

  const openModal = (reward) => setModalData(reward);
  const closeModal = () => setModalData(null);

  return (
    <div className="min-h-screen bg-black p-6">

      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow mb-8 flex gap-6">

  {/* LEFT SIDE - IMAGE */}
  <img 
    src="https://img.freepik.com/premium-photo/group-people-holding-up-trophy-that-says-year-it_939033-61409.jpg"
    className="w-100 h-80 rounded-lg"
  />

  {/* RIGHT SIDE - TEXT */}
  <div className="flex flex-col justify-center">

    <h1 className="text-3xl font-bold text-green-600 mb-4">🎁 Rewards Center</h1>

    <p className="text-black text-xl">
      <strong>Your Points: </strong> {userPoints}
    </p>

    <p className="text-black text-xl">
    <strong>Group Points:</strong>   {groupPoints}
    </p>

    <p className="text-black text-xl">
      <strong>Group Name:</strong> {groupName}
    </p>

  </div>

</div>


      {/* Personal Rewards */}
      <RewardSection
        title="Personal Rewards"
        rewards={personalRewards}
        currentPoints={userPoints}
        checkUnlocked={checkUnlocked}
        openModal={openModal}
        showNotification={showNotification}
      />

      {/* Group Rewards */}
      <RewardSection
        title="Group Rewards"
        rewards={groupRewards}
        currentPoints={groupPoints}
        checkUnlocked={checkUnlocked}
        openModal={openModal}
        showNotification={showNotification}
      />

      {/* ⭐ Notification Bar */}
      {notification && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg">
          {notification}
        </div>
      )}

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-green-700">
              {modalData.title}
            </h2>

            <p className="text-gray-600 mt-3">
              Requirement: <strong>{modalData.req} points</strong>
            </p>

            <button
              onClick={closeModal}
              className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}



// -------------------- SIMPLE REWARD SECTION --------------------

function RewardSection({ title, rewards, currentPoints, checkUnlocked, openModal, showNotification }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-green-400">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {rewards.map((r, i) => {
          const unlocked = checkUnlocked(currentPoints, r.req);
          const progress = Math.min((currentPoints / r.req) * 100, 100);

          return (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow border cursor-pointer"
              onClick={() => {
                openModal(r);
                showNotification(`${r.title} clicked!`);
              }}
            >
              {/* Image + Title */}
              <div className="flex items-center gap-4">
                <img src={r.image} className="w-56 h-46" />
                <h3 className={`text-xl font-semibold ${r.titleColor}`}>
                  {r.title}
                </h3>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 h-3 rounded-full mt-4">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {currentPoints} / {r.req} points
              </p>

              <p className={`font-bold mt-1 ${unlocked ? "text-green-700" : "text-red-500"}`}>
                {unlocked ? "Unlocked ✔" : "Locked ✖"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
