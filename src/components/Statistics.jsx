import React from 'react';
import PropTypes from 'prop-types';
import { ContainerStat } from './Components.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ContainerStat>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </ContainerStat>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
