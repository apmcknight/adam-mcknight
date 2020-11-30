import React from "react"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import PrivacyAlertBar from "../components/privacyAlert"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo from "../../content/images/a-black.png"

export default function Privacy() {
  const { privacyData } = useSiteMetaData()
  return (
    <main>
      <Header/>

      <section class="mt-20 mb-10">
        <div className="text-center align-content-center">
          <img class="h-auto w-20 ml-auto mr-auto mb-10" src={Logo} alt="Adam McKnight Typemark"/>
            <h1 class="heading-text pl-24 pr-24 w-50%" dangerouslySetInnerHTML={{ __html: privacyData.privacy_header }}></h1>
            <h3 class="heading-text pl-24 pr-24 w-50%" dangerouslySetInnerHTML={{ __html: privacyData.privacy_subheader }}></h3>
        </div>
      </section>

      <section class="mt-10 mb-32">
        <div className="text-justify align-content-center">
          <p class="about-header mt-52 ml-9 mb-10 h-auto w-4/5 lg:w-2/4 ml-auto mr-auto" dangerouslySetInnerHTML={{__html: privacyData.privacy_content}}></p>
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