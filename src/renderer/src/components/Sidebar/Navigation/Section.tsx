import { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
}

export const Section = (props: SectionProps) => {
  return <div className="flex flex-col gap-2" {...props} />
}
