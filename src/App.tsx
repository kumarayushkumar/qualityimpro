import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import Error from './pages/Error'
import BookDemo from './pages/BookDemo'
import Industries from './pages/Industries'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Layout from './layout/Layout'
import Customers from './pages/Customers'
import Features from './pages/Features'

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout scrollToTop={scrollToTop} />}>
      <Route index element={<Home />} />
      <Route path="features" element={<Features />} />
      <Route path="industries" element={<Industries />} />
      <Route path="ourclients" element={<Pricing />} />
      <Route path="customers" element={<Customers />} />
      <Route path="about" element={<About />} />
      <Route path="book-demo" element={<BookDemo />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
