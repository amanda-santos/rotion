import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export const Root = (props: RootProps) => {
  return <nav className="flex mx-2 flex-col gap-8 text-rotion-100" {...props} />
}
