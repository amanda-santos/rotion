import { ReactNode } from 'react'

type ToCRootProps = {
  children: ReactNode
}

export const ToCRoot = (props: ToCRootProps) => {
  return (
    <div
      className="flex flex-col text-sm text-rotion-100 gap-2 mt-2"
      {...props}
    />
  )
}
