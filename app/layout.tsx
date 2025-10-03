import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Generated App',
  description: 'Build me a CRM with login, contacts table, notes, and a Kanban board.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}