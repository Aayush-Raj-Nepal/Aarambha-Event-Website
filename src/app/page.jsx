import { Counters } from '@/components/Counters'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ContactUs } from '@/components/ContactUs'
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { MainEvents } from '@/components/MainEvents'
import { Sponsors } from '@/components/Sponsors'
import Competitions from '@/components/Competitions'
import Technorian from '@/components/Technorian'

// import { Testimonials } from '@/components/Testimonials'
import { Popup } from '@/components/Popup'


export default function Home() {
  return (
    <>
      <main>
        {/* <div className="bg-slate-900 py-2 text-center font-extralight italic text-white">
          Theme for Aarambha 2024 is out now! : Engineering 360: A holistic
          approach to innovation
        </div> */}
        <Popup />
        <Header />
        <Hero />
        <Sponsors />
        <Counters />

        {/* <PrimaryFeatures /> */}
        <MainEvents />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        <Competitions />
        {/* <Technorian /> */}
        <Faqs />
        <ContactUs />
        <Footer />
      </main>
    </>
  )
}
