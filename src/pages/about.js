import React from "react"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import PrivacyAlertBar from "../components/privacyAlert"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo from "../../content/images/mark-primary.png"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <main>
      <Header/>

      <section class="mt-10 mb-10">
        <div className="text-center align-content-center">
          <img class="h-auto w-60 ml-auto mr-auto" src={Logo} alt="Adam McKnight Typemark"/>
          <h1 class="heading-text">This is Adam McKnight</h1>
        </div>
      </section>

      <section class="mt-10 mb-10">
        <div className="text-justify align-content-center">
          <p class="ml-9 mb-10 h-auto w-80 ml-auto mr-auto" dangerouslySetInnerHTML={{__html: infoData.description}}></p>
        </div>
      </section>

      {/* <section>
        <div class=" text-base sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 text-justify">
          <p class="ml-9 mb-10 h-auto w-60 ml-auto mr-auto" dangerouslySetInnerHTML={{__html: infoData.description}}></p>
        </div>
      </section> */}

      <Footer/>
      <PrivacyAlertBar/>
    </main>
  )
}