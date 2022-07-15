import Head from "next/head"
import { NavBar } from "../NavBar"
import styles from "../layouts/MainLayout.module.css"
import Link from "next/link"

export const MainLayout = ({children, titleH, metaContent }) => {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <Head>
            <title>{titleH}</title>
            <meta name="description" content= {metaContent} />
            <Link rel="icon" href='/favicon.ico' />
            <meta name="keywords" content="diseño grafico, diseño web, grafict designers, react web"/>
        </Head>
        <main className={styles.main}>
        { children }
        </main>
      </div>
    </>
  )
}
