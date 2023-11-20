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
import Layout from './Layout/Layout'
import Customers from './pages/Customers'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="industries" element={<Industries />} />
      <Route path="pricing" element={<Pricing />} />
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
