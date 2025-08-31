import AboutSection from '@/components/AboutSection'
import Philosophy from '@/components/Philosophy'
import MenuHighlight from '@/components/MenuHighlight'
import TeamIntro from '@/components/TeamIntro'
import LocationInfo from '@/components/LocationInfo'

const page = () => {
  return (
     <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        <AboutSection />
        <Philosophy />
        <MenuHighlight />
        <TeamIntro />
        <LocationInfo />
      </div>
    </main>
  )
}

export default page
