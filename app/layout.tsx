import './globals.css'
import { Acme } from 'next/font/google'

const acme = Acme({
	subsets: ['latin'],
	weight: '400'
})

export const metadata = {
  title: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		  <body className={acme.className}>
			  {children}
		  </body>
    </html>
  )
}
