import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
         <Head>
        <link
          href="/assets/libs/datatables.net-bs5/css/dataTables.bootstrap5.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/libs/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/libs/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="/assets/libs/datatables.net-select-bs5/css/select.bootstrap5.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="/assets/css/default/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
          id="bs-default-stylesheet"
        />
        <link
          href="/assets/css/default/app.min.css"
          rel="stylesheet"
          type="text/css"
          id="app-default-stylesheet"
        />

        <link
          href="/assets/css/default/bootstrap-dark.min.css"
          rel="stylesheet"
          type="text/css"
          id="bs-dark-stylesheet"
        />
        <link
          href="/assets/css/default/app-dark.min.css"
          rel="stylesheet"
          type="text/css"
          id="app-dark-stylesheet"
        />
        <link
          href="/assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
        <body  className="loading dx-viewport" data-layout='{"mode": "light", "width": "fluid", "menuPosition": "fixed", "sidebar": { "color": "light", "size": "default", "showuser": false}, "topbar": {"color": "dark"}, "showRightSidebarOnPageLoad": true}'>
          <Main />
          <NextScript />
        <script defer src="/assets/js/vendor.min.js"></script>
        <script defer src="/assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
        <script defer src="/assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
        <script defer src="/assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
        <script defer src="/assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
        <script defer src="/assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
        <script defer src="/assets/libs/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
        <script defer src="/assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
        <script defer src="/assets/libs/datatables.net-buttons/js/buttons.flash.min.js"></script>
        <script defer src="/assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
        <script defer src="/assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
        <script defer src="/assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
        <script defer src="/assets/libs/pdfmake/build/pdfmake.min.js"></script>
        <script defer src="/assets/libs/pdfmake/build/vfs_fonts.js"></script>
        <script defer src="/assets/js/pages/datatables.init.js"></script>
        <script defer src="/assets/js/app.min.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
