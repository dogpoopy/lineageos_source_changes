import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Custom ROM Source Tracker',
  description: 'Track recent changes across Custom ROMs repositories',
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
