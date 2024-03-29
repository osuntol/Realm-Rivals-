"use client"

import { url } from "inspector"
import { redirect } from "next/dist/server/api-utils"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import AvatarRoundedFullBaseBorderText from "./avatar"

export default function header() {

  const router = useRouter();


  return (

    <header className="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
          {/* <!-- Brand logo --> */}
          <img src="realmrivals/public/vercel.svg" alt="RealmRivals" title="user name" width="40" height="40" className="max-w-full rounded-full" />

          {/* <!-- Mobile trigger --> */}
          <button className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span aria-hidden="true" className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              <span aria-hidden="true" className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
              <span aria-hidden="true" className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
            </div>
          </button>
          {/* <!-- Navigation links --> */}
          <ul role="menubar" aria-label="Select page" className="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">

            <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('/teammanagement') }}>Team Management</a>
            </li>
            <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('/leaderboard') }}> <span>Leaderboards</span></a>
            </li>
            <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('/notification') }}> <span>Notification</span></a>
            </li>
            <li role="none" className="flex items-stretch">
            </li>
            <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('searchResults') }}> <span>Search</span> </a>
            <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('/register') }}> <span>Register</span></a>
            </li>
            <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)" onClick={() => { router.push('/profile') }}> <span>Profile</span> </a>
            </li>
          </ul>
          <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
            {/* <!-- Avatar --> */}
            <AvatarRoundedFullBaseBorderText/>
            {/* <!-- End Avatar --> */}
          </div>
        </nav>
      </div>
    </header>
  )
}