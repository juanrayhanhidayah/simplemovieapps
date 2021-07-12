import React from "react";
import Header from "../Header/Header"
import BottomNav from "../BottomNav/BottomNav"
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
      <BottomNav />
    </div>
  )
}

export default Layout