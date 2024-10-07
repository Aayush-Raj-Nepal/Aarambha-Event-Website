import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How can I participate in the competitions?',
      answer:
        'You can register online through our website by visiting the "Competitions" section and following the registration instructions for each event.',
    },
    {
      question: 'What is the entry fee for Aarambha?',
      answer: 'Entry to Aarambha is free for all visitors and participants.',
    },
  ],
  [
    {
      question: 'What are the prizes for the competition winners?',
      answer:
        'The winners will receive cash prizes, certificates, and medals, depending on the event.',
    },
    {
      question: 'Where will the event take place?',
      answer:
        'Aarambha will be held at Advanced College of Engineering and Management, Kalanki, Kathmandu on the 7th and 8th of Mangsir, 2081.',
    },
  ],
  [
    {
      question: 'Can I attend the workshops if I am not a student?',
      answer:
        'Yes, the workshops are open to everyone interested in learning new skills, not just students.',
    },
    {
      question: 'Will there be any food and drinks available at the event?',
      answer:
        'Yes, there will be several food stalls available at the venue throughout the event.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-7xl text-center lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Faqs
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
