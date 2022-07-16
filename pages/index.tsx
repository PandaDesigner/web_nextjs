import Link  from 'next/link'
import { MainLayout } from '../components/layouts'


export default function HomePage() {
  return (
    <>
        <MainLayout titleH = {"Home - pandaDesigners"} metaContent={"Home Page PandaDesigners"} >
        <h1>Home Pages</h1>
              <h2 className={"title"}>
                ir al <Link href="/about">
              <a>About</a>
              </Link>
              </h2>
              <h2 className={"title"}>
                ir al <Link href="/contact">
              <a>Contact</a>
              </Link>
              </h2>
            <p className={"description"}>
              Get started by editing{' '}
              <code className={"code"}>pages/index.jsx</code>
          </p>
        </MainLayout>
    </>
  )
}

/* HomePage.getLayout = function getLayout( page ){
  return(
    <MainLayout titleH = {"Pricing - pandaDesigners"} metaContent={"Pricing Page PandaDesigners"} >

          { page }
      
    </MainLayout>
  )
} */