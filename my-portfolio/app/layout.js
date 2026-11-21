import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  metadataBase: new URL(profile.website),
  title: {
    default: `${profile.fullName} | ${profile.role}`,
    template: `%s | ${profile.fullName}`,
  },
  description: profile.summary,
  keywords: [
    "Software Development Engineer",
    "Backend Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST API",
    "Full Stack",
    profile.fullName,
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.fullName} | ${profile.role}`,
    description: profile.tagline,
    url: profile.website,
    siteName: profile.fullName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.fullName,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: "#e4e7eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
