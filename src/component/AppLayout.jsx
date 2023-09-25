import PropTypes from 'prop-types';
import Header from 'component/Header';
import Footer from 'component/Footer';

const AppLayout = ({ children, className }) => {
  return (
    <div id="wrap" className={className ? className : ''}>      
      <Header />
      <div id="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AppLayout;