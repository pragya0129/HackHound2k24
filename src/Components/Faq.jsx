import React from "react";
import "./Faq.css";
const Faq = () => {
  return (
    <div>
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-heading">Frequently asked questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">
                  How much does it cost to participate?
                </h3>
                <p className="faq-answer">
                  Nothing, participation in HackHound is absolutely FREE!
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">
                  What is the venue for the event?
                </h3>
                <p className="faq-answer">
                  The offline hackathon will be held in SRM Institute of Science
                  and Technology, Modinagar, Ghaziabad. Other details will be
                  shared with you via email.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">
                  Who can participate? Do any prerequisites or skills required
                  to exist?
                </h3>
                <p className="faq-answer">
                  Participation in this event is open to everyone. The only
                  prerequisites are excitement and motivation. It’s a
                  beginner-friendly hackathon. We are encouraging beginners to
                  begin their coding journey with us. But having coding and
                  programming experience is a significant benefit.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">
                  What are the rules on the Team Size?
                </h3>
                <p className="faq-answer">
                  A team can have at most 6 members so you can participate as a
                  team but that’s your choice. The minimum number of
                  participants a team should have is 3.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">Will there be food?</h3>
                <p className="faq-answer">
                  Yes, you will be provided with meals. We don’t want to keep
                  our hackers on empty stomachs. And we know the importance of
                  caffeine to keep on with the code hiking so a lot of coffee
                  will also be available for our hackers.
                </p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-content">
                <h3 className="faq-question">What should I bring along?</h3>
                <p className="faq-answer">
                  Kindly bring along a water bottle, some comfortable clothes,
                  your laptops, your chargers, and all the gadgets you will need
                  to hack. Optionally, you can also bring extension cords.
                </p>
              </div>
            </div>

            {/* Other FAQ items */}
          </div>
          <p className="morequeries">
            <b>Note: </b>If you have any remaining doubts, please feel free to raise a ticket regarding your query on our Discord channel, and we will resolve it as soon as possible
          </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
