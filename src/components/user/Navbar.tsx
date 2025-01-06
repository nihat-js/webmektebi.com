"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { useState } from 'react'
import {motion} from "framer-motion"

export function Navbar() {

  const navItems = [
    { href: '/html', label: 'HTML', color: 'text-blue-500' },
    { href: '/css', label: 'CSS', color: 'text-purple-500' },
    { href: '/javascript', label: 'JavaScript', color: 'text-yellow-500' },
    { href: '/sql', label: 'SQL', color: 'text-green-500' },
    { href: '/python', label: 'Python', color: 'text-blue-700' },
    { href: '/algorithms', label: 'Alqoritmlər', color: 'text-red-500' },
    { href: '/tutorials', label: 'Dərsliklər', color: 'text-indigo-500' },
    { href: '/playground', label: 'Playground', color: 'text-pink-500' },
  ]

  const [hoveredItem, setHoveredItem] = useState<string | null>(null)



  return (
    <div>


      <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed w-full top-0 left-0 z-50">
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">WebMəktəbi</span>
          </Link>
          <div className="flex items-center lg:order-2">
            <form className="hidden lg:block lg:pl-2">
              <label htmlFor="topbar-search" className="sr-only">Axtar</label>
              <div className="relative mt-1 lg:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-5 h-5 text-gray-500" />
                </div>
                <Input
                  type="text"
                  name="search"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5"
                  placeholder="Axtar"
                />
              </div>
            </form>
            <Button variant="ghost" className="ml-2">Daxil ol</Button>
            <Button className="ml-2">Qeydiyyat</Button>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href="/html" className="block py-2 pr-4 pl-3 text-primary rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0">HTML</Link>
              </li>
              <li>
                <Link href="/css" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">CSS</Link>
              </li>
              <li>
                <Link href="/javascript" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">JavaScript</Link>
              </li>
              <li>
                <Link href="/sql" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">SQL</Link>
              </li>
              <li>
                <Link href="/python" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Python</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md px-4 py-2.5 overflow-x-auto">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${item.color}`}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.label}
              {hoveredItem === item.href && (
                
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

    </div>
  )
}

