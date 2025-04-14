import { LayoutProps } from "@/utils/types";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Modal from "./modal";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (router.pathname === "/") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [router.pathname]);
  return (
    <div>
      {show && <Header />}
      {show && <Sidebar />}
      <Modal />
      {children}
    </div>
  );
};

export default Layout;
