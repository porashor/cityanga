import ServiceHeader from '@/components/ServiceHeader'
import ServiceList from '@/components/ServiceList'
import ServiceCTA from '@/components/ServiceCTA'

export default function ServicesPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <ServiceHeader />
        <ServiceList />
        <ServiceCTA />
      </div>
    </main>
  )
}
