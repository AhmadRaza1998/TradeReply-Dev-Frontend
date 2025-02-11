"use-client";

import { Col, Container, Row } from "react-bootstrap";
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import "@/css/dashboard/TradeCalculators.scss";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import { SolidInfoIcon } from "@/assets/svgIcons/SvgIcon";
import CommonTooltip from "@/Components/UI/CommonTooltip";
import DashboardLayout from "@/Layouts/DashboardLayout";

const TradeCalculators = () => {
    const riskdata = [
        {
            title: "1x (1:1)",
            text: "Not Profitable",
            text2: "Not Profitable",
            text3: "Not Profitable",
            text4: "Break Even",
            text5: "Profitable"
        },
        {
            title: "2x (2:1)",
            text: "Not Profitable",
            text2: "Not Profitable",
            text3: "Profitable",
            text4: "Profitable",
            text5: "Profitable"
        },
        {
            title: "3x (3:1)",
            text: "Not Profitable",
            text2: "Profitable",
            text3: "Profitable",
            text4: "Profitable",
            text5: "Profitable"
        },
        {
            title: "4x (5:1)",
            text: "Break Even",
            text2: "Profitable",
            text3: "Profitable",
            text4: "Profitable",
            text5: "Profitable"
        },
        {
            title: "5x (5:1)",
            text: "Profitable",
            text2: "Profitable",
            text3: "Profitable",
            text4: "Profitable",
            text5: "Profitable"
        }
    ];
    const TradeCalculatorsData = [
        { text: "ENTRY" },
        { text: "TARGET" },
        { text: "STOP LOSS" },
        { text: "TRADE TYPE" },
        { text: "RISK/REWARD" },
        { text: "AVAILABLE TO TRADE" },
        { text: "RISK PER SHARE" },
        { text: "PROFIT PER SHARE" }
    ];
    const TradeCalculatorsData1 = [
        { text: "$0.463" },
        { text: "$0.401" },
        { text: "$0.481" },
        { text: "SHORT" },
        { text: "3.4X" },
        { text: "$414.498" },
        { text: "$0.018" },
        { text: "$0.062" }
    ];
    const risksize = [
        {
            text: "1.21%",
            text2: "$5",
            text3: "$129",
            text4: "277.78",
            text5: "$17",
            text6: "$431.72"
        },
        {
            text: "2.42%",
            text2: "$10",
            text3: "$257",
            text4: "555.56",
            text5: "$34",
            text6: "$448.00"
        },
        {
            text: "4.83%",
            text2: "$20",
            text3: "$2514",
            text4: "1,111.11",
            text5: "$69",
            text6: "$483.00"
        }
    ];
    return (
        <>
            <DashboardLayout>
                <div className="trade_calculators">
                    <Container>
                        <CommonHead />
                        <div className="trade_head justify-content-center mb-0 py-4">
                            <AdminHeading heading="Trading Calculators" centered />
                            {/* <button className="setting_btn" type="button"><SettingIcon /></button> */}
                        </div>
                        <Row>
                            <Col xs={12} lg={7}>
                                <div className="trade_calculators_card">
                                    <div className="trade_head justify-content-center mb-0 py-3 pb-4">
                                        <h6>Risk / Reward calculator</h6>
                                        <CommonTooltip
                                            className="CustomTooltip"
                                            content="Lorem Ipsum is simply dummy text of the printing."
                                            position="top-left"
                                        >
                                            <SolidInfoIcon />
                                        </CommonTooltip>
                                    </div>
                                    <div className="trade_calculators_card_risk">
                                        <div className="mob_winrate text-center">
                                            <h5>Win Rate</h5>
                                        </div>
                                        <ul className="risk_thead">
                                            <li>
                                                <span className="risk_text">Risk/Reward</span>{" "}
                                                <span className="rr_text">R:R</span>
                                            </li>
                                            <li>
                                                20% <span className="win_R">(Win Rate)</span>
                                            </li>
                                            <li>
                                                30% <span className="win_R">(Win Rate)</span>
                                            </li>
                                            <li>
                                                40% <span className="win_R">(Win Rate)</span>
                                            </li>
                                            <li>
                                                50% <span className="win_R">(Win Rate)</span>
                                            </li>
                                            <li>
                                                60% <span className="win_R">(Win Rate)</span>
                                            </li>
                                        </ul>
                                        <div className="risk_tboday">
                                            {riskdata.map((item, index) => (
                                                <ul key={index}>
                                                    <li>{item.title}</li>
                                                    <li>
                                                        <h6 className={`${item.text === "Profitable" ? "greenlight_text" : ""} ${item.text === "Not Profitable" ? "redlight_text" : ""} ${item.text === "Break Even" ? "yellowlight_text" : ""}`}>
                                                            <span>{item.text}</span>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            className={`
                                                        ${item.text2 ===
                                                                    "Profitable"
                                                                    ? "greenlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text2 ===
                                                                    "Not Profitable"
                                                                    ? "redlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text2 ===
                                                                    "Break Even"
                                                                    ? "yellowlight_text"
                                                                    : ""
                                                                }
                                                    `}
                                                        >
                                                            <span>{item.text2}</span>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            className={`
                                                        ${item.text3 ===
                                                                    "Profitable"
                                                                    ? "greenlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text3 ===
                                                                    "Not Profitable"
                                                                    ? "redlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text3 ===
                                                                    "Break Even"
                                                                    ? "yellowlight_text"
                                                                    : ""
                                                                }
                                                    `}
                                                        >
                                                            <span>{item.text3}</span>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            className={`
                                                        ${item.text4 ===
                                                                    "Profitable"
                                                                    ? "greenlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text4 ===
                                                                    "Not Profitable"
                                                                    ? "redlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text4 ===
                                                                    "Break Even"
                                                                    ? "yellowlight_text"
                                                                    : ""
                                                                }
                                                    `}
                                                        >
                                                            <span>{item.text4}</span>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                        <h6
                                                            className={`
                                                        ${item.text5 ===
                                                                    "Profitable"
                                                                    ? "greenlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text5 ===
                                                                    "Not Profitable"
                                                                    ? "redlight_text"
                                                                    : ""
                                                                } 
                                                        ${item.text5 ===
                                                                    "Break Even"
                                                                    ? "yellowlight_text"
                                                                    : ""
                                                                }
                                                    `}
                                                        >
                                                            <span>{item.text5}</span>
                                                        </h6>
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>
                                        <div className="risktext  mt-1">
                                            <h5 className="red_text">
                                                <span className="red_bg"></span> Not Profitable
                                            </h5>
                                            <h5 className="yellowlight_text">
                                                <span className="yellow_bg"></span> Break Even
                                            </h5>
                                            <h5 className="greenlight_text">
                                                <span className="green_bg"></span> Profitable
                                            </h5>
                                        </div>
                                        <h6 className="mt-2">
                                            Notes: 5x means you win 5x more than you lose. Your reward
                                            is 5X greater than your risk.
                                        </h6>
                                    </div>
                                </div>
                                <div className="trade_calculators_card mt-20">
                                    <div className="trade_head justify-content-center mb-0 py-3 pb-4">
                                        <h6>Trade calculator</h6>
                                        <CommonTooltip
                                            className="CustomTooltip"
                                            content="Lorem Ipsum is simply dummy text of the printing."
                                            position="top-left"
                                        >
                                            <SolidInfoIcon />
                                        </CommonTooltip>
                                    </div>
                                    <Row className="trade_calculators_card_tradecal gx-2 gx-md-3">
                                        <Col xs={7} md={6}>
                                            {TradeCalculatorsData.map((item, index) => (
                                                <div
                                                    className="trade_calculators_card_tradecal_tradebox"
                                                    key={index}
                                                >
                                                    <h6>{item.text}</h6>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col xs={5} md={6}>
                                            {TradeCalculatorsData1.map((item, index) => (
                                                <div
                                                    className={`trade_calculators_card_tradecal_tradebox1 
                                                ${item.text === "3.4X"
                                                            ? "green_bg"
                                                            : ""
                                                        } 
                                                ${item.text === "SHORT"
                                                            ? "whitelight_bg"
                                                            : ""
                                                        } 
                                                ${item.text === "$0.018"
                                                            ? "whitelight_bg"
                                                            : ""
                                                        } 
                                                ${item.text === "$0.062"
                                                            ? "whitelight_bg"
                                                            : ""
                                                        }`}
                                                    key={index}
                                                >
                                                    <h6>{item.text}</h6>
                                                </div>
                                            ))}
                                        </Col>
                                    </Row>
                                    <div className="trade_calculators_card_divider"></div>
                                    <div className="trade_head justify-content-center mb-0 py-3 pb-4">
                                        <h6>Position Size</h6>
                                        <CommonTooltip
                                            className="CustomTooltip"
                                            content="Lorem Ipsum is simply dummy text of the printing."
                                            position="top-left"
                                        >
                                            <SolidInfoIcon />
                                        </CommonTooltip>
                                    </div>
                                    <div className="trade_calculators_card_risk position_size">
                                        <ul className="risk_thead">
                                            <li>
                                                <h6>RISK %</h6>
                                            </li>
                                            <li>
                                                <h6>RISK $</h6>
                                            </li>
                                            <li>
                                                <h6>POSITION</h6>
                                            </li>
                                            <li>
                                                <h6>QTY</h6>
                                            </li>
                                            <li>
                                                <h6>PROFIT</h6>
                                            </li>
                                            <li>
                                                <h6>EST.ACT VAL</h6>
                                            </li>
                                        </ul>
                                        <div className="risk_tboday">
                                            {risksize.map((item, index) => (
                                                <ul key={index}>
                                                    <li>
                                                        <h6>{item.text}</h6>
                                                    </li>
                                                    <li>
                                                        <h6>{item.text2}</h6>
                                                    </li>
                                                    <li>
                                                        <h6>{item.text3}</h6>
                                                    </li>
                                                    <li>
                                                        <h6>{item.text4}</h6>
                                                    </li>
                                                    <li>
                                                        <h6>{item.text5}</h6>
                                                    </li>
                                                    <li>
                                                        <h6>{item.text6}</h6>
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg={5} className="mt-4 mt-lg-0">
                                <div className="trade_calculators_card">
                                    <div className="trade_head justify-content-center mb-0 py-3 pb-4">
                                        <h6>Percentage Increase Calculator</h6>
                                        <CommonTooltip
                                            className="CustomTooltip"
                                            content="Lorem Ipsum is simply dummy text of the printing."
                                            position="top-left"
                                        >
                                            <SolidInfoIcon />
                                        </CommonTooltip>
                                    </div>
                                    <Row className="gx-2 gx-xl-3">
                                        <Col xs={6} lg={6}>
                                            <div className="tradeacct">
                                                <h6>Start Value</h6>
                                                <p>$0.00</p>
                                            </div>
                                        </Col>
                                        <Col xs={6} lg={6}>
                                            <div className="tradeacct">
                                                <h6>Final Value</h6>
                                                <p>$0.00</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-10">
                                            <div className="tradeacct value_change">
                                                <h6>% Change</h6>
                                                <p>$0.00</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="trade_calculators_card mt-20">
                                    <div className="trade_head justify-content-center mb-0 py-3 pb-4">
                                        <h6>Daily Compound interest calculator</h6>
                                        <CommonTooltip
                                            className="CustomTooltip"
                                            content="Lorem Ipsum is simply dummy text of the printing."
                                            position="top-left"
                                        >
                                            <SolidInfoIcon />
                                        </CommonTooltip>
                                    </div>
                                    <Row className="gx-2 gx-xl-3">
                                        <Col xs={4}>
                                            <div className="tradeacct">
                                                <h6>Account Size</h6>
                                                <p>$1,000</p>
                                            </div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="tradeacct">
                                                <h6>Day</h6>
                                                <p>365</p>
                                            </div>
                                        </Col>
                                        <Col xs={4}>
                                            <div className="tradeacct">
                                                <h6>Interest</h6>
                                                <p>2.00%</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-10">
                                            <div className="tradeacct value_change">
                                                <h6>Compouded Account Size</h6>
                                                <p>$1,377,408.29</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </DashboardLayout>
        </>
    );
};

export default TradeCalculators;
