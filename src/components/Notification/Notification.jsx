import { NotificationStyled } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <NotificationStyled>
      <p>{message}</p>
    </NotificationStyled>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
