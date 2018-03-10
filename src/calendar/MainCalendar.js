import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Event from './EventContainer';

BigCalendar.momentLocalizer(moment);

const MainCalendar = ({events, selectCalendarEntry}) => {
  let components = {
    event: Event
  };
  return (
      <BigCalendar
        events={events}
        defaultDate={new Date()}
        views={['month']}
        popup={true}
        startAccessor='when'
        endAccessor='when'
        onSelectEvent={selectCalendarEntry}
        components={components}
      />
  );
};

MainCalendar.propTypes = {
  events: PropTypes.array.isRequired,
  selectCalendarEntry: PropTypes.func.isRequired
};

export default MainCalendar;
