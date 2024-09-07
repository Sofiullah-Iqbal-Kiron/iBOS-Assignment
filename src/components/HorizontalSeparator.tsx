function HorizontalLine() {
  return (
    <span className="bg-neutral-200 rounded-none flex-grow h-0.5 m-0 p-0">
    </span>
  )
}

interface Props {
  text: string
}

export default function HorizontalSeparator({ text }: Props) {
  return (
    <div className="flex flex-row items-center">
      <HorizontalLine />
      <span className="px-1 font-semibold m-0">{text}</span>
      <HorizontalLine />
    </div>
  )
}
