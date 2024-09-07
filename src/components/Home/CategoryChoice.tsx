import { Button } from "../../shadcn/ui/button"
import { useSelectedCategory } from "../../store"
import { stringify } from "../../utils"


interface Props {
    name: string
}

export default function CategoryChoice({ name }: Props) {
    const { selectedCategory, setSelectedCategory } = useSelectedCategory()

    const variant = selectedCategory === name ? "default" : "outline"
    name = stringify(name)

    return (
        <Button size="sm" variant={variant} onClick={() => setSelectedCategory(name)} className="capitalize">
            {name}
        </Button>
    )
}
