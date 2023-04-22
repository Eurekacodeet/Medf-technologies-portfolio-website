import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <nav class="bg-black dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-900 dark:border-gray-600">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center">
                    <img src="" class="h-8 mr-3" alt="Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">LOGO EFCO</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="text-white bg-gray-700 hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">
                        Contact Us
                    </button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium borderrounded-sm md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='group/home'>
                            <div className='w-fit'>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-gray-100 md:bg-transparent md:p-0" aria-current="page">Home </a>
                                <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative transition-all duration-300 ease-in-out group-hover/home:w-full'></div>
                            </div>
                        </li>
                        <li className='group/about'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0">About</a>
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1
                            transition-all relative duration-300 ease-in-out group-hover/about:w-full'></div>
                        </li>
                        <li className='group/services'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0">Services</a>
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative
                            transition-all duration-300 ease-in-out group-hover/services:w-full'></div>
                        </li>
                        <li className='group/our_team'>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-gray-100 rounded md:bg-transparent md:p-0">Our Team</a>
                            <div className='rounded-full bg-white w-0 h-[0.15rem] mt-1 relative
                            transition-all duration-300 ease-in-out group-hover/our_team:w-full'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}