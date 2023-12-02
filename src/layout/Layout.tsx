import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface ILayout {
  scrollToTop: () => void
}

export default function Layout({ scrollToTop }: ILayout) {
  scrollToTop()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}