"use client"

import { cn } from "@/lib/utils"
import { BarChart2, BookOpen, Cog } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {

    const pathname = usePathname()
    const params = useParams()

    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Overview',
            active: pathname == `/${params.storeId}`,
            icon: <BookOpen className="mr-2 h-4 w-4" />
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            active: pathname == `/${params.storeId}/billboards`,
            icon: <BarChart2 className="mr-2 h-4 w-4" />
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            active: pathname == `/${params.storeId}/settings`,
            icon: <Cog className="mr-2 h-4 w-4" />
        }
    ];


    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
            {
                routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn("flex items-center text-sm font-medium transition-color hover:text-primary",
                            route.active ?
                                "text-black dark:text-white"
                                : "text-muted-foreground")} >
                        {route.icon}
                        {route.label}
                    </Link>
                ))
            }
        </nav>
    )
}