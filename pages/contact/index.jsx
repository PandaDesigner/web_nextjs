import { MainLayout } from "../../components/layouts"
import Link from "next/link"

const Contact = () => {
  return (
    <>
    <MainLayout titleH = {"Contact - pandaDesigners"} metaContent={"Contact Page PandaDesigners"} >
      <h1>Contact Pages</h1>
      <h2 className={"title"}>
          ir al <Link href="/">Home</Link>
      </h2>
      <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/contact.jsx</code>
      </p>
    </MainLayout>
    </>
  )
}

export default Contact