
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: {
    template:"%s - Myshop",
    default: "Myshop"
  },
  description: "This is description shop",
  keywords: "myshop, shop, product, product shop, shop product, shop product shop",
  openGraph:{
    title: {
      template:"%s - Myshop",
      default: "Myshop"
    },
    description: "This is description shop",
    images: [
     'https://i.pinimg.com/236x/d8/a3/d3/d8a3d372412ebd218ae3cb705d25645e.jpg'
    ],
   
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUILayout>
        <NavbarComponent />
          <Suspense fallback={<LoadingComponent/>}>
            <ErrorBoundary errorComponent={Error}>
            {children}
            </ErrorBoundary>
          {/* {children} */}

         </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
