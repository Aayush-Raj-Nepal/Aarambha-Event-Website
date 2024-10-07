import { Counters } from '@/components/Counters'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ContactUs } from '@/components/ContactUs'

export default function CompetitionsLayout({ children }) {
  return (
    <>
      <main>
        <div className="bg-slate-900 py-2 text-center font-extralight italic text-white">
          Theme for Aarambha 2024 is out now! : Engineering 360: A holistic
          approach to innovation
        </div>
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <Header inCompetitionsPage={true} />
        </div>
        {children}

        <Faqs />
        <ContactUs />
      </main>
      <Footer />
    </>
  )
}
