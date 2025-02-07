'use client';

import Link from 'next/link';
import { Col, Container, Row } from "react-bootstrap";
import CommonSearch from "@/Components/UI/CommonSearch";
import CommonButton from "@/Components/UI/CommonButton";
import CustomPagination from "@/Components/UI/CustomPagination";
import HomeLayout from "@/Layouts/HomeLayout"; 
import "@/css/Home/Education.scss";  

const Education = () => {
  const termdata = [
    {
      id : 1,
      title: "Asset Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 2,
      title: "Ticker/Symbol",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 3,
      title: "Order Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 4,
      title: "Stop loss",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 5,
      title: "Asset Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 6,
      title: "Ticker/Symbol",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 7,
      title: "Order Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 8,
      title: "Stop loss",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 9,
      title: "Asset Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 10,
      title: "Ticker/Symbol",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 11,
      title: "Order Type",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
    {
      id : 12,
      title: "Stop loss",
      text: "The Bitcoin halving has significantly impacted big banks by intensifying their focus on the cryptocurrency market, recognizing its potential to disrupt traditional financial systems. This periodic reduction in Bitcoin supply has driven",
    },
  ];

  return (
    <HomeLayout>
      <div className="education_layout">
        <div className="education py-100">
          <Container>
            <div className="education_heading text-center">
              <h1>TradeReply Education Center</h1>
              <p>
                Your go-to resource for understanding key financial terms and
                concepts.
              </p>

              <div className="education_search">
                <CommonSearch
                  placeholder="Explore Key Terms & Insights"
                  icon={true}
                />
              </div>
            </div>
            <div className="education_fliters">
              <div className="education_fliters_boxadd">
                <h6>Filter:</h6>
              </div>
            </div>

            <div className="education_term">
              <Row className="mb-3 education_term_head">
                <Col md={3} lg={2} className="d-none d-md-block">
                  <h4>Term</h4>
                </Col>
                <Col md={6} lg={8} className="d-none d-md-block">
                  <h4>Summary</h4>
                </Col>
                <Col xs={12} md={3} lg={2}>
                  <div className="education_pagination">
                    <CustomPagination />
                  </div>
                </Col>
              </Row>
              <div>
                {termdata?.map((item, index) => { 
                  return (
                    <Row
                      key={index}
                      className="education_term_list align-items-center"
                    >
                      <Col xs={6} md={3} lg={2}>
                        <h6>{item.title}</h6>
                      </Col>
                      <Col xs={6} md={3} lg={2} className="order-md-last">
                        <div className="text-end">

                        <Link href={`/education/${item?.id}`}>
                            <CommonButton
                                type="button"
                                title="Read More"
                                className="read_more_button"
                            />
                        </Link>
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={8}>
                        <p>{item.text}</p>
                      </Col>
                    </Row>
                  );
                })}
              </div>
              <div className="education_pagination mt-4">
                <CustomPagination />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Education;
