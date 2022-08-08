import MainLayout from "../components/Layout/MainLayout";
import Link from "../node_modules/next/link";

export default function Home() {
  return (
    <MainLayout>
      <h1 className={'title'}>Welcome to Home</h1>
      <p className={'description'}>
        ➡ Go to : <Link href="/about">About</Link>
      </p>
      <p>
        Get started by editing{" "}
        <code className={'code'}>pages/index .jsx</code>
      </p>
    </MainLayout>
  );
}
