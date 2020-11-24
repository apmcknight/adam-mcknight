import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import "tailwindcss/tailwind.css"



export default function IndexPage() {
  return (
    <Layout class ="dark:bg-gray-800" page="home" bgColor="inherit">
      <section>
        <Home />
      </section>
    </Layout>
  )
}