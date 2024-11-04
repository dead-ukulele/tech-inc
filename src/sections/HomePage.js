import React from "react";
import logo from "../garbage-bin.png";
import nj from "../nj.png";
import {s} from "../styles";
export default function HomePage() {
    return (
        <div className='container flex flex-col gap-5 place-self-center px-1 md:px-5  2xl:px-[12rem]' name={'services'}>
            <p className={`${s.title}`}>
                Наши услуги
            </p>
            <div className={'grid grid-cols-2 gap-10'}>
                <div
                    className="p-4 button border border-accent rounded-lg shadow justify-between">
                    <div className='flex flex-col justify-between mb-5 place-items-center'>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p className={`${s.text} mb-3 text-text text-center`}>Вывоз ТБО</p>
                        {/*<a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">*/}
                        {/*    See our guideline*/}
                        {/*</a>*/}
                    </div>
                    <p className={`${s.helpText} place-self-end mt-8`}>Осуществляем регулярный вывоз твёрдых бытовых отходов (ТБО) для жилых
                        и
                        коммерческих объектов. Работаем по удобному графику, гарантируем чистоту и соблюдение санитарных
                        норм. Сортируем отходы и направляем их на переработку. Экологично, удобно, по доступной
                        цене.</p>
                </div>
                <div
                    className=" p-4 button border border-accent rounded-lg shadow justify-between">
                    <div className='flex flex-col justify-between mb-5 place-items-center'>
                        <img src={nj} className="App-logo" alt="logo"/>
                        <p className={`${s.text} mb-3 text-text text-center`}>Вывоз КГО</p>
                        {/*<a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">*/}
                        {/*    See our guideline*/}
                        {/*</a>*/}
                    </div>
                    <p className={`${s.helpText} place-self-end mt-8`}>Осуществляем регулярный вывоз твёрдых бытовых отходов (ТБО) для жилых
                        и
                        коммерческих объектов. Работаем по удобному графику, гарантируем чистоту и соблюдение санитарных
                        норм. Сортируем отходы и направляем их на переработку. Экологично, удобно, по доступной
                        цене.</p>
                </div>
                <div
                    className=" p-4 button border border-accent rounded-lg shadow justify-between">
                    <div className='flex flex-col justify-between mb-5 place-items-center'>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p className={`${s.text} mb-3 text-text text-center`}>Аренда контейнеров и техники</p>
                        {/*<a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">*/}
                        {/*    See our guideline*/}
                        {/*</a>*/}
                    </div>
                    <p className={`${s.helpText} place-self-end mt-8`}>Осуществляем регулярный вывоз твёрдых бытовых отходов (ТБО) для жилых
                        и
                        коммерческих объектов. Работаем по удобному графику, гарантируем чистоту и соблюдение санитарных
                        норм. Сортируем отходы и направляем их на переработку. Экологично, удобно, по доступной
                        цене.</p>
                </div>
                <div
                    className=" p-4 button border border-accent rounded-lg shadow justify-between">
                    <div className='flex flex-col justify-between mb-5 place-items-center'>
                        <img src={nj} className="App-logo" alt="logo"/>
                        <p className={`${s.text} mb-3 text-text text-center`}>Вывоз строительного мусора</p>
                        {/*<a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">*/}
                        {/*    See our guideline*/}
                        {/*</a>*/}
                    </div>
                    <p className={`${s.helpText} place-self-end mt-8`}>Осуществляем регулярный вывоз твёрдых бытовых отходов (ТБО) для жилых
                        и
                        коммерческих объектов. Работаем по удобному графику, гарантируем чистоту и соблюдение санитарных
                        норм. Сортируем отходы и направляем их на переработку. Экологично, удобно, по доступной
                        цене.</p>
                </div>
            </div>
        </div>
    );
}