import React from 'react';
import styles from './Events.module.css';
import EventHeader from '../../components/EventPageComponents/EventHeader/EventHeader';
import FooterOurPartner from '../../components/EventPageComponents/FooterOurPartner/FooterOurPartner';
import Testimonial from '../../components/EventPageComponents/Testimonial/Testimonial';
import TestimonialData from '../../DataFiles/TestimonialData';
// import EventNumber from '../../components/EventPageComponents/EventNumber/EventNumber';
import UpcomingEvent from '../../components/EventPageComponents/upcomingEvents/UpcomingEvent';

function Events() {
  return (
    <div>
      <EventHeader />
      <UpcomingEvent/>
      {/* <EventNumber/> */}
      <div className={styles.TestimonialData}>
        {TestimonialData.map((test, index) => (
          <Testimonial
            key={index}
            heading={test.heading}
            description={test.description}
            para={test.para}
          />
        ))}
      </div>
      <FooterOurPartner />
    </div>
  );
}

export default Events;
