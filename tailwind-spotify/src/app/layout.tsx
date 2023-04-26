import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Listen to Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-purple-900 from-1% via-indigo-900 via-30% to-zinc-900 to-90%  text-zinc-50' >
        {children}
      </body>
    </html>
  )
}
