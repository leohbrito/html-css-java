import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://coolsolutions.com.br'),
  title: {
    default: 'CoolSolutions — Cloud, Kubernetes, DevOps',
    template: '%s — CoolSolutions'
  },
  description:
    'Projetos sob medida em Cloud Computing, Kubernetes, DevOps e IaC. Ambientes robustos, escaláveis e seguros.',
  applicationName: 'CoolSolutions',
  keywords: [
    'Cloud',
    'Kubernetes',
    'DevOps',
    'Infra como Código',
    'AWS',
    'GCP',
    'Azure',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://coolsolutions.com.br',
    siteName: 'CoolSolutions',
    title: 'CoolSolutions — Cloud, Kubernetes, DevOps',
    description:
      'Projetos sob medida em Cloud Computing, Kubernetes, DevOps e IaC. Ambientes robustos, escaláveis e seguros.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoolSolutions — Cloud, Kubernetes, DevOps',
    description:
      'Projetos sob medida em Cloud Computing, Kubernetes, DevOps e IaC. Ambientes robustos, escaláveis e seguros.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
