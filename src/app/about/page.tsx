'use client'
import { useEffect, useState } from 'react'
import AboutContent from '@/components/AboutContent'
import Header from '@/components/Header'
import Home from '@/components/Home'
import React from 'react'

export default function AboutPage() {
  const [opacity, setOpacity] = useState(0.55)

  useEffect(() => {
    const duration = 800 // ms
    const frameRate = 1000 / 60
    const totalFrames = duration / frameRate
    let frame = 0

    const start = 0.55
    const end = 0.05

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
      <Header />
      <Home bgOpacity={opacity}>
        <AboutContent />
      </Home>
    </>
  )
}