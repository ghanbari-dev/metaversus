import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden w-screen">
      <head />
      <body className="bg-[#1A232E] w-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
