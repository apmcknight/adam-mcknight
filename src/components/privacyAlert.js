import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle,faBell } from '@fortawesome/free-solid-svg-icons'
import { Fade, Slide } from "react-awesome-reveal"

export default function privacy(){

    // function hide() {
    //     style={display: "none;"}
    //     console.log("working...")
    // }

    return(
    <section class="fixed bottom-0 ml-5 md:ml-0 lg:ml-0 z-10">
    <Fade triggerOnce duration={1000}>
    <div>
        <Slide triggerOnce direction={"up"} duration={2000}>
            <div class="p-5">
                <div style={{background: "#caae77", color: "#fff"}} class="shadow-2xl flex items-center leading-none sm:w-100 h-9 rounded-full sm:p-1 lg:p-2 text-sm">
                    <h1 style={{color: "#fff"}}>
                        <FontAwesomeIcon class="inline-flex h-3 ml-5 mr-2" icon={faBell} />
                        
                        <span style={{letterSpacing: "3px", fontWeight: "bold"}} class="inline-flex sm:h-3 lg:h-6 pl-2 justify-center items-center">PRIVACY NOTICE&nbsp;&mdash;</span>
                    </h1>
                    <h2 style={{color: "#fff"}} class="flex px-2">
                        Read our policies
                        <Link class="pl-3 pr-3"to="/legal">here</Link>
                    </h2>
                    
                    {/* Figure out how to create a onClick event that will close the notification. React States is probably your best bet. */}
                    <FontAwesomeIcon style={{color: "#000"}}class="absolute right-4 top-4 w-5" icon={faTimesCircle} />

                </div>
            </div>
        </Slide>
    </div>
    </Fade>
  </section>
    )
}