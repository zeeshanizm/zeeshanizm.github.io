
'use client'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import WebGLBackground from '@/components/WebGLBackground'

export default function Home() {
  return (
    <main>
      <WebGLBackground />
      <Navbar />
      <Hero />
    </main>
  )
}
