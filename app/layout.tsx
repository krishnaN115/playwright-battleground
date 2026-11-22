import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Playwright Battleground',
  description: 'Learn, explore, and test with Playwright.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
