import { ReactNode } from 'react'

type ToCSectionProps = {
  children: ReactNode
}

export const ToCSection = (props: ToCSectionProps) => {
  return <div className="flex flex-col gap-2 px-2" {...props} />
}
