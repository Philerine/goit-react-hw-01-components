import PropTypes from 'prop-types';
import { Item, Label, Percentage } from '../Statistics.styled';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <Item style={{ backgroundColor: `${getRandomHexColor()}` }}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </Item>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor((0.5 + Math.random()/40) * 16777215).toString(16)}`;
}