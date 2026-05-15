// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";
// // import { ThemeProvider } from "./context/ThemeContext";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata: Metadata = {
// //   title: "Devfolio | Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
// //   description: "Devfolio is a portfolio website for developers to showcase their projects and skills.",
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
// //       >
// //         <ThemeProvider>
// //           <Navbar />
// //           <main className="min-h-screen pt-24">{children}</main>
// //           <Footer />
// //         </ThemeProvider>
// //       </body>
// //     </html>
// //   );
// // }


// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "./context/ThemeContext";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "CodeWithDeepak | MERN Stack Developer Portfolio",
//   description: "Deepak Kumar portfolio. MERN Stack Developer with React, Node.js, MongoDB projects.",
  
//   verification: {
//     google: "EGpBy7UijILC-bPGyBQ1bA6jJx6gxaVf5fop_UkPwd8",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={`bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <ThemeProvider>
//           <Navbar />
//           <main className="min-h-screen pt-24">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://me-portfolio-24nq.vercel.app"),

  title: "CodeWithDeepak | Deepak Kumar MERN Stack Developer",

  description:
    "CodeWithDeepak portfolio. Deepak Kumar MERN Stack Developer building React, Next.js, Node.js, Express and MongoDB projects.",

  keywords: [
    "CodeWithDeepak",
    "Deepak Kumar",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "MongoDB",
    "Node.js",
    "Portfolio Website",
  ],

  authors: [{ name: "Deepak Kumar" }],

  creator: "Deepak Kumar",

  openGraph: {
    title: "CodeWithDeepak | MERN Stack Developer",
    description:
      "Deepak Kumar portfolio with React, Next.js, Node.js and MongoDB projects.",
    url: "https://me-portfolio-24nq.vercel.app",
    siteName: "CodeWithDeepak",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "EGpBy7UijILC-bPGyBQ1bA6jJx6gxaVf5fop_UkPwd8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}