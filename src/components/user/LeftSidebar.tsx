import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function LeftSidebar() {
  const topics = [
    { name: 'HTML', subtopics: ['Giriş', 'Elementlər', 'Atributlar', 'Başlıqlar', 'Paraqraflar', 'Stillər'] },
    { name: 'CSS', subtopics: ['Sintaksis', 'Selektorlar', 'Rənglər', 'Arxa plan', 'Sərhədlər', 'Margin'] },
    { name: 'JavaScript', subtopics: ['Giriş', 'Sintaksis', 'Dəyişənlər', 'Operatorlar', 'Funksiyalar', 'Obyektlər'] },
    { name: 'SQL', subtopics: ['Giriş', 'SELECT', 'WHERE', 'INSERT', 'UPDATE', 'DELETE'] },
    { name: 'Python', subtopics: ['Giriş', 'Sintaksis', 'Dəyişənlər', 'Məlumat növləri', 'Operatorlar', 'Funksiyalar'] },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6 overflow-y-auto">
      <nav>
        {topics.map((topic) => (
          <div key={topic.name} className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{topic.name}</h2>
            <ul className="space-y-2">
              {topic.subtopics.map((subtopic) => (
                <li key={subtopic}>
                  <Link href={`/${topic.name.toLowerCase()}/${subtopic.toLowerCase()}`} className="flex items-center text-gray-600 hover:text-primary">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {subtopic}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}




// "use client"
// import { useState } from 'react';
// // import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
// import { menuData } from '@/src/config/menu';
// import Image from 'next/image';
// import Link from 'next/link';

// function Sidebar() {

//   const [expandedMenuIds, setExpandedMenuIds] = useState([]);



//   function expandMenu(id) {
//     if (expandedMenuIds.includes(id)) {
//       setExpandedMenuIds(expandedMenuIds.filter((menuId) => menuId !== id));
//     } else {
//       setExpandedMenuIds([...expandedMenuIds, id]);
//     }
//   }




//   function renderMenu(menu, depth = 1) {
//     return menu.map((menu, index) => (
//       <div key={index}>
//         <div
//           className="flex flex-col"
//         >
//           {
//             menu.slug ?
//               <Link href={menu.slug} class="element flex items-center gap-2 text-black cursor-pointer py-1 px-4 hover:bg-secondary rounded"
//                 onClick={() => expandMenu(menu.id)} >
//                 <span> {menu.icon && <Image src={"./icons/" + menu.icon} width={50} height={50} />}   </span>
//                 <span className='text-black' > {depth == 3 && index + 1 + ". "} {menu.name}</span>
//               </Link> :
//               <div class={`element flex items-center gap-2 text-black cursor-pointer py-1 px-4  rounded
//                 ${depth == 1 ? 'text-2xl hover:bg-blue-400' :
//                   depth == 2 ? 'text-md hover:bg-blue-500' ?
//                     depth == 3 : 'text-xl hover:bg-blue-400' : ''}
//                 `}
//                 {...console.log(depth)}
//                 onClick={() => expandMenu(menu.id)} >
//                 <span> {menu.icon && <Image src={"./icons/" + menu.icon} width={50} height={50} />}   </span>
//                 <span className={` text-black`} >
//                   {depth == 3 && index + 1 + ". "}  {menu.name}
//                 </span>
//               </div>

//           }
//           {
//             menu.children &&
//             <div className="flex flex-col ml-3">
//               {
//                 expandedMenuIds.includes(menu.id) && renderMenu(menu.children, depth + 1)
//               }
//             </div>
//           }
//         </div>
//       </div>
//     ));
//   }


//   return (
//     <div className="fixed  left-2 top-2
//       rounded-lg   text-black
//       min-h-[98vh] px-5 pr-12 shadow-lg w-[300px] ">
//       <div className="space-y-4">


//         <h2 className='text-xl font-bold my-6'> Web Mektebi </h2>
//         <SearchBox placeholder='Axtar' />
//         {/* <Image src="/icons/html.svg" width={50} height={50} /> */}
//         {renderMenu(menuData)}
//       </div>
//     </div>
//   );
// }
// export default Sidebar;


// const SearchBox = ({ ...props }) => (
//   <div className='relative w-full'>
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       viewBox='0 0 20 20'
//       fill='currentColor'
//       className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
//       <path
//         fillRule='evenodd'
//         d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
//         clipRule='evenodd'
//       />
//     </svg>

//     <input
//       {...props}
//       type='email'
//       className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
//     />
//   </div>
// );