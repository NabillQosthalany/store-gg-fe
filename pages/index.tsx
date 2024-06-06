import { useEffect } from 'react'
import AOS from 'aos'
import Navbar from '../components/organisms/navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionsStep from '../components/organisms/TransactionsStep'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'

export default function Home(): JSX.Element {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}
