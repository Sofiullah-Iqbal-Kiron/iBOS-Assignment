import clsx from "clsx"

interface Props {
    size: "sm" | "md" | "lg" | "stamp"
}

export default function BrandName({ size = "md" }: Props) {
    return (
        <div className={clsx('font-bold', size === 'sm' && 'text-sm', size === 'md' && 'text-base', size === 'lg' && 'text-xl', size === 'stamp' && 'text-4xl')}>
            <span>Furni</span>
            <span className="text-sky-500">Flex</span>
        </div>
    )
}
