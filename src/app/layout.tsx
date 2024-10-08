import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={`${inter.className} antialiased`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
