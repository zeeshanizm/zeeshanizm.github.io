
'use client'
import { useState, useEffect } from 'react'
const roles=['Developer','Engineer','Designer']
export default function Typing(){
  const [t,setT]=useState(''); const [i,setI]=useState(0)
  useEffect(()=>{
    let c=0; const id=setInterval(()=>{
      setT(roles[i].slice(0,c)); c++;
      if(c>roles[i].length){ clearInterval(id); setTimeout(()=>setI((i+1)%roles.length),1200)}
    },80); return ()=>clearInterval(id)
  },[i])
  return <span>{t}|</span>
}
