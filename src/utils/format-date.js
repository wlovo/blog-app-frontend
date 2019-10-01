import moment from 'moment';

const formatDate = (date) => moment(date).format('MMM DD, YYYY') || moment();

export default formatDate;