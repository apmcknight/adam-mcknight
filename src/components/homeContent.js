import React from "react"
import Layout from "./Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function HomeContent() {
  const { homeData } = useSiteMetaData()
  return (
 
  <section>
    <div class="relative bg-white overflow-hidden">
      <div class="flex justify-center max-w-10xl mx-auto ">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
          
          <h1 class="mt-32 ml-9 mb-10" style={{color: "black", fontSize: "3em", letterSpacing: "9px", fontWeight: "bold"}} dangerouslySetInnerHTML={{__html: homeData.home_header}}></h1>

          <main class="flex flex-wrap-justify-center mx-auto max-w-5xl px-10 sm:px-6 lg:px-8">
            
            <div class="mr-10 sm:text-center lg:text-center">
              <p class="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 text-justify">
                <div dangerouslySetInnerHTML={{__html: homeData.home_content}}></div>
              </p>
            </div>
            
            <div class="mr-10 sm:text-center lg:text-center">
              <p class="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 text-justify">
                 <div dangerouslySetInnerHTML={{__html: homeData.home_content_1}}></div>
              </p>
            </div>
          </main>

          

        </div>
       </div>
    </div>
       
  </section>
      
           

      
        
  )
}