import { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
}

export const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div
      className="text-rotion-300 mx-3 uppercase text-xs font-semibold"
      {...props}
    />
  )
}
