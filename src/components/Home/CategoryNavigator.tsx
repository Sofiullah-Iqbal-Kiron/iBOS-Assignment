import { useFetchedProducts } from "../../api/calls"
import ErrorMessage from "../ErrorMessage"
import CategoryChoice from "./CategoryChoice"


export default function CategoryNavigator() {
    const { isLoading, data, isSuccess, isError } = useFetchedProducts()

    if (isError) return <ErrorMessage message="Fetching error!" />

    const categories: Array<string> = []
    if (isSuccess)
        data?.products.forEach(item => !categories.includes(item.category) && categories.push(item.category))

    return (
        <section>
            <p className="text-xl font-medium pb-1">Categories</p>

            {isLoading && <span>loading categories...</span>}

            <div className="flex flex-wrap gap-1 justify-center">
                {isSuccess && <CategoryChoice key={`category-choice-all`} name="all" />}
                {categories.map((item, idx) => <CategoryChoice key={`category-choice-${idx}`} name={item} />)}
            </div>
        </section>
    )
}
