import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';

const list = [
  {
    title: 'PubMed',
    text: `
      PubMed is developed and maintained by the National Center for Biotechnology Information (NCBI), at the U.S. National Library of Medicine (NLM), located at the National Institutes of Health (NIH). Our service is not affiliated with, endorsed by, or approved by NCBI, NLM, or NIH. <br/><br/>
      MeSH terms and abstracts derived from PubMed are owned by their respective copyright holders and are used in our search service under principles of fair use and/or with permission from the copyright holders. Our service does not claim any ownership or exclusive rights over the data.    
    `,
  },
  {
    title: 'Use of Content',
    text: `
      You may use the content provided through our service for personal, informational, and non-commercial purposes. Any other use of the content, including copying, distributing, or using for commercial purposes without our express permission is strictly prohibited. <br/><br/>
      Users are encouraged to use the content responsibly and to cite the original publications and to adhere to all applicable copyright laws and regulations in their use of the content. <br/><br/>
      We do not guarantee the accuracy, completeness, or timeliness of data retrieved from PubMed, and users should always refer to the original source for the most accurate and up-to-date information.    
    `,
  },
  {
    title: 'Copyright Complaints',
    text: `
      All other content on this service, including but not limited to logos, trademarks, and design elements are © VAIV Company Inc., 2023. All rights reserved. <br/><br/>
      If you believe that any content available through our service infringes upon your copyright, please submit a detailed complaint to our copyright agent at <a href="mailto:biz@vaiv.kr">biz@vaiv.kr</a>.
    `,
  },
];

const Copyrights = () => {
  return (
    <AppLayout className="common-layout2 copyrights-page">
      <section className="common-service">
        <div className="common-inner">
          <div className="common-service-title">
            <h6>Copyrights</h6>
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

export default Copyrights;