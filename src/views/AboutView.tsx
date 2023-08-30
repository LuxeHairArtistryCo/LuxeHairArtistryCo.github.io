import { ReactNode } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";

type PropTypes = {
  children?: ReactNode;
};

function AboutView({ children }: PropTypes) {
  return (
    <div className="about-container">
      <HelmetProvider>
        <Helmet>
          <title>About - Luxe Hair Artistry Co</title>
          <meta
            property="og:title"
            content="About - Luxe Hair Artistry Co Hair Salon Nair Aesthetician"
          />
        </Helmet>
      </HelmetProvider>
      <div className="container d-flex flex-column px-3 my-4">
        <h1>About Us</h1>

        <h3>Policies</h3>
        <h5>Age Requirements</h5>
        <p className="mx-3 pt-3">
          We love helping people of all ages feel their best, and welcome
          everyone from children to seniors in to the studio. We do ask that if
          you have a child under the age of 13, you stay present to supervise
          them when in the salon. In this environment, unruly behaviour can not
          only be dangerous for the child, but also our valued clients and team
          of artists. With everyone’s safety in mind, we reserve the right to
          refuse service.
        </p>

        <h5>Late Policy</h5>
        <p className="mx-3 pt-3">
          Life can be busy – and we know that sometimes, things don’t always go
          according to plan. Because of this, we allow a ten-minute grace period
          at the start of your appointment. If you are over ten minutes late for
          your scheduled appointment, your artist will do their best to complete
          the service within the time that has been allocated for your
          appointment. If your appointment cannot be completed in the remaining
          time you are booked for, your artist will work with you to reschedule
          the appointment for the earliest mutually-agreeable time.
        </p>

        <h5>No-Show Policy</h5>
        <p className="mx-3 pt-3">
          We understand that on occasion life brings surprises that can prevent
          you from giving 24 hours’ notice of cancellation prior to your
          appointment. In keeping with that understanding, we do offer
          first-time forgiveness for “no-show,” appointments. However, after two
          failures to arrive for your appointment, we reserve the right to
          refuse service of upcoming appointments.
        </p>

        <h5>Redesign/Refund Policy</h5>
        <p className="mx-3 pt-3">
          While we love to make our clients happy, we do acknowledge that we are
          all human – and sometimes we might miss the mark. If you are
          unsatisfied with your results, we ask that you please speak directly
          with the artist who performed your service to come to a resolution. In
          the appropriate circumstances, we are happy to offer a complimentary
          redesign within 7 days of your initial appointment, but do not offer
          refunds.
        </p>

        <h5>Abusive/Harassing/Threatening Behaviour</h5>
        <p className="mx-3 pt-3">
          We value our team of artists just as much as we value our clients.
          Abusive, harassing, or otherwise threatening behaviour towards our
          staff will not be tolerated. Any such behaviour will result in
          immediate dismissal from the studio, and may escalate to legal action.
        </p>

        {children}
      </div>
    </div>
  );
}

export default AboutView;
