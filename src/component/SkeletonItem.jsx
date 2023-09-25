import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonItem = ({ height = 100, line = 1 }) => {
  return (
    <SkeletonTheme height={height} borderRadius={8} baseColor="#DFE3E8" highlightColor="#F9FAFB">
      {Array(line).fill('').map((v, i) => <Skeleton key={i} style={{ marginBottom: 10 }}/>)}
    </SkeletonTheme>
  );
};

SkeletonItem.propTypes = {
  height: PropTypes.number,
  line: PropTypes.number,
};

export default SkeletonItem;