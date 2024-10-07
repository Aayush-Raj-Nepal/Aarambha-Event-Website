import Link from 'next/link'

export function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-200 hover:text-white"
    >
      {children}
    </Link>
  )
}
