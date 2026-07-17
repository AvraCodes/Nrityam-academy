"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface PulseMarker {
  id: string
  location: [number, number]
  delay: number
}

interface GlobePulseProps {
  markers?: PulseMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: PulseMarker[] = [
  { id: "pulse-1", location: [51.51, -0.13], delay: 0 },
  { id: "pulse-2", location: [40.71, -74.01], delay: 0.5 },
  { id: "pulse-3", location: [35.68, 139.65], delay: 1 },
  { id: "pulse-4", location: [-33.87, 151.21], delay: 1.5 },
]

export function GlobePulse({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: GlobePulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  
  const widthRef = useRef(0)

  useEffect(() => {
    let currentGlobe: any;
    const init = () => {
      if (!canvasRef.current) return
      
      const width = canvasRef.current.offsetWidth || 500
      
      currentGlobe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3], // Dark grey/black base
      markerColor: [0.8, 0.4, 0.1], // Orange-ish markers
      glowColor: [0.1, 0.1, 0.1],
      markers: markers.map((m) => ({ location: m.location, size: 0.1 })),
      // @ts-expect-error onRender is valid in cobe but might be missing in its ts definition
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phiOffsetRef.current += speed
        }
        
        state.phi = phiOffsetRef.current + dragOffset.current.phi
        state.theta = thetaOffsetRef.current + dragOffset.current.theta
      },
    })
    }

    init()
    
    // Add resize listener to recreate globe if needed
    const handleResize = () => {
      if (currentGlobe) currentGlobe.destroy()
      init()
    }
    
    window.addEventListener("resize", handleResize)

    return () => {
      if (currentGlobe) currentGlobe.destroy()
      window.removeEventListener("resize", handleResize)
    }
  }, [markers, speed])

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    pointerInteracting.current = {
      x: e.clientX,
      y: e.clientY,
    }
    
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing"
    }
  }

  const handlePointerUp = () => {
    pointerInteracting.current = null
    
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }

  const handlePointerOut = () => {
    pointerInteracting.current = null
    
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerInteracting.current) {
      const deltaX = e.clientX - pointerInteracting.current.x
      const deltaY = e.clientY - pointerInteracting.current.y
      
      pointerInteracting.current = {
        x: e.clientX,
        y: e.clientY,
      }
      
      dragOffset.current = {
        phi: dragOffset.current.phi + deltaX / 200,
        theta: Math.max(
          -Math.PI / 2, 
          Math.min(Math.PI / 2, dragOffset.current.theta + deltaY / 200)
        ),
      }
    }
  }

  return (
    <div className={`relative w-full aspect-square max-w-[600px] mx-auto ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onPointerMove={handlePointerMove}
        className="w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab"
        style={{
          contain: "layout paint size",
          opacity: 1,
        }}
      />
      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `rotate(${marker.location[1]}deg) rotateX(${marker.location[0]}deg)`,
            animationDelay: `${marker.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
