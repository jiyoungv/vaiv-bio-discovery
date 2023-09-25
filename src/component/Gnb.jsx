import { useLocation } from 'react-router-dom';

const gnbList = [
  {
    url: '/',
    label: 'Entity Search',
  },
  {
    url: '/relation-search',
    label: 'Relation Search',
  },
  {
    url: '/search-gpt',
    label: 'SearchGPT',
  },
];

const Gnb = () => {
  const location = useLocation();

  return (
    <nav id="gnb">
      <div className="common-inner">
        <ul className="gnb-list">
          {gnbList.map((v, i) => (
            <li key={i} className={v.url === location.pathname ? 'active' : ''}>
              <a href={v.url} className="list-link" title={`Go to ${v.label}`}>{v.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Gnb;