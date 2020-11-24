import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faBell } from '@fortawesome/free-solid-svg-icons'

export default function privacy(){
    return(
    <section class="fixed bottom-0 left-50">
    <div class="p-5">
        <div class="shadow-2xl flex items-center bg-black leading-none text-purple-600 rounded-full p-2 text-sm">
        <h1>
            <FontAwesomeIcon class="inline-flex h-3 pl-3" icon={faBell} />
            <span class="inline-flex rounded-full h-6 pl-2 justify-center items-center">PRIVACY NOTE &nbsp;&mdash;</span>
        </h1>
        <h2 class="flex px-2">
            Read your Privacy Rights &amp; Our Terms
            <Link class="pl-3 pr-3"to="/legal">here</Link>
        </h2>
        
        <FontAwesomeIcon class="absolute right-4 top-5 w-5" icon={faTimesCircle} />

        </div>
    </div>
  </section>
    )
}