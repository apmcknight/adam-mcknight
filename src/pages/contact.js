import React from "react"
import PrivacyAlertBar from "../components/privacyAlert"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import Logo from "../../content/images/a-black.png"

export default function Contact() {
  return (
    <section>
      <Header/>
      <section class="mt-20 mb-10">
        <div className="text-center align-content-center">
          <img class="h-auto w-20 ml-auto mr-auto mb-10" src={Logo} alt="Adam McKnight Typemark"/>
          <h1 class="heading-text pl-24 pr-24 w-50%">&mdash;&nbsp;Contact Me&nbsp;&mdash;</h1>
        </div>
      </section>
      <ContactForm/>
      <Footer/>
      <PrivacyAlertBar/>
    </section>
  )
}