import { X as CrossIcon } from "lucide-react"
import { Link } from "react-router-dom"
import BrandSignature from "../BrandSignature"


const nav_items = [
    {
        content: "Home",
        link: ""
    },
    {
        content: "Products",
        link: ""
    },
    {
        content: "Categories",
        link: ""
    },
    {
        content: "Custom",
        link: ""
    },
    {
        content: "Blog",
        link: ""
    },
]

export default function NavItems() {
    return (
        <section id="nav-items" className="flex flex-col items-end space-y-10 pt-2 pb-4 pe-3">
            <label htmlFor="nav-toggler-checkbox">
                <CrossIcon size={30} />
            </label>

            <div className="flex flex-col justify-between flex-grow">
                <ul className="flex flex-col space-y-3 text-right text-lg">
                    {
                        nav_items.map(
                            (item, idx) =>
                                <Link key={`nav-item-link-${idx}`} to={item.link} className="hover:text-xl transition-all">
                                    {item.content}
                                </Link>
                        )
                    }
                </ul>

                <BrandSignature />
            </div>
        </section>
    )
}
