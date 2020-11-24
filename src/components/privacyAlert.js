import React from "react"
import { Link } from "gatsby"


export default function privacy(){
    return(
    <section class="fixed bottom-0 left-50">
    <div class="p-5">
        <div class="shadow-2xl inline-flex items-center bg-indigo-600 leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
        <h2><span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">LEGAL NOTICE:</span></h2>
        <span class="inline-flex px-2">Read your Privacy Rights &amp; Our Terms <Link class="pl-3 pr-3"to="/legal">here</Link></span>
        </div>
    </div>
  </section>
    )
}