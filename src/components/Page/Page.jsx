import React from "react";
import classNames from "classnames";

const Page = ({ children, ...props }) => (
	<div className={classNames("page", props.className)}>{children}</div>
);

export default Page;
