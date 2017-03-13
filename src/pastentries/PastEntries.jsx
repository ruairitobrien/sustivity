import React, {PropTypes} from "react";

class PastEntries extends React.Component {

  componentWillMount() {
    this.props.getAllJournalEntries(this.props.user.uid);
  }

  render() {
    console.log(this.props.journalEntries);

    return (
      <div>{JSON.stringify(this.props.journalEntries, null, 4)}</div>
    )
  }
}

PastEntries.propTypes = {
  user: PropTypes.object.isRequired,
  journalEntries: PropTypes.object.isRequired,
  getAllJournalEntries: PropTypes.func.isRequired
};

export default PastEntries;
