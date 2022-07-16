import Link from "next/link"
import { MainLayout } from "../../components/layouts"


const Pricing = () => {
    return (
    <>
        <h1>Pricing Pages</h1>
        <h2 className={"title"}>
            ir al <Link href="/"><a>Home</a></Link>
        </h2>
        <p className={"description"}>
            Get started by editing{' '}
            <code className={"code"}>pages/pricing/index.jsx</code>
        </p>
            
    </>
  )
}

export default Pricing;

Pricing.getLayout = function getLayout( page ){
    return(
      <MainLayout titleH = {"Pricing - pandaDesigners"} metaContent={"Pricing Page PandaDesigners"} >

            { page }
        
      </MainLayout>
    )
  }