import Navbar from "@/components/navbar";
import MobileFooter from "@/components/MobileFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="mt-17">{children}</main>
        <MobileFooter />
      </body>
    </html>
  );
}
