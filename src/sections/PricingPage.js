import {s} from "../styles";
import '../components/component.css'
export default function PricingPage() {
    return (
    <div className='container place-self-center px-[1rem]' name={'prices'}>
         <div className="relative overflow-x-auto">
             <h1 className={`${s.title} text-center`}>Цены
                 на вывоз мусора в Москве</h1>
             <table className={`${s.helpText} w-full text-text`}>
                 <thead className={`border-b border-b-secondary`}>
                 <tr>
                     <th scope="col" className="px-2 py-3 ">
                         Объем мусора
                     </th>
                     <th scope="col" className="px-2 py-3 border-l border-l-secondary">
                         До третьего транспортного кольца *
                     </th>
                     <th scope="col" className="px-2 py-3 border-l border-l-secondary">
                         Внутри третьего транспортного кольца
                     </th>
                     <th scope="col" className="px-2 py-3 border-l border-l-secondary">
                         Внутри садового кольца
                     </th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr className="border-b border-b-secondary text-center">
                     <th scope="row" className="px-2 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         8м3
                     </th>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 8 000
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 8 300
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 8 600
                     </td>
                 </tr>
                 <tr className="border-b  border-b-secondary text-center">
                     <th scope="row" className="px-2 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         20-27 м3
                     </th>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 21 000
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 21 500
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 22 000
                     </td>
                 </tr>
                 <tr className='text-center'>
                     <th scope="row" className="px-2 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         32-38 м3
                     </th>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 26 000
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 26 500
                     </td>
                     <td className="px-2 border-l border-l-secondary py-8">
                         от 27 000
                     </td>
                 </tr>
                 </tbody>
             </table>
         </div>
    </div>
    )
}