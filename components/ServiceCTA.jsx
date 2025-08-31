import Link from 'next/link'

export default function ServiceCTA() {
  return (
    <section className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Ready to Taste the Difference?
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Whether you're planning a party or just hungry for something amazing, Cityanga is here to serve.
      </p>
      <Link href="/contact">
        <div className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400">
          Contact Us
        </div>
      </Link>
    </section>
  )
}
