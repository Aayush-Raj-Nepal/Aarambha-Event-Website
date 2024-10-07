import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { GoToTop } from '@/components/GoToTop'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Aarambha',
    default: 'Aarambha - A Premier Technical Exhibition & Competition',
  },
  description:
    'Aarambha is A Premier Technical Exhibition & Competition hosted by advanced college of engineering and management.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        {children}

        <GoToTop />
      </body>
    </html>
  )
}
