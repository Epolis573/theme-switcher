'use client'
import { useEffect, useState } from 'react'
import Home from "../components/Home"
import Header from '../components/Header';
import ScrollAnchorMessage from '@/components/ScrollAnchorMessage';
import ScrollComponent from '@/components/ScrollComponent';

export default function Page() {
   const [opacity, setOpacity] = useState(0.55)
  
    useEffect(() => {
      const duration = 800 // ms
      const frameRate = 1000 / 60
      const totalFrames = duration / frameRate
      let frame = 0
  
      const start = 0.05
      const end = 0.55
  
      const animate = () => {
        frame++
        const progress = frame / totalFrames
        const eased = start + (end - start) * progress
        setOpacity(Number(eased.toFixed(3)))
        if (frame < totalFrames) requestAnimationFrame(animate)
      }
  
      animate()
    }, [])
  
  return (
    <>
    <ScrollComponent />
    <Header />
    <Home bgOpacity={opacity}/>
    <ScrollAnchorMessage/> 
    </>
    
  );
}
