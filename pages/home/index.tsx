import { Button, Typography } from "@mui/material";
import { CommonLayout } from "../../components/layout/Layout";
import Navigation from "../../components/layout/Navigation";
import Beranda from "../../components/home";

import { loginSxListener, whenAuthorized, logout } from "../../utils/auths";
import { useState } from "react";

const Home = (props) => {
  const [navValue, setNavValue] = useState(0);

  const onNavigationChange = (event, value) => {
    setNavValue(value);
  }


  loginSxListener()
  return (
    <div>
      <CommonLayout>
        <Beranda/>
      </CommonLayout>
      <Navigation showLabels={true} value={navValue} onChange={onNavigationChange} />
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const componentProps = await whenAuthorized(ctx)
  return { props: { authorization: { ...componentProps } } }
}

export default Home
