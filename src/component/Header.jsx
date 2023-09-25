import Gnb from 'component/Gnb';
import logo_vaiv from 'asset/image/logo_vaiv.svg';

const Header = () => {
  return (
    <header id="header">
      <div className="common-inner">
        <div className="header-row">
          <div className="header-logo">
            <h1>
              <a href="/statistics" title="Go to Statistics">
                <img src={logo_vaiv} alt="VAIV" /> 
                <em>Bio-discovery</em>
              </a>
            </h1>
          </div>
        </div>
      </div>
      <Gnb />
    </header>
  );
};

export default Header;