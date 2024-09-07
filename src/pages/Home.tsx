import Footer from "../components/Footer"
import CategoryNavigator from "../components/Home/CategoryNavigator"
import Header from "../components/Home/Header"
import ProductList from "../components/Home/ProductList"


export default function Home() {
    return (
        <div className="flex flex-col space-y-10">
            <Header />

            <div className="flex flex-col space-y-4 px-2">
                <CategoryNavigator />
                <ProductList />
            </div>

            <Footer />
        </div>
    )
}
