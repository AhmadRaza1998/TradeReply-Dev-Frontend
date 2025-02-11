import DashboardLayout from "@/Layouts/DashboardLayout";
import { Container } from "react-bootstrap";
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import CommonButton from "@/Components/UI/CommonButton";
import "@/css/dashboard/TradeManager.scss";

import {
  PlusIcon,
  SettingIcon,
  SolidRedArrowIcon
} from "@/Components/img/svgIcons/SvgIcon";
import Link from "next/link";

const TradeManager = () => {
  const entrylist = [
    { title: "Entry Date Ticker", text: "Draft 4" },
    { title: "Entry Date Ticker", text: "Draft 3" },
    { title: "Entry Date Ticker", text: "Draft 2" },
    { title: "Entry Date Ticker", text: "Draft 1" }
  ];

  const entrydata = [
    {
      tarde: "Trade 2",
      entrydate: "Entry Date",
      ticker: "Ticker",
      entryprice: "Entry Price",
      exitprice: "Exit Price",
      position: "Position",
      pl: "P&L$"
    },
    {
      tarde: "Trade 1",
      entrydate: "Entry Date",
      ticker: "Ticker",
      entryprice: "Entry Price",
      exitprice: "Exit Price",
      position: "Position",
      pl: "P&L$"
    }
  ];
  return (
    <DashboardLayout>
      <div className="trade_manager">
        <Container>
          <CommonHead />
          <div className="trade_head justify-content-center py-4">
            <AdminHeading heading="Trade Manager" className="" centered />
            <button className="setting_btn" type="button">
              <SettingIcon />
            </button>
          </div>
          <div className="trade_manager_btns d-sm-flex">
            <Link href="/user/trade-builder">
              <CommonButton
                title="Manual Trade"
                onlyIcon={<PlusIcon />}
                className="w-full mb-3 mb-sm-0 me-sm-2"
              />
            </Link>
            <Link href="/user/trade-importer">
              <CommonButton
                title="Import Trade"
                onlyIcon={<PlusIcon />}
                className="w-full ms-sm-2"
              />
            </Link>
          </div>
          <div className="trade_manager_entrylist">
            {entrylist.map((item, index) => (
              <Link href="/user/trade-builder">
                <div key={index} className="trade_manager_entrylist_box">
                  <h5>{item?.title}</h5>
                  <h5>{item?.text}</h5>
                </div>
              </Link>
            ))}
          </div>
          <div className="trade_manager_trade_entry">
            {entrydata.map((item, index) => (
              <Link href="/user/trade-builder">
                <div
                  key={index}
                  className={`trade_manager_trade_entry_box Redgrandient ${
                    index === 1 ? "greengrandient" : ""
                  }`}
                >
                  <span className="solidArrow red_arrow me-3">
                    <SolidRedArrowIcon />
                  </span>
                  <div className="d-flex trade_manager_trade_entry_box_headtext align-items-center w-100 justify-content-between">
                    <h5>{item?.tarde}</h5>
                    <h5>{item?.entrydate}</h5>
                    <h5>{item?.exiddate}</h5>
                    <h5>{item?.ticker}</h5>
                    <h5>{item?.entryprice}</h5>
                    <h5>{item?.exitprice}</h5>
                    <h5>{item?.position}</h5>
                    <h5>{item?.pl}</h5>
                  </div>
                  <span className="solidArrow red_arrow endArrow ms-3">
                    <SolidRedArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default TradeManager;
