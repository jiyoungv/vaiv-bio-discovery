import { useCallback, useState, useEffect } from 'react';
import { RiSearchLine, RiErrorWarningLine } from 'react-icons/ri';
import { DatePicker, Pagination } from 'antd';
import AppLayout from 'component/AppLayout';
import ResultText from 'component/ResultText';
import SkeletonItem from 'component/SkeletonItem';
import NoData from 'component/NoData';
import { tempEntitySearchKeywords, tempEntitySearchDocuments } from 'util/tempData';

const { RangePicker } = DatePicker;

const keywordList = [
  { value: 'keyword-any', label: 'Any keyword' },
  { value: 'keyword-specific', label: 'Specific keywords', detail: true },
];

const specificKeywordList = [
  { value: 'specific-keyword-gene-protein', label: 'Gene-protein' },
  { value: 'specific-keyword-chemical-compound', label: 'Chemical-compound' },
  { value: 'specific-keyword-disease', label: 'Disease' },
  { value: 'specific-keyword-mesh', label: 'MeSH' },
];

const includeKeywordList = [
  { value: 'include-keyword-any', label: 'Any keyword' },
  { value: 'include-keyword-specific', label: 'Specific keywords', detail: true },
];

const specificIncludeKeywordList = [
  { value: 'specific-include-keyword-gene-protein', label: 'Gene-protein' },
  { value: 'specific-include-keyword-chemical-compound', label: 'Chemical-compound' },
  { value: 'specific-include-keyword-disease', label: 'Disease' },
  { value: 'specific-include-keyword-mesh', label: 'MeSH' },
];

const excludeKeywordList = [
  { value: 'exclude-keyword-any', label: 'Any keyword' },
  { value: 'exclude-keyword-specific', label: 'Specific keywords', detail: true },
];

const specificExcludeKeywordList = [
  { value: 'specific-exclude-keyword-gene-protein', label: 'Gene-protein' },
  { value: 'specific-exclude-keyword-chemical-compound', label: 'Chemical-compound' },
  { value: 'specific-exclude-keyword-disease', label: 'Disease' },
  { value: 'specific-exclude-keyword-mesh', label: 'MeSH' },
];

const dateRangeList = [
  { value: 'date-range-all', label: 'All (1970 ~ 2022)' },
  { value: 'date-range-1', label: 'past 1 year' },
  { value: 'date-range-5', label: 'past 5 years' },
  { value: 'date-range-10', label: 'past 10 years' },
  { value: 'date-range-custom', label: 'custom range', detail: true },
];

const entityTypeList = [
  { value: 'entity-type-any', label: 'Any entity type' },
  { value: 'entity-type-none', label: 'None' },
  { value: 'entity-type-specific', label: 'Specific entities', detail: true },
];

const specificEntityList = [
  { value: 'specific-entity-gene-protein', label: 'Gene-protein' },
  { value: 'specific-entity-chemical-compound', label: 'Chemical-compound' },
  { value: 'specific-entity-disease', label: 'Disease' },
  { value: 'specific-entity-mesh', label: 'MeSH' },
];

