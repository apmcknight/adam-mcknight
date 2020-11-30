import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'
import Logo from "../../content/images/a-black.png"


export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <section class="mt-20 mb-10">
                <div className="text-center align-content-center">
                <img class="h-auto w-20 ml-auto mr-auto mb-10" src={Logo} alt="Adam McKnight Typemark"/>
                <Link to="/">
                <h1 class="heading-text pl-24 pr-24 w-50%">&mdash;&nbsp;Sorry, couldn't find that page.&nbsp;&mdash;</h1>
                </Link>
                </div>
            </section>
           
        </Layout>
    )
}