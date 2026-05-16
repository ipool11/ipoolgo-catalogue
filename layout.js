
export const metadata = {
  title: "iPoolGo Catalogue",
  description: "Premium swimming pools and outdoor solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
