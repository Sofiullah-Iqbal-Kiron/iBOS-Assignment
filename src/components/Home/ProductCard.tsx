import { Button } from "../../shadcn/ui/button"
import { FaMagnifyingGlass as ViewIcon, FaCartPlus as CartIcon, FaBangladeshiTakaSign as BDTIcon } from "react-icons/fa6"
import { Card, CardContent, CardDescription, CardFooter } from "../../shadcn/ui/card"
import { ProductType } from "../../types"


export default function ProductCard(product: ProductType) {
    return (
        <Card className="w-full sm:max-w-[20rem]">
            <CardContent>
                <div className="flex justify-center">
                    <img src={product.thumbnail} width={180} height={180} />
                </div>
                <h3 className="font-semibold text-lg py-1 line-clamp-1">
                    {product.title}
                </h3>

                <div className="flex justify-between pb-1">
                    <div className="flex items-end space-x-1">
                        <div className="flex items-center space-x-0.5 font-medium">
                            <BDTIcon size={15} />
                            <span>{product.price}</span>
                        </div>
                        <div className="line-through text-xs text-neutral-400">
                            {(100 * product.price / (100 - product.discountPercentage)).toFixed(3)}
                        </div>
                    </div>

                    <span className="font-bold text-red-600">
                        {product.discountPercentage}% OFF
                    </span>
                </div>

                <CardDescription className="text-xs line-clamp-2">
                    {product.description}
                </CardDescription>
            </CardContent>

            <CardFooter className="flex flex-row justify-center items-center space-x-1.5">
                <Button size="sm" className="w-1/2 font-normal flex space-x-2">
                    <ViewIcon size={15} />
                    <span>View</span>
                </Button>

                <Button size="sm" className="w-1/2 font-normal flex space-x-2">
                    <CartIcon size={15} />
                    <span>Add to Cart</span>
                </Button>
            </CardFooter>
        </Card>
    )
}
