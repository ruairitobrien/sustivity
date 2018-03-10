import moment from 'moment';

const initialState = {
  currentJournalEntry: {
    title: null,
    productivityLevel: 1,
    stressLevel: 1,
    date: moment().format('MMM Do YYYY'),
    workProportion: {
      work: 0.5,
      wasted: 0.5,
      focused: 0.5,
      unfocused: 0.5
    },
    notes: null
  },
  journalEntries: {},
  user: null
};

export default initialState;
