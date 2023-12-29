"use client"
import './globals.css'
import { FormProvider } from './providers/form';
import { SearchProvider } from './providers/search';
import {SessionProvider} from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children ,session}) {
  return (
    <html lang="en">
      <body className=' bg-gradient-to-br from-pink-400 via-fuchsia-200 to-teal-200 w-screen h-screen'>
        <SessionProvider session ={session}>
       <FormProvider>
        <SearchProvider>
        <ToastContainer />
          {children}
        </SearchProvider>
       </FormProvider>
       </SessionProvider>
        </body>
    </html>
  )
}
