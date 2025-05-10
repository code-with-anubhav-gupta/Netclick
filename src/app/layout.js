import "../app/globals.css";
import { Noto_Sans } from "next/font/google";
import { AppProvider } from "@/context/Context";

const notoSans = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
