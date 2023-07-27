import React from "react";
import Button from "../Button/Button";
import AmazonBrief from "../components/AmazonBrief/AmazonBrief";
import AmazonServices from "../../src/components/AmazonServices/AmazonServices";
import MidFooter from "../MidFooter/MidFooter";

function Footer({ title }) {
  return (
    <div>
      <Button title={title} />
      <AmazonBrief />
      <MidFooter />
      <AmazonServices />
    </div>
  );
}

export default Footer;
