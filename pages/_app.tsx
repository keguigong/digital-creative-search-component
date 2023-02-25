import type { AppProps } from "next/app";
import "@/styles/global.scss"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={poppins.className}>
    <Component {...pageProps} />
  </main>;
}
