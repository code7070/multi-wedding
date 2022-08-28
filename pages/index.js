import Head from "next/head";
import Homepage from "../pagesview/homepage/Homepage";
import styles from "../styles/Home.module.css";
import "swiper/css";
import "html5-device-mockups/dist/device-mockups.min.css";

export const MetaHead = ({
  title = "Pengen Nikah",
  description = "Pengen Nikah? Kami bantu buat model digitalnya untuk kamu",
  icon = "/favicon.ico",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={icon} />
    </Head>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <MetaHead />
      <Homepage />
    </div>
  );
}
