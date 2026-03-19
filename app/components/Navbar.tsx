"use client";

import { MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `hover:text-blue-700 transition ${pathname === path ? "text-blue-700 font-semibold" : "text-gray-600"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900">
                    <MapPin className="w-6 h-6 text-blue-700" />
                    CivicSafe
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-8 text-sm font-medium">

                    <Link href="/" className={linkClass("/")}>
                        Dashboard
                    </Link>

                    <Link href="/report" className={linkClass("/report")}>
                        Report Pollution
                    </Link>

                    <Link href="/about" className={linkClass("/about")}>
                        About
                    </Link>

                    <Link href="/transparency" className={linkClass("/transparency")}>
                        Transparency
                    </Link>

                    <Link href="/contact" className={linkClass("/contact")}>
                        Contact
                    </Link>

                </div>

            </div>
        </nav>
    );
}