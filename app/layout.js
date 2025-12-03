export const metadata = {
  title: "KaziMall — Your Mall for Trusted Services",
  description: "KaziMall connects you to trusted service providers instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
