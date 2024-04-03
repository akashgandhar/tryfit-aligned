import Link from "next/link";

export default function Vertical({show}) {
    return(
        <aside className={(show?'left-0':'-left-full') +" top-0 text-gray-500 p-4 fixed w-full bg-bgGray h-full md:static md:w-auto xl:hidden transition-all"}>
        <div className="mb-4 mr-4">
        </div>
        <nav className="flex flex-col gap-2">
            <Link href={'/'} >
            Dashboard
            </Link>
            <Link href={'/products'} >
            Products
            </Link>
            <Link href={'/categories'} >
            Categories
            </Link>
            <Link href={'/orders'} >
            Orders
            </Link>
            <Link href={'/settings'} >
            Settings
            </Link>

      </nav>
    </aside>
    )
}