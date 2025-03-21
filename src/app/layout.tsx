import './globals.css';

export const metadata = {
  title: 'Fanjoy',
  description: 'Creator Marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
