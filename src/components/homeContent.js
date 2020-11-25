import React from "react"
import Layout from "./Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    
    <div class="relative bg-white overflow-hidden">
      <div class="flex justify-center max-w-10xl mx-auto ">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="flex flex-wrap-justify-center mt-10 mx-auto max-w-2xl px-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="mr-10 sm:text-center lg:text-center">
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-justify">
                <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
              </p>
            </div>
          </main>
        </div>
        </div>
        </div>
      
           

      
        
  )
}