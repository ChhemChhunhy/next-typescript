
import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import StyledJsxRegistry from "./registry";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - E-Commerce",
    default: "E-Commerce",
  },
  description: "This is description E-Commerce website",
  keywords: ["shop", "ecommerce", "sell","shoes","store","products"],
  openGraph: {
    title: {
      template: "%s - E-Commerce",
      default: "E-Commerce",
    },
    description: "This is description E-Commerce website",
    images: [
      "https://i.pinimg.com/564x/2c/f8/59/2cf85993fc7ca2839a582f0a12e1bb93.jpg",
    ],
  },
};


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600","900"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${kantumruy_pro.variable}`}>
        <NextUILayout>
        <StyledJsxRegistry>
        <NavbarComponent />
          <Suspense fallback={<LoadingComponent/>}>
            <ErrorBoundary errorComponent={Error}>
            {children}
            </ErrorBoundary>
          {/* {children} */}
         </Suspense>
         </StyledJsxRegistry>
        </NextUILayout>
      </body>
    </html>
  );
}
