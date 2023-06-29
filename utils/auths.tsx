import { clearStorage } from "./localStorageUtil";
import { useEffect } from "react";
import { userLogout } from "../functions/user/UserApiCall";
import { Status } from "../classes/response/Status";

import cookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import nextCookie from "next-cookies";
import getHost from "./get-host";
import Response from "../classes/response/Response";
import { handleErrorResponse, handleResponse } from "../functions/api/ApiHandleResponse";

export const login = (token) => {
  cookie.set("token", token, { expires: 1 / 3 }); //expires in 8 hours
  // cookie.set('token', token) //does not expires
  Router.push("/home");
};

export const auth = (ctx) => {
  const { token } = nextCookie(ctx);
  if (!token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(303, { Location: "/login" });
      ctx.res.end()
    } else {
      Router.push("/login");
    }
  }

  return token;
};

export const logout = async () => {
  const secret = cookie.get("token");
  await userLogout(secret);
  cookie.remove("token");
  clearStorage();
  window.localStorage.setItem("logout", Date.now().toString());
  Router.push("/");
};

export const withAuhtSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const syncLogout = (event) => {
      if (event.key === "logout") {
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx) => {
    const token = auth(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token };
  };

  return Wrapper;
};

export const whenAuthorized = async (ctx) => {
  const { token } = nextCookie(ctx);
  const apiUrl = getHost(ctx.req) + "/api/landingpage";

  const redirectOnError = () => {
    if (typeof window !== "undefined") {
      console.log("router--push");
      Router.push("/login");
    } else {
      ctx.res.writeHead(302, { Location: "/login" })
      ctx.res.end()
    }
  };

  try {
    const response = await axios({
      url: apiUrl,
      method: "GET",
      withCredentials: true,
      headers: {
        Authorization: JSON.stringify({ token }),
      },
    });

    if (response.status === 200) {
      console.log('reponse-data', response.data)
      return response.data;
    } else {
      // https://github.com/developit/unfetch#caveats
      return redirectOnError();
    }
  } catch (error) {
    return redirectOnError();
  }
};

export const authorizedPage = async (req, res) => {
  if (!("authorization" in req.headers)) {
    return res.status(401).send("Authorization header missing");
  }

  const auth = await req.headers.authorization;

  try {
    const bearer = JSON.parse(auth);

    if (!bearer.token) {
      let response = new Response(Status.UNAUTHORIZED, 'Unauthorized Request', null)
      handleResponse<string>(response, res)
    } else {
      return res.status(200).json(bearer)
    }
  } catch (error) {
    const { response } = error;
    response.status = 200;
    response.statusText = "SUCCESS";
    return response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(400).json({ message: error.message });
  }
};

export const loginSxListener = async () => {
  const syncLogout = (event) => {
    if (event.key === "logout") {
      Router.push("/login");
    }
  };
  useEffect(() => {
      window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
      window.localStorage.removeItem("logout");
    };
  },[]);
};
