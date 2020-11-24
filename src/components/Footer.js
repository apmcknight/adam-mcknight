import React from "react"
import { Link } from "gatsby"

 
export default function Footer() {
   return(
     <div class="relative">
        <div class="bg-gray-100">
          <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
              <div class="pt-24 pb-24 pr-24 w-30">
                <p>
                  Site was developed using Gatsby, Tailwind, and Forestry CMS.
                </p>
                <p>This site is depolyed to
                  <a class="pt-4" href="https://app.netlify.com/sites/imadam/deploys"><img src="https://api.netlify.com/api/v1/badges/e16ba6f2-938d-4b9f-99d4-794dc7747588/deploy-status" alt="Netlify Status"/>
                  </a>
                </p>
              </div>
              <div class="pt-16 w-48">
                <div class="text-xs uppercase text-gray-500 font-medium">QUICK LINKS</div>
                <a class="my-3 block" href="/#">Services <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Products <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">About Us <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Pricing <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Partners <span class="text-teal-600 text-xs p-1">New</span></a> 
              </div>
              
              <div class="pt-16 w-48">
                <div class="text-xs uppercase text-gray-500 font-medium">Site Refrences</div>
                <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a> 
              </div>
              <div class="pt-16 w-48">
                <div class="text-xs uppercase text-gray-500 font-medium">Social Links</div>
                <a class="my-3 block" href="https://www.github.com/apmcknight">GitHub <span class="text-teal-600 text-xs p-1"></span></a>
                <a class="my-3 block" href="https://www.instagram.com/theadammcknight">Instagram <span class="text-teal-600 text-xs p-1"></span></a>
                <a class="my-3 block" href="https://www.twitter.com/theadammcknight">Twitter</a> 
              </div>
          </div>
        </div>

        <div class="bg-gray-100 pt-2 ">
          <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
              md:flex-row max-w-6xl">
              <div class="mt-2">© Copyright 2020, Adam McKnight &mdash; All Rights Reserved.</div>
              <a class="my-3 block" href="https://www.mcknight.digital">Built by mcknight.digital</a> 
          </div>
        </div>
     </div>
   )
}

