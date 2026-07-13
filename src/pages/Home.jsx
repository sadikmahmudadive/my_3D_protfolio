import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import Bird from '../models/Bird'
import Island from '../models/Island'
import Plane from '../models/Plane'
import Sky from '../models/Sky'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import { specialties, stats } from '../constants'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const audioRef = useRef(new Audio(sakura))

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.35
    audio.loop = true
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (isPlayingMusic) {
      audio.play().catch(() => setIsPlayingMusic(false))
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    return [
      isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1],
      [0, -6.5, -43],
      [0.1, 4.7, 0],
    ]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  const adjustPlaneForScreenSize = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    return [
      isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
      isMobile ? [0, -1.5, 0] : [2, -4, -4],
    ]
  }

  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    <section className="max-container pt-24">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="section-kicker">AI/ML, Software, IoT Engineer</span>
          <div className="space-y-5">
            <h1 className="head-text">
              Building thoughtful systems that turn research, code, and hardware into real products.
            </h1>
            <p className="section-copy">
              I design and build across the full stack, from explainable AI and graph learning to mobile apps,
              embedded prototypes, and polished web experiences. I care about clarity, reliability, and products that feel complete.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Graph learning', 'Product engineering', 'Embedded systems', 'Android', 'Firebase', 'Next.js'].map((item) => (
              <span key={item} className="glass-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn">
              Start a project
            </Link>
            <Link to="/projects" className="btn-secondary">
              See selected work
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="font-poppins text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {specialties.map((specialty) => (
              <div key={specialty.title} className="panel-soft p-5">
                <h3 className="text-lg font-semibold text-white">{specialty.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative min-h-[560px] overflow-hidden p-4 sm:p-5">
          <div className="absolute inset-x-4 top-4 z-20 flex justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>
          <div className="h-[520px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/40">
            <Canvas
              className={`h-full w-full ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={1.1} />
                <ambientLight intensity={0.55} />
                <hemisphereLight skyColor="#8ed8ff" groundColor="#000000" intensity={0.55} />
                <Bird />
                <Sky isRotating={isRotating} />
                <Island
                  scale={islandScale}
                  position={islandPosition}
                  rotation={islandRotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                />
                <Plane
                  scale={planeScale}
                  position={planePosition}
                  isRotating={isRotating}
                  rotation={[0, 20, 0]}
                />
              </Suspense>
            </Canvas>
          </div>
          <button
            type="button"
            className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-slate-950/70 p-3 backdrop-blur-xl transition hover:bg-slate-900"
            onClick={() => setIsPlayingMusic((prev) => !prev)}
            aria-label={isPlayingMusic ? 'Turn sound off' : 'Turn sound on'}
          >
            <img
              src={isPlayingMusic ? soundon : soundoff}
              alt=""
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
