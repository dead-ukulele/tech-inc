import React from "react";
// import logo from "../logo.png";
import {Link} from "react-scroll";
import './component.css'
import {s} from '../styles'

export default function Header() {
    const handleSetActive = (to) => {
        console.log(to)
    }
    return (
        <div
            className='header-bg sticky top-0 left-0 right-0 z-50 py-1 px-1 md:px-5  2xl:px-[12rem] md:py-2 place-items-center w-full flex'>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='block md:flex md:flex-row items-center'>
                    <div className="w-20 h-20 bg-[url('./logo.png')] bg-contain bg-repeat"/>
                    <p className={`${s.title} !mb-0 text-text align-text-bottom`}>Tech-inc</p>
                </div>
                <nav>
                    <ul className={`${s.subtitle} div-links list-none flex`}>
                        <Link className='div-link hover:text-accent cursor-pointer'
                              activeClass="active"
                              to={'services'}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={500}
                              delay={600}
                            // isDynamic={true}
                              onSetActive={handleSetActive}
                            // onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                              spyThrottle={200}
                        >
                            Услуги
                        </Link>
                         <Link className='div-link hover:text-accent cursor-pointer'
                                activeClass="active"
                                to={'work'}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                               offset={-120}
                                duration={500}
                                delay={600}
                        // isDynamic={true}
                                onSetActive={handleSetActive}
                        // onSetInactive={this.handleSetInactive}
                                ignoreCancelEvents={false}
                                spyThrottle={200}
                    >
                        Этапы работы
                    </Link>
                        <Link className='div-link hover:text-accent cursor-pointer'
                              activeClass="active"
                              to={'prices'}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={500}
                              delay={600}
                            // isDynamic={true}
                              onSetActive={handleSetActive}
                            // onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                              spyThrottle={200}
                        >
                            Цены
                        </Link>
                        {/*<Link className='div-link hover:text-accent cursor-pointer'*/}
                        {/*      activeClass="active"*/}
                        {/*      to={'contact'}*/}
                        {/*      spy={true}*/}
                        {/*      smooth={true}*/}
                        {/*      hashSpy={true}*/}
                        {/*      offset={-120}*/}
                        {/*      duration={500}*/}
                        {/*      delay={600}*/}
                        {/*    // isDynamic={true}*/}
                        {/*      onSetActive={handleSetActive}*/}
                        {/*    // onSetInactive={this.handleSetInactive}*/}
                        {/*      ignoreCancelEvents={false}*/}
                        {/*      spyThrottle={500}*/}
                        {/*>*/}
                        {/*    Contact*/}
                        {/*</Link>*/}
                        <Link className='div-link hover:text-accent cursor-pointer'
                              activeClass="active"
                              to={'form'}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={-120}
                              duration={500}
                              delay={600}
                            // isDynamic={true}
                              onSetActive={handleSetActive}
                            // onSetInactive={this.handleSetInactive}
                              ignoreCancelEvents={false}
                              spyThrottle={200}
                        >
                            Онлайн заказ
                        </Link>
                    </ul>
                </nav>
                <Link className='cursor-pointer'
                      // activeClass={'button'}
                      to={'form'}
                      spy={true}
                      smooth={true}
                      hashSpy={true}
                      offset={-120}
                      duration={500}
                      delay={600}
                    // isDynamic={true}
                      onSetActive={handleSetActive}
                    // onSetInactive={this.handleSetInactive}
                      ignoreCancelEvents={false}
                      spyThrottle={200}
                >
                <button className='button border border-accent px-[2rem] py-[0.5rem] rounded-lg flex flex-row gap-2 place-self-center'>
                        <svg className='w-6 h-6 block' stroke='var(--accent)' fill='var(--accent)'
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z"/>
                        </svg>
                        <p className={`${s.text}`}>Заказать звонок</p>
                </button>
                </Link>
            </div>
        </div>
    )
}