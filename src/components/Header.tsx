"use client"

import React from "react";
const navLinks = [
  {
    href: "/",
    label: "Home",
  },

  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
function Header() {
     const pathname = usePathname();
  return (
    <header className="flex justify-between items-center sticky top-0 bg-zinc-100 shadow-md z-10 py-4 px-7 border-b">
        <Link href={'/'}>
              <Image src="/blog.png" alt="Logo" width="50" height="50" />
        </Link>


      <nav>
        <ul className="flex gap-x-5 text-[14px] font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={pathname==link.href?"text-black": "text-zinc-400"} href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
