import "@/styles/globals.css";
import localFont from "@next/font/local";

// Font files can be colocated inside of pages
const utopia = localFont({
  src: [
    {
      path: "../public/Fonts/UtopiaStd-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/UtopiaStd-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Fonts/UtopiaStd-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-utopia",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${utopia.variable} font-sans`}>
      <Component {...pageProps} />;
    </div>
  );
}
