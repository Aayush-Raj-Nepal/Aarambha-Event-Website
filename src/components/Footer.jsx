import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { FooterLink } from '@/components/FooterLink'
import FooterSocialLinks from './FooterSocialLinks'

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <FooterLink href="/#events">Events</FooterLink>
              <FooterLink href="/#faqs">Faqs</FooterLink>
              <FooterLink href="/#ContactUs">Contact Us</FooterLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <FooterSocialLinks />
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Aarambha@Acem. All
            rights reserved.
          </p>
        </div>
      </Container>
      {/* a bar with reddish color */}
      <div className="min-h-1 bg-red-700 text-center font-extralight italic text-white"></div>
      <div className="min-h-1 bg-blue-700 text-center font-extralight italic text-white"></div>
    </footer>
  )
}
