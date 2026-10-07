import "./globals.css";

export const metadata = {
  title: "Werdio — Word Puzzle Game",
  description: "Werdio is a fun and challenging word puzzle game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
