import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yared List | Home</title>
        <meta name="keywords" content="yared"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          lorem
          hirhjhreuirehuirehirjreigjigheuighigujreoifuiufyerfjrehiruegnregjoigjgtrgirjgugrugher
        </p>
        <p className={styles.text}>
          lorem hgdgedgevnehewfnfhriumriorjcguhg
          tuhgrefregprgrghrghrhfrmefhrufxrmgrhgrghmrughmxrifhrfmr
        </p>
        <p className={styles.text}>
          lorem hgvuhgmrgcrh,gxregerxfoejfiorejfiurgregoregurieougpighc
          hkljbnjabqhjbhuguxynyruturocti,mitumreiutmriuctm,rtrem,cfr
        </p>
        <Link href="/yared">
          <a className={styles.btn}>All Lists</a>
        </Link>
      </div>
    </>
  );
}
