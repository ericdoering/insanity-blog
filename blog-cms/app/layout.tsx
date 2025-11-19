// app/layout.tsx
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function RootLayout({ children }: any) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }