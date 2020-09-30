import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((ex) => {
      const createdAtMoment = moment(ex.createdAt);
      const validText = ex.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const validStartDate = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const validEndDate = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      return validText && validStartDate && validEndDate;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
