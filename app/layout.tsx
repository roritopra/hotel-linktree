import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hotel Boulevard del Río — Reservas y Contacto | Cali, Colombia",
  description:
    "Conéctate con el Hotel Boulevard del Río en Cali. Reserva vía WhatsApp con asesor humano o IA, llama a recepción y accede al portafolio de servicios Supplai.",
  keywords: [
    "Hotel Boulevard del Río",
    "hotel Cali",
    "reservas hotel Cali",
    "Boulevard del Río",
    "Supplai",
  ],
  authors: [{ name: "Hotel Boulevard del Río" }],
  metadataBase: new URL("https://hotelbulevardelrio.com"),
  openGraph: {
    title: "Hotel Boulevard del Río — Reservas y Contacto",
    description:
      "Donde la tradición y el confort se encuentran. Reserva ahora en el Hotel Boulevard del Río, Cali, Colombia.",
    url: "https://hotelbulevardelrio.com",
    siteName: "Hotel Boulevard del Río",
    images: [
      {
        url: "/favicon_io/apple-icon-180x180.png",
        width: 180,
        height: 180,
        alt: "Logo Hotel Boulevard del Río",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hotel Boulevard del Río — Reservas y Contacto",
    description: "Donde la tradición y el confort se encuentran en Cali, Colombia.",
    images: ["/favicon_io/apple-icon-180x180.png"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon_io/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon_io/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon_io/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon_io/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon_io/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon_io/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon_io/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon_io/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "msapplication-TileImage",
        url: "/favicon_io/ms-icon-144x144.png",
      },
    ],
  },
  manifest: "/favicon_io/manifest.json",
  other: {
    "msapplication-TileColor": "#722f37",
    "msapplication-TileImage": "/favicon_io/ms-icon-144x144.png",
    "theme-color": "#722f37",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
