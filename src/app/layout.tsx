import "./globals.css"

import {
  Poppins,
  Merriweather
} from "next/font/google"

const poppins = Poppins({
  subsets:["latin"],
  weight:[
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable:"--font-poppins"
})

const merriweather = Merriweather({
  subsets:["latin"],
  weight:[
    "300",
    "400",
    "700",
    "900"
  ],
  variable:"--font-title"
})

export const metadata = {
  title:"Portfolio",
  description:"Meu portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode
}>) {

  return (
    <html lang="pt-br">
      <body
        className={`
          ${poppins.variable}
          ${merriweather.variable}
        `}
      >
        {children}
      </body>
    </html>
  )

}