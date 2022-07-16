import Link from 'next/link'
import { MainLayout } from '../components/layouts'


const About = () => {
  return (
    <>
        <MainLayout titleH = {"About - pandaDesigners"} metaContent={"About Page PandaDesigners"}>
        <h1>About Pages</h1>
        <h2 className="title">
            ir al <Link href="/">
              <a>Home</a>
              </Link>
        </h2>
        <p className="description">
            Get started by editing{' '}
            <code className="code">pages/about.jsx</code>
        </p>
        </MainLayout>
    </>
  )
}

export default About