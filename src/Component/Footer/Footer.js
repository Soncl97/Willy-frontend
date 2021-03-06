import React from "react";
import styled from "styled-components";

function Footer(props) {
  return (
    <>
      {props.props.match.url === "/product" ? (
        <FooterBody>ⓒ Carewith Inc. All Rights Reserved.</FooterBody>
      ) : (
        <FooterBody style={{ backgroundColor: "#f2f2f2" }}>
          ⓒ Carewith Inc. All Rights Reserved.
        </FooterBody>
      )}
    </>
  );
}

export default Footer;

//style
const FooterBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0 53px 0;
  color: #848484;
  font-size: 14px;
  margin: 0 auto;
  text-align: center;
`;
