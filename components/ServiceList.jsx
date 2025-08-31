const services = [
  {
    title: 'Dine-In Experience',
    description: 'Enjoy a cozy, vibrant atmosphere with freshly prepared meals and friendly service.',
    icon: '🍴',
  },
  {
    title: 'Takeaway & Delivery',
    description: 'Order online or by phone—get your favorites delivered hot and fast, right to your door.',
    icon: '🚚',
  },
  {
    title: 'Catering & Events',
    description: 'From birthdays to corporate lunches, we craft custom menus for every occasion.',
    icon: '🎉',
  },
  {
    title: 'Weekly Specials',
    description: 'Discover new flavors every week with our rotating specials and seasonal dishes.',
    icon: '🧑‍🍳',
  },
]

export default function ServiceList() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {service.icon} {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
