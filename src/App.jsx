import Hero from './components/Hero'
import LearningSection from './components/LearningSection'
import CommunityCTA from './components/CommunityCTA'
import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'
import FloatingTelegramButton from './components/FloatingTelegramButton'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <main>
        <Hero />
        <LearningSection />
        <CommunityCTA />
        <Disclaimer />
      </main>
      <Footer />
      <FloatingTelegramButton />
    </div>
  )
}
