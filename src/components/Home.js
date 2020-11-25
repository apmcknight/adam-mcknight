import React from "react"
import "tailwindcss/tailwind.css"  
import Privacy from "./privacyAlert"
import Footer from "../components/Footer"
import HeroImage from '../../content/images/hero.png'
export default function BlogList() {
    
    return (
      <div>
        <div class="relative bg-white overflow-hidden">
          <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              

              <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  ADAM
                  </h1>
                  <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  MCKNIGHT
                  </h1>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow">
                      <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Get started
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Live demo
                      </a>
                    </div>
                  </div>
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



        <div class="relative bg-white overflow-hidden">
          <div class="flex justify-center max-w-10xl mx-auto ">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
              <main class="flex flex-wrap-justify-left mt-10 mx-auto max-w-5xl px-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="mr-10 sm:text-center lg:text-left">
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique et molestias, distinctio dolore consequatur voluptatem harum ipsum enim exercitationem velit? Ullam neque hic accusantium, est sit distinctio mollitia pariatur aliquid incidunt inventore voluptate provident veniam facere aperiam ex nobis iure quo. Dolorum velit officia, nisi quae unde ipsum. Nobis!         Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique et molestias, distinctio dolore consequatur voluptatem harum ipsum enim exercitationem velit? Ullam neque hic accusantium, est sit distinctio mollitia pariatur aliquid incidunt inventore voluptate provident veniam facere aperiam ex nobis iure quo. Dolorum velit officia, nisi quae unde ipsum. Nobis!
                  </p>
                </div>
                <div class="mr-10 sm:text-center lg:text-left">
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique et molestias, distinctio dolore consequatur voluptatem harum ipsum enim exercitationem velit? Ullam neque hic accusantium, est sit distinctio mollitia pariatur aliquid incidunt inventore voluptate provident veniam facere aperiam ex nobis iure quo. Dolorum velit officia, nisi quae unde ipsum. Nobis!          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique et molestias, distinctio dolore consequatur voluptatem harum ipsum enim exercitationem velit? Ullam neque hic accusantium, est sit distinctio mollitia pariatur aliquid incidunt inventore voluptate provident veniam facere aperiam ex nobis iure quo. Dolorum velit officia, nisi quae unde ipsum. Nobis!
                  </p>
                  <h1 style={{marginTop: '30px'}}>| Adam McKnight</h1>
                  
                </div>
                
              </main>
              
            </div>
            
          </div>
        </div>

        
        <Privacy/>
        <Footer/>

      </div>
    )
}

