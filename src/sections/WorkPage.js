// import Card from "../components/card";

export default function WorkPage() {
  const steps = [
      { title: 'Обращение', text: 'Клиент отправляет заявку — это можно сделать через форму на сайте или по телефону.'},
      { title: 'Консультация', text: 'Мы связываемся с вами для уточнения типа и объема мусора, чтобы предложить наиболее подходящее решение.',},
      { title: 'Вывоз', text: 'Наша команда приезжает в удобное для вас время, загружает и вывозит мусор.',},
      { title: 'Оплата', text: 'После выполнения работы вы оплачиваете услугу удобным способом.',},
  ]
    return (
        <div className='container justify-self-center flex flex-col self-center  my-24' name={'work'}>
            <h1 className={'mb-10'}>Как мы работаем</h1>
            <div className='grid grid-cols-1 2xl:grid-cols-4 py-3 px-1 md:px-5 2xl:px-[12rem] gap-2 2xl:gap-5'>
                {steps.map((step, index) => {
                    return (
                        <>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 place-self-center first:hidden 2xl:hidden' stroke='var(--accent)' fill='var(--accent)' viewBox="0 0 24 24">
                            <path
                                d="M16.924 9.617A1 1 0 0 0 16 9H8a1 1 0 0 0-.707 1.707l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 .217-1.09z"
                                 data-name="Down"/>
                        </svg>
                        <div className={`md:w-[50%] 2xl:w-auto button border border-accent rounded-2xl md:place-self-center 2xl:place-self-auto py-4 px-4 2xl:p-4`} key={index}>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-center mt-2'>{step.title}</h1>
                                <p className='text-xl text-center'>
                                    {step.text}
                                </p>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}