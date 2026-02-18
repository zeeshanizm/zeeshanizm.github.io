
'use client'
export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/10 px-8 py-3 rounded-full">
      <div className="flex gap-6 text-sm">
        {['Home','About','Experience','Projects','Contact'].map(i=>(<a key={i} href={'#'+i.toLowerCase()}>{i}</a>))}
      </div>
    </nav>
  )
}
