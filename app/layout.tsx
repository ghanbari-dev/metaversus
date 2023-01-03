import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-black w-5/6 mx-auto overflow-x-hidden">{children}</body>
    </html>
  );
}
