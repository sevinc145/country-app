import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon, } from '@heroicons/react/24/outline'
import { Theme } from '../../Context/ThemeContext'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { dark, setDark } = useContext(Theme)
    return (
        <header className={"p-4 relative " + (dark ? "bg-gray-100 text-black" : "dark:bg-gray-800")}>
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="all/subReg/Africa" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Afrika</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="all/subReg/Europe" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Avropa</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="all/subReg/Oceania" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ">Okeaniya</Link>
                    </li>
                </ul>
                <Link to={''} rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-400">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="all/subReg/Asia" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Asiya</Link>
                    </li>
                    <li className="flex">
                        <Link rel="noopener noreferrer" to="all/subReg/Americas" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Amerika</Link>
                    </li>

                </ul>
                <button onClick={() => setMobileMenuOpen(true)} title="Button" type="button" className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={"w-6 h-6 " + (!dark ? "dark:text-gray-100" : "dark:text-gray-800")}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className={"fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 " + (dark ? "bg-gray-100 text-black" : "dark:bg-gray-800 dark:text-gray-100")}>
                    <div className="flex items-center justify-between">
                        <Link to={''} rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-violet-400">
                                <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                                <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                            </svg>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link onClick={() => setMobileMenuOpen(false)} rel="noopener noreferrer" to="all/subReg/Africa" className="flex text-2xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Afrika</Link>

                                <Link onClick={() => setMobileMenuOpen(false)} rel="noopener noreferrer" to="all/subReg/Europe" className="flex text-2xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Avropa</Link>

                                <Link onClick={() => setMobileMenuOpen(false)} rel="noopener noreferrer" to="all/subReg/Oceania" className="flex text-2xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Okeaniya</Link>
                                <Link onClick={() => setMobileMenuOpen(false)} rel="noopener noreferrer" to="all/subReg/Asia" className="flex text-2xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Asiya</Link>

                                <Link onClick={() => setMobileMenuOpen(false)} rel="noopener noreferrer" to="all/subReg/Americas" className="flex text-2xl items-center px-4 -mb-1 border-b-2 dark:border-transparent">Amerika</Link>
                                <div className='ml-3'>
                                    <button type="button" onClick={() => { setDark(!dark) }} className="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                                        <svg className={"hs-dark-mode-active:hidden w-8 h-8 " + (dark ? "block" : "hidden")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                        <svg className={"hs-dark-mode-active:block w-8 h-8 " + (dark ? "hidden" : "block")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>

            <div className='absolute top-[50%] right-[5%] translate-y-[-50%] hidden md:block  truncate '>
                <button type="button" onClick={() => { setDark(!dark) }} className="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                    <svg className={"hs-dark-mode-active:hidden w-8 h-8 " + (dark ? "block" : "hidden")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    <svg className={"hs-dark-mode-active:block w-8 h-8 " + (dark ? "hidden" : "block")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 8a2 2 0 1 0 4 4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
                </button>
            </div>

        </header>
    )
}

export default Header
