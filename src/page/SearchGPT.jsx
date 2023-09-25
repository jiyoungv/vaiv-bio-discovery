import { useCallback, useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { DatePicker } from 'antd';
import parse from 'html-react-parser';
import AppLayout from 'component/AppLayout';
import SkeletonItem from 'component/SkeletonItem';
import NoData from 'component/NoData';
import { tempSearchGPTSummary, tempSearchGPTDocuments } from 'util/tempData';

const { RangePicker } = DatePicker;

const dateRangeList = [
  { value: 'date-range-5', label: 'past 5 years' },
  { value: 'date-range-10', label: 'past 10 years' },
  { value: 'date-range-custom', label: 'custom range', detail: true },
];

const SearchGPT = () => {
  const [keywordInput, setKeywordInput] = useState('');

  // date range
  const [dateRangeRadio, setDateRangeRadio] = useState(dateRangeList[0].value);
  const [openDateRangeDetail, setOpenDateRangeDetail] = useState(false);

  // loading
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingDocuments, setLoadingDocuments] = useState(false);

  // result
  const [resultSummary, setResultSummary] = useState(null);
  const [resultDocuments, setResultDocuments] = useState(null);

  const onSumbit = useCallback((e) => {
    e.preventDefault();

    setResultSummary(null);
    setResultDocuments(null);
    setLoadingSummary(true);
    setLoadingDocuments(true);

    // 임시 테스트
    setTimeout(() => {
      setResultSummary(tempSearchGPTSummary);
      setLoadingSummary(false);
    }, 4000);

    // 임시 테스트
    setTimeout(() => {
      setResultDocuments(tempSearchGPTDocuments);
      setLoadingDocuments(false);
    }, 2000);
  }, []);

  return (
    <AppLayout className="common-layout search-gpt-page">
      <form className="common-form" onSubmit={onSumbit}>
        <div className="common-inner">
          <div className="form-area">
            <div className="form-keyword">
              <input 
                type="text" 
                className="vinput full form-keyword-input" 
                value={keywordInput} 
                onChange={(e) => setKeywordInput(e.target.value)} 
                placeholder="Enter a query in natural language for VAIV SearchGPT" 
                required
                onInvalid={(e) => e.target.setCustomValidity('Please enter a keyword.')}
                onInput={(e) => e.target.setCustomValidity('')}
              />
              <RiSearchLine className="form-keyword-icon" size={24} />
            </div>
            <div className="form-filter">
              <div className="form-filter-title">
                <p>Search Filter</p>
              </div>
              <div className="form-filter-row">
                <label className="form-filter-label">Date Range</label>
                <div className="form-filter-radio-row">
                  {dateRangeList.map((v, i) => (
                    <div key={i} className={`vradio form-filter-radio ${v.detail ? 'type-detail' : ''} ${(v.detail && openDateRangeDetail) ? 'active-detail' : ''}`}>
                      <input 
                        type="radio" 
                        id={v.value} 
                        value={v.value} 
                        name="date-range" 
                        checked={v.value === dateRangeRadio ? true : false} 
                        onChange={(e) => setDateRangeRadio(e.target.value)} 
                        onClick={() => v.value === 'date-range-custom' ? setOpenDateRangeDetail(prev => !prev) : setOpenDateRangeDetail(false)}
                      />
                      <label htmlFor={v.value}>{v.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              {openDateRangeDetail && (
                <div className="form-filter-row">
                  <label className="form-filter-label">&nbsp;</label>
                  <div>
                    <RangePicker className="form-filter-date-range" picker="month" />
                  </div>
                </div>
              )}
            </div>
            <div className="form-button-row">
              <button type="submit" className={`vbutton form-button-submit ${(loadingSummary || loadingDocuments) ? 'loading' : ''}`}>Apply</button>
            </div>
          </div>
        </div>
      </form>
      <section className="search-gpt-result">
        <div className="common-inner">
          <div className="result-area">
            {loadingSummary && <SkeletonItem height={200} />}
            {resultSummary !== null && (
              <div className="result-summary">
                <div className="result-summary-title">
                  <p>Summary</p>
                </div>
                {resultSummary.length > 0 ? (
                  <div className="result-summary-text">
                    <p>{resultSummary}</p>
                  </div>
                ) : (
                  <NoData />
                )}
              </div>
            )}
          </div>
          <div className="result-area">
            {loadingDocuments && <SkeletonItem line={3} />}
            {resultDocuments && (
              resultDocuments?.length > 0 ? (
                <ul className="common-document-list">
                  {resultDocuments?.map((v, i) => (
                    <li key={i}>
                      <div className="list-title">
                        <a href={v.url} target="_blank" rel="noreferrer">{v.title}</a>
                      </div>
                      <div className="list-text cut">
                        <p>{parse(v.text)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <NoData />
              )
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default SearchGPT;
