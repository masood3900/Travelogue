import Link from "next/link";


export function Navbar ()  {
    return ( 
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold"><img src="/logo.webp" alt="لگوی سایت" className="w-10 h-10 rounded-full mx-auto" /></h1>
                <h1 className="text-3xl font-bold">سفر نگار</h1>
                <ul className="flex space-x-4 rtl:space-x-reverse">
                    
                    <li className=" haver:text-yellow-300">
                        <Link href='/pages/about'>درباره ما</Link>
                    </li>
                    <li className=" haver:text-yellow-300">
                        <Link href='/pages/contact'>تماس با ما</Link>
                    </li>
                    <li className=" haver:text-yellow-300">
                        <Link href='/'>خانه</Link>
                    </li>
                   
                </ul>

            </div> 
       </nav>
     );
}
 
