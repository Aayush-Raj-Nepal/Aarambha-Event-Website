'use client'
export const ContactUs = () => {
  return (
    <main id="contactus" className="pt-10">
      <main id="ContactUs" className="pt-10">
        <section id="contact-us" className="bg-gray-900 py-16">
          <div className="container mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-white">Contact Us</h2>
              <p className="mt-4 text-gray-400">
                Reach out to us for any inquiries or additional information.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="w-full rounded-lg bg-gray-800 p-6 md:w-1/3">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Email Us
                </h3>
                <p className="text-gray-400">Feel free to email us at:</p>
                <a
                  href="mailto:aarambha@acem.edu.np"
                  className="text-blue-400 hover:underline"
                >
                  aarambha@acem.edu.np
                </a>
              </div>

              <div className="w-full rounded-lg bg-gray-800 p-6 md:w-1/3">
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Call Us
                </h3>
                <p className="text-gray-400">Contact the event organizers:</p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>
                    <span className="font-medium text-white">
                      Kritika Pandey (ARC):
                    </span>{' '}
                    +977-9848721983
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      Nishma Bhandari (CESS):
                    </span>{' '}
                    +977-9865464518
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      Dipesh Thapa (PACE):
                    </span>{' '}
                    +977-9864837955
                  </li>
                  <li>
                    <span className="font-medium text-white">
                      Misha Shah (AEES):
                    </span>{' '}
                    +977-9843326362
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  )
}
