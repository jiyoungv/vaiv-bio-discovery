import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import AppLayout from 'component/AppLayout';
import NoData from 'component/NoData';
import SkeletonItem from 'component/SkeletonItem';
import { tempStatGeneProtein, tempStatChemicalCompound, tempStatDisease } from 'util/tempData';

const Statistics = () => {
  // loading
  const [loadingGeneProtein, setLoadingGeneProtein] = useState(false);
  const [loadingChemicalCompound, setLoadingChemicalCompound] = useState(false);
  const [loadingDisease, setLoadingDisease] = useState(false);

  // result
  const [resultGeneProtein, setResultGeneProtein] = useState(null);
  const [resultChemicalCompound, setResultChemicalCompound] = useState(null);
  const [resultDisease, setResultDisease] = useState(null);

  // 임시 테스트
  useEffect(() => {
    setLoadingGeneProtein(true);
    setLoadingChemicalCompound(true);
    setLoadingDisease(true);

    setTimeout(() => {
      setResultGeneProtein(tempStatGeneProtein);
      setLoadingGeneProtein(false);
    }, 1000);

    setTimeout(() => {
      setResultChemicalCompound(tempStatChemicalCompound);
      setLoadingChemicalCompound(false);
    }, 2000);

    setTimeout(() => {
      setResultDisease(tempStatDisease);
      setLoadingDisease(false);
    }, 3000);
  }, []);

  return (
    <AppLayout className="common-layout stat-page">
      <section>
        <div className="common-inner">
          <div className="stat-title">
            <p>Statistics past 10 years</p>
          </div>
          <div className="stat-area">
            <div className="stat-col">
              {loadingGeneProtein && <SkeletonItem line={5} />}
              {resultGeneProtein && (
                <div>
                  <div className="common-title">
                    <p>Gene/Protein</p>
                  </div>
                  <table className="common-table stat-table">
                    <colgroup>
                      <col width="60px" />
                      <col width="" />
                      <col width="" />
                    </colgroup>
                    <thead>
                      <tr className="text-center">
                        <th>&nbsp;</th>
                        <th>Relations</th>
                        <th>Freq</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultGeneProtein?.length > 0 ? (
                        resultGeneProtein?.map((v, i) => (
                          <tr key={i}>
                            <td className="text-right">{i + 1}</td>
                            <td>{v.label}</td>
                            <td className="text-right">{v.freq}</td>
                          </tr>
                        ))
                      ) : (
                        <tr className="no-data">
                          <td colSpan={3}>
                            <NoData />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="common-pagination">
                    <Pagination defaultCurrent={1} total={50} />
                  </div>
                </div>
              )}
            </div>
            <div className="stat-col">
              {loadingChemicalCompound && <SkeletonItem line={5} />}
              {resultChemicalCompound && (
                <div>
                  <div className="common-title">
                    <p>Chemical Compound</p>
                  </div>
                  <table className="common-table stat-table">
                    <colgroup>
                      <col width="60px" />
                      <col width="" />
                      <col width="" />
                    </colgroup>
                    <thead>
                      <tr className="text-center">
                        <th>&nbsp;</th>
                        <th>Relations</th>
                        <th>Freq</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultChemicalCompound?.length > 0 ? (
                        resultChemicalCompound?.map((v, i) => (
                          <tr key={i}>
                            <td className="text-right">{i + 1}</td>
                            <td>{v.label}</td>
                            <td className="text-right">{v.freq}</td>
                          </tr>
                        ))
                      ) : (
                        <tr className="no-data">
                          <td colSpan={3}>
                            <NoData />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="common-pagination">
                    <Pagination defaultCurrent={1} total={50} />
                  </div>
                </div>
              )}
            </div>
            <div className="stat-col">
              {loadingDisease && <SkeletonItem line={5} />}
              {resultDisease && (
                <div>
                  <div className="common-title">
                    <p>Disease</p>
                  </div>
                  <table className="common-table stat-table">
                    <colgroup>
                      <col width="60px" />
                      <col width="" />
                      <col width="" />
                    </colgroup>
                    <thead>
                      <tr className="text-center">
                        <th>&nbsp;</th>
                        <th>Relations</th>
                        <th>Freq</th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultDisease?.length > 0 ? (
                        resultDisease?.map((v, i) => (
                          <tr key={i}>
                            <td className="text-right">{i + 1}</td>
                            <td>{v.label}</td>
                            <td className="text-right">{v.freq}</td>
                          </tr>
                        ))
                      ) : (
                        <tr className="no-data">
                          <td colSpan={3}>
                            <NoData />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="common-pagination">
                    <Pagination defaultCurrent={1} total={50} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Statistics;
