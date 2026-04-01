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
//   title: "Devfolio | Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
//   description: "Devfolio is a portfolio website for developers to showcase their projects and skills.",
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
  title: "CodeWithDeepak | MERN Stack Developer Portfolio",
  description: "Deepak Kumar portfolio. MERN Stack Developer with React, Node.js, MongoDB projects.",
  
  verification: {
    google: "EGpBy7UijILC-bPGyBQ1bA6jJx6gxaVf5fop_UkPwd8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300 ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}