import React from 'react'

export default function Footer() {
  return (
      <footer className="w-full border-t bg-black font-heading border-white/10 px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px]  text-white/40">
          <p>© {new Date().getFullYear()} LLAMA CAFÉ. ALL RIGHTS RESERVED.</p>
          <p className="uppercase tracking-widest">Crafted with passion in Saudi Arabia</p>
      </footer>  )
}
