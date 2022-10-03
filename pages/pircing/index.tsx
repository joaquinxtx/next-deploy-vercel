import Link from "next/link";
import { DarckLayouts } from "../../components/layouts/DarckLayouts";
import { MainLayout } from "../../components/layouts/MainLayout";



export default function pircingsPage() {
  return (
    <>
        <h1>Pircing PAGE</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p>
          Get started by editing <code className={"code"}>pages/pircings.js</code>
        </p>  
    </>
  );
}


pircingsPage.getLayout = function getLayout(page:JSX.Element){
  return(
    <MainLayout>
      <DarckLayouts>
        {page}
      </DarckLayouts>
    </MainLayout>
  )
}