import { Menu as MenuIcon } from "lucide-react"
import NavItems from "./NavItems"


export default function Navbar() {
    return (
        <section>
            <label htmlFor="nav-toggler-checkbox">
                <MenuIcon size={30} />
            </label>

            <input type="checkbox" id="nav-toggler-checkbox" />

            <label htmlFor="nav-toggler-checkbox" id="nav-items-complement">
            </label>

            <NavItems />
        </section>
    )
}
