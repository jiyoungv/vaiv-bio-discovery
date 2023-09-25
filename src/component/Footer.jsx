const snbList = [
  {
    url: '/terms-policies',
    label: 'Terms & Policies',
  },
  {
    url: '/copyrights',
    label: 'Copyrights',
  },
  {
    url: 'contact-us',
    label: 'Contact Us',
  },
];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="common-inner">
        <div className="footer-area">
          <div className="footer-info">
            <div className="info-title">
              <p>About</p>
            </div>
            <div className="info-text">
              <p>
                VAIV Bio-discovery is a search service for associations <br/>
                between bio-terms from biomedical literature
              </p>
            </div>
          </div>
          <ul className="footer-snb-list">
            {snbList.map((v, i) => (
              <li key={i}>
                <a href={v.url} className="list-link">{v.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;