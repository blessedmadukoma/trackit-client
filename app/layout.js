import './globals.css'

export const metadata = {
  title: 'TrackIT',
  description: 'Track your finances with ease!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
