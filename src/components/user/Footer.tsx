import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">WebMəktəbi</h2>
            <p className="text-blue-100">Azərbaycan dilində proqramlaşdırma və veb texnologiyaları öyrənmək üçün pulsuz onlayn resurs.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Əsas Bölmələr</h2>
            <ul className="space-y-2">
              <li><Link href="/html" className="hover:text-yellow-300 transition-colors duration-200">HTML</Link></li>
              <li><Link href="/css" className="hover:text-yellow-300 transition-colors duration-200">CSS</Link></li>
              <li><Link href="/javascript" className="hover:text-yellow-300 transition-colors duration-200">JavaScript</Link></li>
              <li><Link href="/sql" className="hover:text-yellow-300 transition-colors duration-200">SQL</Link></li>
              <li><Link href="/python" className="hover:text-yellow-300 transition-colors duration-200">Python</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Əlavə Bölmələr</h2>
            <ul className="space-y-2">
              <li><Link href="/algorithms" className="hover:text-yellow-300 transition-colors duration-200">Alqoritmlər</Link></li>
              <li><Link href="/tutorials" className="hover:text-yellow-300 transition-colors duration-200">Dərsliklər</Link></li>
              <li><Link href="/playground" className="hover:text-yellow-300 transition-colors duration-200">Playground</Link></li>
              <li><Link href="/about" className="hover:text-yellow-300 transition-colors duration-200">Haqqımızda</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors duration-200">Əlaqə</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Bizi İzləyin</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200"><Facebook /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200"><Twitter /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200"><Instagram /></a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-400 pt-8 text-center text-blue-100">
          <p>&copy; 2023 WebMəktəbi. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}

