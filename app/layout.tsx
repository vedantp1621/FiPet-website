import Navbar from "@/components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>

      <body>
        <Navbar/>
        <main>{children}</main></body>
    </html>
  )
}