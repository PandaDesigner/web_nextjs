import { FC } from "react"
import Head from "next/head"
import Link from "next/link"
import { NavBar } from "../NavBar"
import styles from "../layouts/MainLayout.module.css"

interface Props {
  titleH: string;
  metaContent: string;
}

export const MainLayout: FC<Props> = ({children, titleH, metaContent }) => {
  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <Head>
            <title>{titleH}</title>
            <meta name="description" content= {metaContent} />
            <meta name="keywords" content="diseño grafico, diseño web, grafict designers, react web"/>
        </Head>
        <main className={styles.main}>
        { children }
        </main>
      </div>
    </>
  )
}
