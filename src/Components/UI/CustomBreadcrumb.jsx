

import { Breadcrumb } from "react-bootstrap";
// // import { Link } from "@inertiajs/react";
import Link from "next/link"; // Import Next.js Link

import "../../css/common/CustomBreadcrumb.scss";

const CustomBreadcrumb = ({ href, linkname, pagename }) => {
  console.log("CustomBreadcrumb href:", href, typeof href);
  
  return (
    <>
      <div className="custom_breadcrumb">
        <Breadcrumb>
          <li className="breadcrumb-item home-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item secondary_link">
            {/* <Link href={href}>{linkname}</Link> */}
            {href ? <Link href={href}>{linkname}</Link> : <span>{linkname}</span>}
          </li>
          <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  );
};

export default CustomBreadcrumb;
