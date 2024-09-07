import { useFetchedProducts } from "../../api/calls"
// import { Badge } from "../../shadcn/ui/badge"
import { useSelectedCategory } from "../../store"
import ErrorMessage from "../ErrorMessage"
import ProductCard from "../Home/ProductCard"


export default function ProductList() {
    const { data, isError } = useFetchedProducts()
    const selectedCategory = useSelectedCategory(state => state.selectedCategory)

    if (isError) return <ErrorMessage message="Product Fetching Error!" />

    // filter products by selectedCategory
    let products = data?.products
    if (selectedCategory != "all")
        products = data?.products.filter(product => product.category === selectedCategory)

    return (
        <div className="flex flex-row flex-wrap gap-2 justify-center">
            {/* <p className="text-xl text-left font-medium capitalize relative">
                <span>{selectedCategory}</span>
                <Badge variant="secondary" className="absolute -top-1 -right-7 scale-75">{products?.length}</Badge>
            </p> */}
            {products?.map((product, idx) => <ProductCard key={`product-item-in-list-${idx}`} {...product} />)}
        </div>
    )
}
