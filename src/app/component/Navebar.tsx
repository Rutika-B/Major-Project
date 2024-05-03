import Link from "next/link"
 
export const Navebar = () => {
  return (
    <>
        <div className="navbar bg-base-100 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className="hover:no-underline" href="">Dashboard</a></li>
        <li><a className="hover:no-underline">services</a></li>
        <li><a className="hover:no-underline">About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hover:no-underline">Trade Trackers</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
    <li>
    <Link href="/" className="hover:no-underline">Home</Link>
    </li>
    <li>
    <Link href="/Landing" className="hover:no-underline">Dashboard</Link>
    </li>
    <li>
    <Link href="/Landing" className="hover:no-underline">Services</Link>
    </li>
    <li>
    <Link href="/Landing" className="hover:no-underline">About Us</Link>
    </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={"/signup"} className="btn hover:no-underline">Sign In</Link>
  </div>
</div>
    </>
  )
}



// -----*********************----------------

// import Link from "next/link"


// export const Navebar = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//       </div>
//       <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a><Link ={/}>Item 3</Link></a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
//     </div>
//   )
// }


// ------------------------------------------
// 'use client'
// import Image from "next/image"
// import { CgMenu } from 'react-icons/cg'
// import { AiOutlineCloseCircle } from 'react-icons/ai'
// // import Logo from "../app/assets/Images/Asset1.png"
// import React, { useState } from 'react'
// import Link from "next/link"
// export default function Navbar() {

//     const [toggle, settoggle] = useState(false);

//     function changetogle() {
//         // console.log(e)
//         settoggle(!toggle);



//     }
//     function navchange (){
//         const navlink = document.querySelector('.nav-link');

//         if(navlink!=null){
//                 navlink.classList.toggle('hidden')
            
            
//         }
//         else{
            
//         }
       
//     }
   
      

//     return (
//         <div className="bg-slate-800">



//             <div className="bg-white">

//                 <nav className=" flex justify-between items-center w-[92%] mx-auto">
//                     <div>
//                         {/* <img className="a" src={Logo} alt="..." /> */}
//                         <Image src={Logo} alt="..." className="h-16 w-16 rounded-full" />
//                     </div>
//                     <div className="nav-link hidden bg-white md:block md:static absolute  md:min-h-fit md:w-auto min-h-[60vh] left-0 top-[20%] w-full  md:items-center px-5">
//                         <ul className="align-items-center justify-center flex md:flex-row flex-col md:gap-10 gap-8 pt-3 pb-3 font-semibold">
//                             <li>
//                                 <Link href="/">Home</Link>
//                             </li>
//                             <li>
//                             <Link href="/Contact">Contact</Link>
//                             </li>
//                             <li>
//                             <Link href="/About">About</Link>
//                             </li>
//                             <li>
//                             <Link href="/">pricing</Link>
//                             </li>
//                             <li>
//                             <Link href="/rgpt">Try-Rgpt</Link>
//                             </li>
//                             <li>
//                             <Link href="/">Products</Link>
//                             </li>

//                         </ul>
//                     </div>
//                     <div className=" flex items-center gap-6 pt-3 pb-3">
//                         <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#2561c9]"><Link href="/login">Login</Link></button>
//                         <div onClick={() => { changetogle(), navchange()}}>
//                             {toggle ? <AiOutlineCloseCircle className="h-11 w-11 md:hidden" /> :
//                                 <CgMenu className="h-11 w-11 md:hidden" />}
//                         </div>
//                     </div>

//                 </nav>
//             </div>
//         </div>

//     )
// }

