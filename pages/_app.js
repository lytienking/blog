import '../styles/css/bootstrap.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/style.css';
import '../styles/css/responsive.css';
import '../styles/css/colors.css';
import Layout from '../Layout/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
