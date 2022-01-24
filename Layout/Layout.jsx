import Header from './header/Header';
import Footer from './footer/Footer';
function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
export default Layout;