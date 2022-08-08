import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import Link from "../node_modules/next/link";

const contact = () => {
  return (
    <MainLayout>
      <h1 className={'title'}>Welcome to Contact page</h1>

      <p className={'description'}>
        ➡ Return to : <Link href="/">Home</Link>
      </p>
      <p>
        Get started by editing{" "}
        <code className={'code'}>pages/contact .jsx</code>
      </p>
    </MainLayout>
  );
};

export default contact;
