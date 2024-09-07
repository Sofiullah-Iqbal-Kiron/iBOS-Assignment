import { Link } from "react-router-dom"
import { FaFacebook as Facebook, FaInstagram as Instagram, FaTwitter as Twitter, FaLinkedin as LinkedIn } from "react-icons/fa6"
import { Copyright } from "lucide-react"

// local
import BrandSignature from "./BrandSignature"


interface ItemListProps {
    header: string,
    contents: Array<string>
}

function ItemList({ header, contents }: ItemListProps) {
    return (
        <div className="flex flex-col space-y-1">
            <h3 className="font-bold text-white tracking-wide">{header}</h3>
            <ul className="text-sm text-neutral-300">
                {contents.map((item, idx) => <li key={idx}><Link to="" className="hover:text-sky-500 transition-colors">{item}</Link></li>)}
            </ul>
        </div>
    )
}

const about_us_contents = [
    "Master Plan",
    "Jobs",
    "Invest",
    "Pressroom",
    "Blog",
    "Contact"
]

const explore_contents = [
    "Unlock my Robot Power",
    "Starlight",
    "Robot Platform",
    "EEVE Roadmap"
]

const community_contents = [
    "Willow X Community",
    "Developer & Maker Acc",
    "Special Cases"
]

export default function Footer() {
    return (
        <section className="text-neutral-100 bg-neutral-950 flex flex-col items-center space-y-7 text-center py-4">
            <BrandSignature />

            <div className="flex flex-col space-y-4 md:w-full md:flex-row md:space-y-0 md:justify-around">
                <ItemList header="About Us" contents={about_us_contents} />
                <ItemList header="Explore EEVE" contents={explore_contents} />
                <ItemList header="Community & Support" contents={community_contents} />
            </div>

            <div className="w-full h-[1pt] bg-neutral-500"></div>

            <div className="flex flex-row justify-center items-center space-x-4">
                <Facebook size={30} className="hover:scale-110 hover:text-sky-500 transition-all" />
                <Instagram size={30} className="hover:scale-110 hover:text-sky-500 transition-all" />
                <Twitter size={30} className="hover:scale-110 hover:text-sky-500 transition-all" />
                <LinkedIn size={30} className="hover:scale-110 hover:text-sky-500 transition-all" />
            </div>

            <span className="flex items-center space-x-0.5 text-neutral-500">
                <Copyright size={15} />
                <footer className="text-sm">EEVE 2024, all rights reserved.</footer>
            </span>
        </section>
    )
}
