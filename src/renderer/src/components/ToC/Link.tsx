import { ReactNode } from 'react'

type ToCLinkProps = {
  children: ReactNode
}

export const ToCLink = (props: ToCLinkProps) => {
  return <a href="#" className="hover:text-rotion-50" {...props} />
}
