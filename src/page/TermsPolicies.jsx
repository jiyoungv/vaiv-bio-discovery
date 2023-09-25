import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';

const list = [
  {
    title: 'Introduction',
    text: 'Welcome to VAIV Bio-discovery Service. These terms and policies govern your use of our services. Please read them carefully.',
  },
  {
    title: 'Use of the Service',
    text: 'Our service allows you to search for biomedical entities and relations based on the frequency of their appearances and to find an answer for queries in natural language in articles listed on PubMed. By using this service, you agree to use the provided data responsibly and ethically.',
  },
  {
    title: 'Data Sources',
    text: 'Our service currently relies on data available through PubMed. We do not claim any rights over the data and acknowledge that the data remains the intellectual property of the respective owners and/or authors.',
  },
  {
    title: 'Data Accuracy',
    text: 'While we strive to provide accurate results, we cannot guarantee the accuracy, reliability, or completeness of the data retrieved through this service.',
  },
  {
    title: 'Intellectual Property Rights',
    text: 'Unless otherwise stated, the service and its original content (excluding content provided by users and publicly available data from PubMed), features, and functionality are owned by Bioinformatics Discovery Service and are protected by international copyright, trademark, patent, trade secret, and other intellectual property rights laws.',
  },
];

const TermsPolicies = () => {
  return (
    <AppLayout className="common-layout2 terms-policies-page">
      <section className="common-service">
        <div className="common-inner">
          <div className="common-service-title">
            <h6>VAIV Bio-Discovery Service Terms & Policies</h6>
          </div>
          <ul className="common-service-list">
            {list.map((v, i) => (
              <li key={i}>
                <div className="list-title">
                  <p>{i + 1}. {v.title}</p>
                </div>
                <div className="list-text">
                  <p>{parse(v.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </AppLayout>
  );
};

export default TermsPolicies;