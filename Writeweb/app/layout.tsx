import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Squibler - AI写作助手 | 书籍、小说、剧本写作软件',
  description: '使用AI驱动的写作软件，帮助您更快地完成书籍、小说和剧本创作。智能写作助手，让创作更简单。',
  keywords: 'AI写作,书籍写作,小说写作,剧本写作,写作软件,AI助手',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
