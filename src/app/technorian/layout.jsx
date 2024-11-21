import { Counters } from '@/components/Counters'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/HeroNotMain'
import { ContactUs } from '@/components/ContactUs'

export default function CompetitionsLayout({ children }) {
  return (
    <>
      <main>
        <Header inCompetitionsPage={true} />
        <Hero>{children}</Hero>
        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
