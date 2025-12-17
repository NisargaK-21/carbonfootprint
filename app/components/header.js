"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full font-serif">

      <div className="bg-[#2D6A4F] text-white flex flex-wrap justify-between items-center px-4 py-2 text-sm">
        <div className="flex gap-6 flex-wrap">
          <p className="mr-6">📞 +47 3337 8901</p>
          <p>✉️ carbonfootprint@canopy.com</p>
        </div>
        <div className="flex gap-3 items-center mt-2 sm:mt-0">
          <p>🌐 English</p>
          <img className="rounded-full w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5N50lV_gQyxfU7iG9eFvdUrFjJhR7QOrw&s" alt="facebook"/>
          <img className="rounded-full w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="twitter"/>
          <img className="rounded-full w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDydOoTB3mhWwxdum41PJYGshzdGDESOpT-g&s" alt="instagram"/>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-4 border-b border-[#2D6A4F]">
        <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 gap-2">
          <img className="h-20 w-auto" src="https://tse3.mm.bing.net/th/id/OIP.OWgDiY_vkwhk4QfsPQBr4QHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo"/>

          <button
            className="block lg:hidden text-white text-[30px] w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        
        <nav className="flex flex-wrap hidden lg:flex gap-6 justify-center text-lg font-medium">
          <Link href="/" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Home</Link> 
          <Link href="/Tips" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Tips</Link>
          <Link href="/Tracker" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Tracker</Link>
          <Link href="/Project" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Projects</Link>
          <Link href="/groups" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Group</Link>
          <Link href="/Rewards" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Rewards</Link>
          <Link href="/login" className="text-white hover:text-[#2D6A4F] hover:underline transition-all">Login</Link>
        </nav>
      </div>
      
      {isOpen && (
        <div className="bg-black text-white flex flex-col items-start px-6 py-3 gap-4 text-lg lg:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/Tracker" onClick={() => setIsOpen(false)}>Tracker</Link>
          <Link href="/Project" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/Group" onClick={() => setIsOpen(false)}>Group</Link>
          <Link href="/Rewards" onClick={() => setIsOpen(false)}>Rewards</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}

    </div>
  )
}
