import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p>Statistic</p>
      <ul className="list-feedback">
        <li>Good {good}</li>
        <li>Neutral {neutral}</li>
        <li>Bad {bad}</li>
        <li>Total {total} </li>
        <li>Positive feedback: {total !== 0 ? positivePercentage : 0}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
