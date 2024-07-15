import { ReactNode } from 'react'

export default function AdminPage({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <p>Admin page footer</p>
    </div>
  )
}
