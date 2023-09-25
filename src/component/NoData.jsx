import { RiFileCloseLine } from 'react-icons/ri';

const NoData = () => {
  return (
    <div className="common-no-data">
      <div className="data-content">
        <p>No Data</p>
        <RiFileCloseLine size={18} />
      </div>
    </div>
  );
};

export default NoData;