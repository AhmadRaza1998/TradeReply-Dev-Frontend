"use client";

import { Container } from "react-bootstrap";
import { PlusIcon } from "@/assets/svgIcons/SvgIcon";
import CommonButton from "@/Components/UI/CommonButton";
import AdminHeading from "@/Components/common/Dashboard/AdminHeading";
import "@/css/dashboard/StrategyManager.scss";
import CommonHead from "@/Components/common/Dashboard/CommonHead";
import useNavigate from "@/Hooks/useNavigate";
import DashboardLayout from "@/Layouts/DashboardLayout";

const StrategyManager = () => {
  const navigate = useNavigate();
  const entrylist = [
    { title: "Strategy 2", text: ">50% D/P" },
    { title: "Strategy 1", text: "Deviation Strict" }
  ];
  return (
    <>
      <DashboardLayout>
        <div className="trade_manager">
          <Container>
            <CommonHead />
            <AdminHeading
              heading="Strategy Manager"
              className="pt-4 pb-6"
              centered
            />
            <div className="trade_manager_btns">
              <CommonButton
                onClick={() => navigate("/strategy-builder")}
                onlyIcon={<PlusIcon />}
                title="Add Strategy"
                className="w-100 me-2"
              />
            </div>
            <div className="trade_manager_entrylist">
              {entrylist.map((item, index) => (
                <div
                  key={index}
                  className="trade_manager_entrylist_box"
                  onClick={() => navigate("/strategy-builder")}
                >
                  <h5>{item?.title}</h5>
                  <h5>{item?.text}</h5>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </DashboardLayout>
    </>
  );
};

export default StrategyManager;
