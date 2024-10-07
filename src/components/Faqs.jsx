import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'How can I participate in the competitions?',
    answer:
      'You can register online through our website by visiting the "Competitions" section and following the registration instructions for each event.',
  },
  {
    question: 'What is the entry fee for Aarambha?',
    answer: 'Entry to Aarambha is free for all visitors and participants.',
  },
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
            FAQs
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team,
            and if you’re lucky someone will get back to you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure key={faq.question} as="div" className="pt-6">
              <dt>
                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                  <span className="text-base font-semibold leading-7">
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      aria-hidden="true"
                      className="h-6 w-6 group-data-[open]:hidden"
                    />
                    <MinusSmallIcon
                      aria-hidden="true"
                      className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                    />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </Container>
    </section>
  )
}
