"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

const navLinks = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Store",
        href: "/store",
    },
    {
        name: "Admin",
        href: "/admin",
    },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="py-4 px-12 sticky top-0 bg-black">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-4xl">LOGO</Link>
                <ul className="flex gap-12 uppercase">
                    {
                        navLinks.map((link) => {
                            return (
                                <li key={link.name} className={`hover:underline text-xl duration-300 ${pathname === link.href ? "underline" : ""}`}>
                                    <Link href={link.href}>{link.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;
