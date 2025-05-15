import "../app/globals.css";
import { Noto_Sans } from "next/font/google";
import { AppProvider } from "@/context/Context";
import { Toaster } from "react-hot-toast";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <Toaster position="top-right" />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
