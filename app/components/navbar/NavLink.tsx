"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props ={
    item: {
        url?: string;
        name: string;
        icon: JSX.Element;
    }
}

const NavLink = ({item}:Props) => {
  //mevcut sayfa URL'ini aldık
    const path = usePathname();

    // ekrana basılan link ile mevcutsayfa url'i eşit mi?
    const isActive = path === item.url;
  return (
    <Link 
            key={item.name}
            className={`flex gap-3 items-center transition py-3 border-l-2 border-transparent px-5 hover:bg-gray-200 ${isActive && "text-blue-500  !border-blue-500"}`} href={item.url || "/"}>
              {item.icon}
              <span className="nav-text">{item.name}</span>
            </Link>
  )
}

export default NavLink;
