import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Return to Dheeraj Jha\'s portfolio homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">Page Not Found</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-200"
            >
              Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
