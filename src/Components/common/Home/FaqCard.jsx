import { Accordion } from "react-bootstrap";
import CommonHeading from "@/Components/UI/CommonHeading";
import "../../../css/Home/FaqCard.scss";

const FaqCard = () => {
  const Questions = [
    {
      id: 1,
      heading: "Is the free version really free forever?",
      description:
        "Yes! Our Free Plan gives you access to basic analytics tools with no time limit and no credit card required. You can use it forever without worrying about forced upgrades."
    },
    {
      id: 2,
      heading: "Can I cancel my subscription anytime?",
      description:
        "Yes! You can cancel your paid subscription at any time through Account Settings. If you cancel, you’ll keep access to your current plan’s features until the end of your billing cycle, after which your account will switch to the Free Plan."
    },
    {
      id: 3,
      heading: "How can I pay for my subscription?",
      description: "We offer two options when subscribing to a paid plan:",
      items: [
        {
          id: 1,
          title: "Pay Now →",
          details:
            "Charges you the full cost of the selected plan immediately, starting your subscription right away."
        },
        {
          id: 2,
          title: "Try Free for 30 Days →",
          details:
            "Starts a 30-day free trial with $0 cost. After the trial, your subscription automatically renews at the full cost of the selected plan unless canceled before the trial ends."
        }
      ]
    },
    {
      id: 4,
      heading: "What is your refund policy?",
      items: [
        {
          id: 1,
          title: "Annual Plans →",
          details: "Full refund if canceled within 14 days of purchase."
        },
        {
          id: 2,
          title: "Monthly Plans →",
          details:
            "Non-refundable, but exceptions may be considered in special cases."
        },
        {
          id: 3,
          title: "Free Trial →",
          details:
            "If you cancel before the 30-day trial ends, you won’t be charged. If you downgrade during the trial, the change will take effect at the end of the trial period."
        }
      ]
    },
    {
      id: 5,
      heading: "How can I upgrade or downgrade my subscription?",
      items: [
        {
          id: 1,
          title: "Upgrades",
          details:
            "take effect immediately, and you’ll be charged a prorated amount for the new plan."
        },
        {
          id: 2,
          title: "Downgrades",
          details:
            "take effect at the end of your billing cycle or, if you're on a free trial, at the end of the trial period."
        }
      ]
    }
  ];

  return (
    <>
      <div className="faq_card">
        <CommonHeading heading="Frequently Asked Questions" />
        <div className="faq_card_accordion">
          <Accordion defaultActiveKey="0">
            {Questions?.map((ques) => (
              <Accordion.Item eventKey={ques.id} key={ques?.id}>
                <Accordion.Header>{ques?.heading}</Accordion.Header>
                <Accordion.Body>
                  <p> {ques?.description ? ques?.description : ""} </p>
                  {ques?.items ? (
                    <ul className="faq_list">
                      {ques?.items.map((item) => (
                        <li key={item?.id}>
                          <strong> {item?.title} </strong> {item?.details}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqCard;
