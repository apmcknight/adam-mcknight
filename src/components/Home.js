import React from "react"
import "tailwindcss/tailwind.css"  
import Privacy from "./privacyAlert"
import Footer from "../components/Footer"
import HeroImage from '../../content/images/hero.png'
import HomeContent from '../components/homeContent'
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Home(props) {
  const { homeData } = useSiteMetaData()

    
    return (
      <div>
        <div class="relative bg-white overflow-hidden">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              

              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    Adam
                  </h1>

                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    McKnight
                  </h1>

                  <p dangerouslySetInnerHTML={{__html: homeData.home_header}} class="tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mt-10" style={{fontSize: "2.5em"}}>
                  </p>
                   
                </div>
              </main>
            </div>
          </div>
          <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img 
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src={HeroImage} 
          alt="Hero Image"/>

          </div>
        </div>

        <HomeContent/>
        <Privacy/>
        <Footer/>

      </div>
    )
}

