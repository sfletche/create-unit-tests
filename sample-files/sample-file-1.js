import numeral from 'numeral';
import moment from 'moment';
import * as _ from 'lodash';

function stripValue(value) {
  return value ? value.toString().replace(/[,$]/g, '') : value;
}

function formatValue(value, format) {
  if (value === undefined || isNaN(stripValue(value))) { return; }

  return numeral(Number(stripValue(value))).format(format);
}

function toDate(date) {
  return date && moment.utc(date).toDate();
}

function getFormattedCurrency(value, format = '$0,0') {
  return formatValue(value, format);
}

function formatDate(date, format = 'M-D-YY') {
  return moment(date).format(format);
}

function getFormattedPercent(value, format = '0.00%') {
  return formatValue(value, format);
}

function isValidDate(date) {
  return date ? moment(date).isValid() : false;
}

export {
  getFormattedCurrency,
  formatDate,
  getFormattedPercent,
  toDate,
  isValidDate,
};
