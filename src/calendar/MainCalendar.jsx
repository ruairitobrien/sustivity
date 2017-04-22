import React from 'react';
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
        startAccessor='start'
        endAccessor='end'
        onSelectEvent={selectCalendarEntry}
        components={components}
      />
  );
};

MainCalendar.propTypes = {
  events: React.PropTypes.array.isRequired,
  selectCalendarEntry: React.PropTypes.func.isRequired
};

export default MainCalendar;
