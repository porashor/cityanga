import ContactHeader from '@/components/ContactHeader'
import ContactDetails from '@/components/ContactDetails'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact- Cityanga',
  description: 'Contact us for any questions or inquiries about food',
};
const page = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <ContactHeader />
        <ContactDetails />
        <ContactForm />
      </div>
    </main>
  )
}

export default page
