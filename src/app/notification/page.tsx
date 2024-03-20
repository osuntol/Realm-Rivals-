"use client"

import AvatarRoundedFullBaseBorderText from "../components/avatar"

export default function notificationPage(){
  return (
    <header className="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
    <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
      <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
    <li role="none" className="flex items-stretch">
              <a role="menuitem" aria-haspopup="false" className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Regisration Page</span> </a>
            </li>

    <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
    {/* <!-- Avatar --> */}
    <AvatarRoundedFullBaseBorderText/>
    {/* <!-- End Avatar --> */}
  </div>
  </nav>
  </div>
  </header>
  )
  };