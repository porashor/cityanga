export default function ContactForm() {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        ✉️ Send Us a Message
      </h2>
      <form className="space-y-6">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-4 py-2 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
