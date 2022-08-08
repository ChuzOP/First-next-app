import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import LightLayout from "../components/Layout/LightLayout";
import Link from "../node_modules/next/link";

const about = () => {
  return (
    <>
      <h1 className={'title'}>Welcome to About</h1>

      <p className={'description'}>
        ➡ Go to : <Link href="/">Home</Link>
      </p>
      <p className={'description'}>
        Get started by editing{" "}
        <code className={"code"}>pages/about .jsx</code>
      </p>
    </>
  );
};

about.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <LightLayout>{ page }</LightLayout>
    </MainLayout>
  );
};

export default about;
