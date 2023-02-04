import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="" className={s.filter__label}>
    Знайти контакт
    <input
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
      required
    />
  </label>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
