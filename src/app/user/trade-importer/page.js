'use client';

import { Col, Container, Row } from "react-bootstrap" 
import { CheckIcon, GreyCrossIcon, PlusIcon, RedInfoIcon, SolidRedArrowIcon } from "@/assets/svgIcons/SvgIcon"
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import CommonButton from "@/Components/UI/CommonButton";  
import DashboardLayout from "@/Layouts/DashboardLayout"; 
import "@/css/dashboard/TradeImporter.scss"
import "@/css/dashboard/TradeManager.scss"

const TradeImporter = () => {
    const entrydata = [
        { tarde: "Import 4", entrydate: "Entry Date", entryprice: "Entry Price", pl: "P&L$" },
        { tarde: "Import 3", entrydate: "Entry Date", entryprice: "Entry Price", pl: "P&L$" },
        { tarde: "Import 2", entrydate: "Entry Date", entryprice: "Entry Price", pl: "P&L$" },
        { tarde: "Import 1", entrydate: "Entry Date", entryprice: "Entry Price", pl: "P&L$" },
    ];
    return (
        <>
        <DashboardLayout>
        <div className="trade_manager trade_importer">
                <Container>
                    <CommonHead />
                    <Row className="trade_head mb-0 align-items-center pt-4 pb-4">
                        <Col md={4} xs={12}>
                            <div className="trade_head_title">
                                <h4>Import Draft 1</h4>
                                <div className="head_draft">
                                {/* <p><RedInfoIcon /> Auto-not-saved</p> */}
                                    <p><CheckIcon /> Auto-saved</p>
                                    <p><GreyCrossIcon /> Unable to save, retrying</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} xs={12}>
                            <AdminHeading heading="Trade Importer" centered />
                        </Col>
                        <Col md={4} xs={12}>
                            <div className="trade_head_btns d-sm-flex">
                                <CommonButton title="Delete" className="red-btn me-2" />
                                <CommonButton title="Publish" className="green-btn" />
                                {/* <CommonButton title="Save Draft" className="" /> */}
                            </div>
                        </Col>
                    </Row>
                    <div className="trade_manager_btns">
                        <CommonButton title="Import Trades" onlyIcon={<PlusIcon />} className="w-100" />
                    </div>                   

                    <div className="trade_importer_card greengrandientbg mt-30">
                        <div className="trade_importer_card_head mt-10 pb-10">
                            <AdminHeading heading="Import Status" centered />
                        </div>
                        <div className="trade_importer_card_message text-center">
                            <h4>4 Trades Imported Sucesfully</h4>
                            <h4>0 Trades with Errors</h4>
                        </div>
                        <div className="trade_manager_trade_entry mt-30">
                            {entrydata.map((item, index) => (
                                <div key={index} className={`trade_manager_trade_entry_box Redgrandient ${index === 1 ? "greengrandient" : index === 3 ? "greengrandient" : ""}`}>
                                    <span className="solidArrow red_arrow me-3"><SolidRedArrowIcon /></span>
                                    <div className="w-100 d-flex flex-wrap justify-content-between">
                                        <h5>{item?.tarde}</h5>
                                        <h5>{item?.entrydate}</h5>
                                        <h5>{item?.entryprice}</h5>
                                        <h5>{item?.pl}</h5>
                                    </div>
                                    <span className="solidArrow red_arrow endArrow ms-3"><SolidRedArrowIcon /></span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="trade_manager_btns my-3">
                        <CommonButton title="Submit correction file" onlyIcon={<PlusIcon />} className="w-100" />
                    </div>
                    <div className="trade_manager_btns my-30">
                        <CommonButton title="download csv with errors" className="w-100" />
                    </div>
                    <div className="trade_importer_card redgrandientbg mt-30">
                        <div className="trade_importer_card_head mt-10 pb-10">
                            <AdminHeading heading="Import Status" centered />
                        </div>
                        <div className="trade_importer_card_message message_redbg text-center">
                            <h4>3 Trades Imported Sucesfully</h4>
                            <h4>1 Trades with Errors</h4>
                        </div>
                        <div className="trade_importer_card_head my-10">
                            <AdminHeading heading="Errors" centered />
                        </div>
                        <div className="trade_importer_card_message message_redbg text-center">
                            <h4>Import 3 (Row 4) - Cell D4 ( Exit Price ) : Missing</h4>
                            <h4>1 Trade with Errors</h4>
                        </div>
                        <div className="trade_manager_trade_entry">
                            {entrydata.map((item, index) => (
                                <div key={index} className={`trade_manager_trade_entry_box  ${index === 1 ? "bluedark_bg" : index === 3 ? "greengrandient" : index === 3 ? "greengrandient" : "Redgrandient"}`}>
                                    <span className={`solidArrow red_arrow me-3 ${index === 1 ? "infoIcon" : ""}`}>{index === 1 ? <RedInfoIcon /> : <SolidRedArrowIcon />}</span>
                                    <div className="w-100 d-flex flex-wrap justify-content-between">
                                        <h5>{item?.tarde}</h5>
                                        <h5>{item?.entrydate}</h5>
                                        <h5>{item?.entryprice}</h5>
                                        <h5>{item?.pl}</h5>
                                    </div>
                                    <span className={`solidArrow red_arrow endArrow ms-3 ${index === 1 ? "opacity-0" : ""}`}><SolidRedArrowIcon /></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </DashboardLayout>
         
        </>
    )
}

export default TradeImporter