import React from "react";
import Button from "../../Button/Button";
import AmazonBrief from "../AmazonBrief/AmazonBrief";
import AmazonServices from "../AmazonServices/AmazonServices";

function Footer({ title }) {
  return (
    <div>
      <Button title={title} />
      <AmazonBrief />
      <AmazonServices />
    </div>
  );
}

export default Footer;
