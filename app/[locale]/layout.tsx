import type { Metadata } from 'next'
import { Roboto, Roboto_Condensed, Unbounded } from 'next/font/google'
import '../globals.css'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'
import BottomNavigation from '@/components/BottomNavigation'
import { AuthProvider } from '@/contexts/AuthContext'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
})

const robotoCondensed = Roboto_Condensed({
	variable: '--font-roboto-condensed',
	subsets: ['latin', 'cyrillic'],
})

const unbounded = Unbounded({
	variable: '--font-unbounded',
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

interface RootLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	return (
		<html lang={locale}>
			<head></head>
			<body
				className={`${roboto.variable} ${robotoCondensed.variable} ${unbounded.variable} antialiased`}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<AuthProvider>
						<Header />
						<div className='min-h-[60vh] py-6 px-3'>{children}</div>
						<Toaster position='top-right' />
						<Footer />
						<BottomNavigation />
						<Script
							src='//code.jivo.ru/widget/LzgQISOnC6'
							strategy='afterInteractive'
						/>
					</AuthProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
