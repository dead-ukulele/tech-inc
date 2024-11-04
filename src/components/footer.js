export default function Footer() {
    return (
        <div className='footer'>
            <nav className='py-1 px-1 md:px-5  2xl:px-[12rem] md:py-2 w-full flex justify-between items-end flex-row py-4'>
               <div className={'flex flex-col justify-between gap-5'}>
                <p>ООО «Tech-inc» <br/>
                    ИНН 1111111111 <br/>
                    ОГРН 1111111111111 <br/>
                </p>
                <p className=''>Copyright © 2024 Tech-inc.
                </p>
               </div>
                <a href={'#'}>Скачать пример договора</a>
                   <p> 7.00 - 23.00        <br/>
                    example@gmail.com</p>
                <p> +7 (123) 456-78-90 <br/>
                    +7 (123) 456-78-90 <br/>
                    +7 (123) 456-78-90 </p>
            </nav>
        </div>
    )
}