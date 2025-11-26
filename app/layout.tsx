import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LineageOS Source Tracker',
  description: 'Track recent changes across LineageOS repositories',
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
