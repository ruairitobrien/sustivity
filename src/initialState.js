import moment from 'moment';

const initialState = {
  currentJournalEntry: {
    productivityLevel: 1,
    stressLevel: 1,
    date: moment().format('MMM Do YYYY')
  },
  journalEntries: {}
};

export default initialState;
