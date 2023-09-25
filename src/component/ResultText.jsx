import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowDownSLine } from 'react-icons/ri';

const lineHeight = 14 * 1.5;
const cutLine = 2;

const ResultText = ({ text }) => {
  const textRef = useRef(null);

  // 초기 height 저장
  const [mounted, setMounted] = useState(false);
  const [defaultHeight, setDefaultHeight] = useState(0);
  useEffect(() => {
    if (!mounted) {
      setDefaultHeight(textRef?.current?.clientHeight);
      setMounted(true);
    }
  }, [mounted, textRef]);

  // cut 여부 체크
  const [textCut, setTextCut] = useState(false);
  useEffect(() => {
    if (defaultHeight > lineHeight * cutLine) {
      setTextCut(true);
    }

    return () => {
      setTextCut(false);
    }
  }, [defaultHeight]);

  // 오픈 여부
  const [openText, setOpenText] = useState(false);

  return (
    <div className={`list-text ${textCut ? 'cut-toggle' : ''} ${(textCut && openText) ? 'open' : ''}`}>
      <p ref={textRef}>{text}</p>
      {textCut && (
        <button type="button" className="list-text-button-more" onClick={() => setOpenText(prev => !prev)}>
          <RiArrowDownSLine className="more-icon" size={18} />
        </button>
      )}
    </div>
  );
};

ResultText.propTypes = {
  text: PropTypes.string,
};

export default ResultText;
