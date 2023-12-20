import './globals.css'
import { FormProvider } from './providers/form';
import { SearchProvider } from './providers/search';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-gradient-to-br from-pink-400 via-fuchsia-200 to-teal-200 w-screen h-screen'>
       <FormProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
       </FormProvider>
        </body>
    </html>
  )
}
