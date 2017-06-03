import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  DEFAULT,
  SELECTED,
  DISABLED,
} from '../constants/timeslot.js';

export default class Timeslot extends React.Component {
  render() {
    const {
      description,
      status,
      onClick,
    } = this.props;

    const timeslotClassNames = classnames({
      'tsc-timeslot': true,
      'tsc-timeslot--selected': status == SELECTED,
      'tsc-timeslot--disabled': status == DISABLED,
    });

    return (
      <div className = { timeslotClassNames } onClick = { onClick }>
        { description }
      </div>
    );
  }
}

Timeslot.defaultProps = {
  status: DEFAULT,
};

/**
 * @type {String} description: The contents to be displayed by the timeslot. Default format will resume to something similar to "7:00 PM - 8:00 PM"
 * @type {String} status: allows the div to change format based on the current status of the element (disabled, selected, default)
 * @type (Function) onClick: Function to be excecuted when clicked.
 */
Timeslot.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.oneOf([
    DEFAULT,
    SELECTED,
    DISABLED,
  ]),
  onClick: PropTypes.func.isRequired,
};