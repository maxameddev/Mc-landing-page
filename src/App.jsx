import Hero from './components/Hero'
import LearningSection from './components/LearningSection'
import CommunityCTA from './components/CommunityCTA'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <main>
        <Hero />
        <LearningSection />
        <CommunityCTA />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}