const EntitySearch = () => {
  const [keywordInput, setKeywordInput] = useState('');

  // query type
  const [keywordRadio, setKeywordRadio] = useState(keywordList[0].value);
  const [openSpecificKeywordDetail, setOpenSpecificKeywordDetail] = useState(false);
  const [specificKeywordCheck, setSpecificKeywordCheck] = useState(new Set());
  const onChangeSpecificKeywordCheck = useCallback((value) => {
    let newState = new Set(specificKeywordCheck);

    if (newState.has(value)) {
      newState.delete(value);
    } else {
      newState.add(value);
    }

    setSpecificKeywordCheck(newState);
  }, [specificKeywordCheck]);

  // date range
  const [dateRangeRadio, setDateRangeRadio] = useState(dateRangeList[0].value);
  const [openDateRangeDetail, setOpenDateRangeDetail] = useState(false);

  // include
  const [includeInput, setIncludeInput] = useState('');
  const [includeKeywordRadio, setIncludeKeywordRadio] = useState(includeKeywordList[0].value);
  const [openSpecificIncludeKeywordDetail, setOpenSpecificIncludeKeywordDetail] = useState(false);
  const [specificIncludeKeywordCheck, setSpecificIncludeKeywordCheck] = useState(new Set());
  const onChangeSpecificIncludeKeywordCheck = useCallback((value) => {
    let newState = new Set(specificIncludeKeywordCheck);

    if (newState.has(value)) {
      newState.delete(value);
    } else {
      newState.add(value);
    }

    setSpecificIncludeKeywordCheck(newState);
  }, [specificIncludeKeywordCheck]);

  // exclude
  const [excludeInput, setExcludeInput] = useState('');
  const [excludeKeywordRadio, setExcludeKeywordRadio] = useState(excludeKeywordList[0].value);
  const [openSpecificExcludeKeywordDetail, setOpenSpecificExcludeKeywordDetail] = useState(false);
  const [specificExcludeKeywordCheck, setSpecificExcludeKeywordCheck] = useState(new Set());
  const onChangeSpecificExcludeKeywordCheck = useCallback((value) => {
    let newState = new Set(specificExcludeKeywordCheck);

    if (newState.has(value)) {
      newState.delete(value);
    } else {
      newState.add(value);
    }

    setSpecificExcludeKeywordCheck(newState);
  }, [specificExcludeKeywordCheck]);

  // entity type
  const [entityTypeRadio, setEntityTypeRadio] = useState(entityTypeList[0].value);
  const [openSpecificEntityDetail, setOpenSpecificEntityDetail] = useState(false);
  const [specificEntityCheck, setSpecificEntityCheck] = useState(new Set());
  const onChangeSpecificEntityCheck = useCallback((value) => {
    let newState = new Set(specificEntityCheck);

    if (newState.has(value)) {
      newState.delete(value);
    } else {
      newState.add(value);
    }

    setSpecificEntityCheck(newState);
  }, [specificEntityCheck]);

  // loading
  const [loadingKeywords, setLoadingKeywords] = useState(false);
  const [loadingDocuments, setLoadingDocuments] = useState(false);

  // result
  const [resultKeywords, setResultKeywords] = useState(null);
  const [resultDocuments, setResultDocuments] = useState(null);

  const onSumbit = useCallback((e) => {
    e.preventDefault();

    setResultKeywords(null);
    setResultDocuments(null);
    setLoadingKeywords(true);
    setLoadingDocuments(true);

    // 임시 테스트
    setTimeout(() => {
      setResultKeywords(tempEntitySearchKeywords);
      setLoadingKeywords(false);
    }, 2000);

    // 임시 테스트
    setTimeout(() => {
      setResultDocuments(tempEntitySearchDocuments);
      setLoadingDocuments(false);
    }, 4000);
  }, []);

  const [activeKeyword, setActiveKeyword] = useState('');

  // 처음 keyword active
  useEffect(() => {
    if (resultKeywords?.length > 0) {
      setActiveKeyword(resultKeywords[0]?.keyword);
    }
  }, [resultKeywords]);
  
  const onClickKeyword = useCallback((keyword) => {
    setActiveKeyword(keyword);
    setResultDocuments(null);
    setLoadingDocuments(true);

    // 임시 테스트
    setTimeout(() => {
      setResultDocuments(tempEntitySearchDocuments);
      setLoadingDocuments(false);
    }, 2000);
  }, []);

  return (
    <AppLayout className="common-layout entity-search-page">
      <form className="common-form" onSubmit={onSumbit}>
        <div className="common-inner">
          <div className="form-area">
            <div className="form-keyword">
              <input 
                type="text" 
                className="vinput full form-keyword-input" 
                value={keywordInput} 
                onChange={(e) => setKeywordInput(e.target.value)} 
                placeholder="Enter a keyword such as gene, protein, chemical-compound, disease, MeSH and so on to search for the most associated entities" 
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
                <label className="form-filter-label">Query type</label>
                <div className="form-filter-radio-row">
                  {keywordList.map((v, i) => (
                    <div key={i} className={`vradio form-filter-radio ${v.detail ? 'type-detail' : ''} ${(v.detail && openSpecificKeywordDetail) ? 'active-detail' : ''}`}>
                      <input 
                        type="radio" 
                        id={v.value} 
                        value={v.value} 
                        name="keyword" 
                        checked={v.value === keywordRadio ? true : false} 
                        onChange={(e) => setKeywordRadio(e.target.value)} 
                        onClick={() => {
                          if (v.value === 'keyword-specific') {
                            setOpenSpecificKeywordDetail(prev => !prev);
                          } else {
                            setOpenSpecificKeywordDetail(false);
                            setSpecificKeywordCheck(new Set());
                          }
                        }}
                      />
                      <label htmlFor={v.value}>{v.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              {openSpecificKeywordDetail && (
                <div className="form-filter-row">
                  <label className="form-filter-label">&nbsp;</label>
                  <div className="form-filter-check-row">
                    {specificKeywordList.map((v, i) => (
                      <div key={i} className="vcheck form-filter-check">
                        <input 
                          type="checkbox" 
                          id={v.value} 
                          name="specific-keyword"
                          checked={specificKeywordCheck.has(v.value) ? true : false} 
                          onChange={() => onChangeSpecificKeywordCheck(v.value)}
                        />
                        <label htmlFor={v.value}>{v.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                    <div className="form-filter-caution">
                      <RiErrorWarningLine size={16} />
                      <p>This setting can cause slowdown.</p>
                    </div>
                    <RangePicker className="form-filter-date-range" picker="month" />
                  </div>
                </div>
              )}
              <div className="form-filter-row">
                <label className="form-filter-label">Include</label>
                <input 
                  type="text" 
                  className="vinput form-filter-input" 
                  value={includeInput} 
                  onChange={(e) => setIncludeInput(e.target.value)} 
                  placeholder="Enter keywords separated by comma (means OR) which should be included" 
                />
              </div>
              <div className="form-filter-row">
                <label className="form-filter-label">&nbsp;</label>
                <div className="form-filter-radio-row">
                  {includeKeywordList.map((v, i) => (
                    <div key={i} className={`vradio form-filter-radio ${v.detail ? 'type-detail' : ''} ${(v.detail && openSpecificIncludeKeywordDetail) ? 'active-detail' : ''}`}>
                      <input 
                        type="radio" 
                        id={v.value} 
                        value={v.value} 
                        name="include-keyword" 
                        checked={v.value === includeKeywordRadio ? true : false} 
                        onChange={(e) => setIncludeKeywordRadio(e.target.value)} 
                        onClick={() => {
                          if (v.value === 'include-keyword-specific') {
                            setOpenSpecificIncludeKeywordDetail(prev => !prev);
                          } else {
                            setOpenSpecificIncludeKeywordDetail(false);
                            setSpecificIncludeKeywordCheck(new Set());
                          }
                        }}
                      />
                      <label htmlFor={v.value}>{v.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              {openSpecificIncludeKeywordDetail && (
                <div className="form-filter-row">
                  <label className="form-filter-label">&nbsp;</label>
                  <div className="form-filter-check-row">
                    {specificIncludeKeywordList.map((v, i) => (
                      <div key={i} className="vcheck form-filter-check">
                        <input 
                          type="checkbox" 
                          id={v.value} 
                          name="specific-include-keyword"
                          checked={specificIncludeKeywordCheck.has(v.value) ? true : false} 
                          onChange={() => onChangeSpecificIncludeKeywordCheck(v.value)}
                        />
                        <label htmlFor={v.value}>{v.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="form-filter-row">
                <label className="form-filter-label">Exclude</label>
                <input 
                  type="text" 
                  className="vinput form-filter-input" 
                  value={excludeInput} 
                  onChange={(e) => setExcludeInput(e.target.value)} 
                  placeholder="Enter keywords separated by comma (means OR) which should be excluded" 
                />
              </div>
              <div className="form-filter-row">
                <label className="form-filter-label">&nbsp;</label>
                <div className="form-filter-radio-row">
                  {excludeKeywordList.map((v, i) => (
                    <div key={i} className={`vradio form-filter-radio ${v.detail ? 'type-detail' : ''} ${(v.detail && openSpecificExcludeKeywordDetail) ? 'active-detail' : ''}`}>
                      <input 
                        type="radio" 
                        id={v.value} 
                        value={v.value} 
                        name="exclude-keyword" 
                        checked={v.value === excludeKeywordRadio ? true : false} 
                        onChange={(e) => setExcludeKeywordRadio(e.target.value)} 
                        onClick={() => {
                          if (v.value === 'exclude-keyword-specific') {
                            setOpenSpecificExcludeKeywordDetail(prev => !prev);
                          } else {
                            setOpenSpecificExcludeKeywordDetail(false);
                            setSpecificExcludeKeywordCheck(new Set());
                          }
                        }}
                      />
                      <label htmlFor={v.value}>{v.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              {openSpecificExcludeKeywordDetail && (
                <div className="form-filter-row">
                  <label className="form-filter-label">&nbsp;</label>
                  <div className="form-filter-check-row">
                    {specificExcludeKeywordList.map((v, i) => (
                      <div key={i} className="vcheck form-filter-check">
                        <input 
                          type="checkbox" 
                          id={v.value} 
                          name="specific-exclude-keyword"
                          checked={specificExcludeKeywordCheck.has(v.value) ? true : false} 
                          onChange={() => onChangeSpecificExcludeKeywordCheck(v.value)}
                        />
                        <label htmlFor={v.value}>{v.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="form-filter">
              <div className="form-filter-title">
                <p>Result Filter</p>
              </div>
              <div className="form-filter-row">
                <label className="form-filter-label">Entity Type</label>
                <div className="form-filter-radio-row">
                  {entityTypeList.map((v, i) => (
                    <div key={i} className={`vradio form-filter-radio ${v.detail ? 'type-detail' : ''} ${(v.detail && openSpecificEntityDetail) ? 'active-detail' : ''}`}>
                      <input 
                        type="radio" 
                        id={v.value} 
                        value={v.value} 
                        name="entity-type" 
                        checked={v.value === entityTypeRadio ? true : false} 
                        onChange={(e) => setEntityTypeRadio(e.target.value)} 
                        onClick={() => {
                          if (v.value === 'entity-type-specific') {
                            setOpenSpecificEntityDetail(prev => !prev);
                          } else {
                            setOpenSpecificEntityDetail(false);
                            setSpecificEntityCheck(new Set());
                          }
                        }}
                      />
                      <label htmlFor={v.value}>{v.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              {openSpecificEntityDetail && (
                <div className="form-filter-row">
                  <label className="form-filter-label">&nbsp;</label>
                  <div className="form-filter-check-row">
                    {specificEntityList.map((v, i) => (
                      <div key={i} className="vcheck form-filter-check">
                        <input 
                          type="checkbox" 
                          id={v.value} 
                          name="specific-entity"
                          checked={specificEntityCheck.has(v.value) ? true : false} 
                          onChange={() => onChangeSpecificEntityCheck(v.value)}
                        />
                        <label htmlFor={v.value}>{v.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="form-button-row">
              <button type="submit" className={`vbutton form-button-submit ${(loadingKeywords || loadingDocuments) ? 'loading' : ''}`}>Apply</button>
            </div>
          </div>
        </div>
      </form>
      <section className="common-result">
        <div className="common-inner">
          {(resultKeywords || resultDocuments) && (
            <div className="common-title">
              <p>{entityTypeRadio !== 'entity-type-none' ? 'Most Associated Entities' : 'Results'}</p>
            </div>
          )}
          <div className="result-area result-area1">
            {entityTypeRadio !== 'entity-type-none' && (
              <div className="result-col1">
                {loadingKeywords && <SkeletonItem line={3} />}
                {resultKeywords && (
                  <div className="result-table-wrap">
                    <table className="common-table result-table">
                      <colgroup>
                        <col width="" />
                        <col width="" />
                        <col width="" />
                      </colgroup>
                      <thead>
                        <tr className="text-center">
                          <th>Keywords</th>
                          <th>Freq</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resultKeywords?.length > 0 ? (
                          resultKeywords?.map((v, i) => (
                            <tr key={i} className={activeKeyword === v.keyword ? 'active' : ''} onClick={() => onClickKeyword(v.keyword)}>
                              <td>{v.keyword}</td>
                              <td className="text-right">{v.freq}</td>
                              <td className="text-center">{v.category}</td>
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
                  </div>
                )}
              </div>
            )}
            <div className={`result-col2 ${entityTypeRadio === 'entity-type-none' ? 'full' : ''}`}>
              {loadingDocuments && <SkeletonItem line={3} /> }
              {resultDocuments && (
                <div className="result-document">
                  <div className="result-document-title">
                    <p>Documents</p>
                  </div>
                  <ul className="common-document-list">
                    {resultDocuments?.length > 0 ? (
                      resultDocuments?.map((v, i) => (
                        <li key={i}>
                          <div className="list-title">
                            <a href={v.url} target="_blank" rel="noreferrer">{v.title}</a>
                          </div>
                          <ResultText text={v.text} />
                        </li>
                      ))
                    ) : (
                      <li>
                        <NoData />
                      </li>
                    )}
                  </ul>
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

export default EntitySearch;
