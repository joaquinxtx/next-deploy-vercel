
import Link from "next/link";
import { DarckLayouts } from "../components/layouts/DarckLayouts";
import { MainLayout } from "../components/layouts/MainLayout";


export default function aboutPage() {
  return (
    <>
        <h1>ABOUT PAGE</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p>
          Get started by editing <code className={"code"}>pages/about.js</code>
        </p>  
    </>
  );
}


aboutPage.getLayout = function getLayout(page:JSX.Element){
  return(
    <MainLayout>
      <DarckLayouts>
        {page}
      </DarckLayouts>
    </MainLayout>
  )
}