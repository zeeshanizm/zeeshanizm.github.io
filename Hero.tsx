
'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Typing from './Typing'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>
        <Image src="/profile.png" alt="profile" width={140} height={140} className="rounded-full mx-auto border-4 border-indigo-500"/>
        <h1 className="text-5xl font-bold mt-6">Hello, I'm <span className="text-indigo-500">Your Name</span></h1>
        <h2 className="mt-4 text-xl"><Typing/></h2>
      </motion.div>
    </section>
  )
}
