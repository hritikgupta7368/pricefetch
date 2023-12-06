
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white bg-no-repeat text-black" >
        {children}
        </body>
    </html>
  )
}
