
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function contactPage() {
  return (
    <MainLayout>
      <h1>Contact PAGE</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home </Link>
      </h1>

      <p>
        Get started by editing <code className={"code"}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
