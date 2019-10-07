import moment from 'moment';

/**
 * Formats a given date to the MMM DD, YYYY format. (e.g. Dec 20, 2019)
 * @param {string|Date|moment} date the date to be formatted
 */
const formatDate = (date) => moment(date).format('MMM DD, YYYY') || moment();

export default formatDate;
