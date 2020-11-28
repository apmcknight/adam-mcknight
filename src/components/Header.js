import React from "react"
import { Link } from "gatsby"
import logo from "../../content/images/a-black.png"


export default function Header() {
  return (
    <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

      <div class="pt-5 mb-10 sm:mb-0 flex flex-row">
        <div>
          <Link to="/" class="text-2xl sm:text-center no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
            <img class="h-10 w-30 pr-5  self-left" src={logo} />
          </Link>
        </div>
      </div>

      <div class="sm:mb-0 self-center">
        <div class="h-10" style={{display: "table-cell, vertical-align: middle;"}}>
        <Link to="/" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">Home</Link>
        <Link to="/about" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">About</Link>
        <Link to="/blog/" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Writing</Link>
        <Link to="/projects/" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Projects</Link>
        <Link to="/contact" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Contact</Link>
        <Link to="http://store.mcknight.digital" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Shop</Link>
        </div>

      </div>
    </nav> 
  )
}