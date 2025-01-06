import Link from 'next/link'
import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { HoverDropdown } from '../ui/HoverDropdown'

export default function Navbar() {
    return (
        <div>

            <header
                className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            {/* <Link aria-current="page" className="flex items-center" href="/"> */}
                            {/* <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt=""/> */}
                            {/* aa */}
                            {/* <p className="sr-only">Web mektebi </p> */}
                            {/* </Link> */}
                            <Link class name="flex items-center" href="/">
                                {/* Web mektebi */}
                                Logo
                            </Link>
                        </div>

                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a aria-current="page"
                                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                                href="#">Alqoritm suallarıaa
                            </a>
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn m-1">Xəritə</div>
                                <ul tabIndex={0} className="dropdown-content grid sm:grid-cols-1  md:grid-cols-2  
                             p-2 menu bg-base-100 rounded-box z-[1] md:w-80  shadow">
                                    {
                                        [
                                            "Yol xəritəsi",
                                            "Tövsiyyələr",
                                            "Proqramlaşdırma dilləri",
                                            "Proqramlaşdırma məntiqi",
                                            "Proqramlaşdırma tarixi",
                                            "Proqramlaşdırma sahələri",
                                            "Proqramlaşdırma növləri",
                                            "Proqramlaşdırma alətləri",
                                            "Proqramlaşdırma mənbələri",
                                            "Proqramlaşdırma məsələləri",
                                            "Proqramlaşdırma alətləri"
                                        ].map(item => {
                                            return (
                                                <li className='
                                            '>
                                                    <Link className='hover:border-accent rounded-lg p-2 hover:scale-105 transform 
                                            transition-all duration-200
                                            hover:bg-accent hover:text-white hover:shadow-lg'  href="#"> {item} </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>


                            {/* <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="#">Sponsor</a> */}
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                                href="/qeydiyyat">Qeydiyyat</a>
                            <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                href="/daxil-ol">Daxil ol</a>
                        </div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </header>
        </div>
    )
}
