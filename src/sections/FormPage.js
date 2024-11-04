import React from "react";
import {s} from '../styles'


export default function FormPage() {
    // const { formValues, handleSubmit, handleInputChange } = useContactUsForm();
    return (
        <div className='container place-self-center border-accent' name={'form'}>
            <div className="w-full bg-background place-items-center">
                    <p className={`${s.title} text-center`}>Свяжитесь с нами!</p>
                    <div className='flex flex-row gap-5 mt-10'>
                    <p className={`${s.subtitle}`}>По номеру</p>
                    <a href="tel:+71234567890" className="button place-self-center text-xl px-[2rem] py-[0.2rem] rounded-lg flex flex-row gap-2">+7 (123) 456-78-90 </a>
                    </div>
                    <p className={`${s.subtitle} text-center`}>или</p>
                    <p className={`${s.subtitle}`}>оставьте заявку и мы вам перезвоним</p>
                <form className="max-w-md mx-auto">
                    <div className='flex flex-row gap-5 mt-5'>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="Name" id="Name"
                                   className="block py-2.5 px-1 w-full text-sm text-text bg-background border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" "
                                   required/>
                            <label htmlFor="Name"
                                   className="peer-focus:font-medium absolute text-sm text-text dark:text-text duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Ваше имя
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="tel" name="Number" id="Number"
                                   className="block py-2.5 px-1 w-full text-sm text-text bg-background border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" "
                                   required/>
                            <label htmlFor="Number"
                                   className="peer-focus:font-medium absolute text-sm text-text dark:text-text duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Номер
                                телефона</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="text" id="text"
                               className="block py-2.5 px-1 w-full text-sm text-text bg-background border-0 border-b-2 border-secondary appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" "
                               required/>
                        <label htmlFor="text"
                               className="peer-focus:font-medium absolute text-sm text-text dark:text-text duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Сообщение</label>
                    </div>

                    <button
                        type='submit'
                        className='button place-self-center text-xl px-[3rem] py-[0.5rem] rounded-lg flex flex-row gap-2'>
                        <p>Оставить заявку</p>
                    </button>
                </form>
            </div>
        </div>
    )
}