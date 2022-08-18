
import Layout from "../components/layout";
import store from "../context/store";
import { Provider } from "react-redux";
import Router,{ useRouter } from "next/router";
import React,{ useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import AuthLayout from "../components/AuthLayout";

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, ...appProps }) {
  const router = useRouter();
  const state = store.getState();
  const isLogged = state.user.isLogged;


  useEffect(() => {
    if (typeof window !== "undefined") return <></>;
    if (!isLogged || isLogged == false) {
      router.push("/login");
    }
  }, [isLogged,router]);

  const getLayout = () => {
    if ([`/login`].includes(appProps.router.pathname) || [`/register`].includes(appProps.router.pathname) || [`/authrecovery`].includes(appProps.router.pathname)) {
      return (
        <Provider store={store}>
           <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
          <AuthLayout>
          <Component {...pageProps} />
          </AuthLayout>
          
        </Provider>
      );
    }

    return (
      <Provider store={store}>       
        <Layout>
        <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  };

  return getLayout();
}

export default MyApp;
