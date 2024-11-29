export const metadata = {
	title: 'Welcome to Next.js App',
	description: 'From CRA To Next.Js',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<h2>Next.js is amazing!</h2>
				{children}
			</body>
		</html>
	)
}