import logo from "../assets/brand.svg"
import BrandName from "./BrandName"


export default function BrandSignature() {
    return (
        <div className="flex items-center space-x-1">
            <img src={logo} alt="brand-logo" height={35} width={35} loading="eager" />
            <BrandName size="sm" />
        </div>
    )
}
