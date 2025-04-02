import styles from './grid.module.css';

const MAX_LENGTH = 5;

const Grid = ({ data }) => {
  return (
    <div>
      {Array(MAX_LENGTH)
        .fill(0)
        .map((outer, outerInd) => (
          <div className={styles.row}>
            {Array(MAX_LENGTH)
              .fill(0)
              .map((inner, innerInd) => (
                <div className={styles.gridBox}>{data[outerInd]?.[innerInd] || 'u'}</div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default Grid;
