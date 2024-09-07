import BrandSignature from "../BrandSignature";
import Navbar from "../Navbar/Navbar";


export default function Header() {
    return (
        <section className="px-2 py-4 border-b flex justify-between items-center">
            <BrandSignature />
            <Navbar />
        </section>
    )
}
