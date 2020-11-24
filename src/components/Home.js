import React from "react"
import { Link } from "gatsby"
import "tailwindcss/tailwind.css"  
import Privacy from "./privacyAlert"

import Footer from "../components/Footer"
 
export default function BlogList() {
    return (
      <div>
        <section className="main-section">
          <h1>Adam</h1>
          <h1>McKnight</h1>
          <Link to="/info">Read More →</Link>
        </section>

        <section class="all-in-a-day">
          <h1>ALL IN A DAY:</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit explicabo quia quae dolorum et adipisci ipsum quam. Sequi, incidunt ex!</p>
          <Link to="/blog/day-in-the-life">Continue Reading →</Link>
        </section> 
        
        <Privacy/>
        <Footer/>

      </div>
    )
}

