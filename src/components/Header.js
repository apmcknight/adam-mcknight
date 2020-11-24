import React from "react"
import { Link } from "gatsby"
import logo from "../../content/images/mark-primary.png"

export default function Header(props) {
  return (
    <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">

      <div class="mb-2 sm:mb-0 flex flex-row">
        <div>
          <Link to="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
            <img class="h-12 w-15 self-center" src={logo} />
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
        <Link to="/shop/" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">Shop</Link>
        </div>

      </div>
    </nav> 
  )
}