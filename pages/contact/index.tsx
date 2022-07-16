import { MainLayout, DarkLayout } from "../../components/layouts"

import Link from "next/link"

const Contact = () => {
  return (
    <>
      <h1>Contact Pages</h1>
      <h2 className={"title"}>
          ir al <Link href="/">Home</Link>
      </h2>
      <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/contact/index.jsx</code>
      </p>
    
    </>
  )
}

export default Contact


Contact.getLayout = function getLayout( page ){
  return(
    <MainLayout titleH = {"Contact - pandaDesigners"} metaContent={"Contact Page PandaDesigners"} >
      <DarkLayout>
          { page }
      </DarkLayout>
    </MainLayout>
  )
}