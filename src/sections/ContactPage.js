import React from "react";
import "./root.css"
import {s} from '../styles'

export default function ContactPage() {
    return (
        <div className='container px-[1rem] relative justify-self-center self-center' name={'contact'}>
            <p className={`${s.text} place-self-start`}>Наш офис находится по адресу:
                Московская обл., </p>
            {/*<div className="w-full">*/}
            {/*    <iframe className={'absolute'}*/}
            {/*        src="https://yandex.ru/map-widget/v1/?ll=38.018316%2C55.531599&mode=poi&poi%5Bpoint%5D=38.017448%2C55.531947&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D72332338644&z=19.59"*/}
            {/*        width="500" height="400" frameBorder="1" allowFullScreen="true"></iframe>*/}
            {/*</div>*/}
        </div>
    )
}