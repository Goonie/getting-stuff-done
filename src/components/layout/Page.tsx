import { ReactNode } from "react";

import "./Page.scss";

interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return <main className="Page">{children}</main>;
}

export default Page;
