import '../styles/globals.css';
import '../styles/css/style.css';
import '../styles/css/styleFooter.css';
import Layout from '../Layout/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
