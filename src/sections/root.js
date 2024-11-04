// import {Outlet} from "react-router-dom";
import './root.css'
import HomePage from "./HomePage";
import React from "react";
import ContactPage from "./ContactPage";
import Header from "../components/header";
import FormPage from "./FormPage";
import WorkPage from "./WorkPage";
import Footer from "../components/footer";
import PricingPage from "./PricingPage";



export default function Root() {

    return (
        <>
         <Header />
            <div id="detail" className='body'>
                {/*<Outlet />*/}
                <HomePage />
                <WorkPage />
                <PricingPage />
                {/*<ContactPage />*/}
                <FormPage />
            </div>
          <Footer />
        </>
    );
}