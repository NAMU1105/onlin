import React, { DOMAttributes } from "react";
import { CSSObject } from "@emotion/serialize";
import styled from "@emotion/styled";

const FlexDivWrapper = styled.div<any>`
  display: flex;
  ${(props) => props.wFull && `width:100%;`};
  ${(props) => props.hFull && `height:100%;`};
  ${(props) => props.fd && `flex-direction: ${props.fd};`};
  ${(props) => props.jc && `justify-content: ${props.jc};`};
  ${(props) => props.ai && `align-items: ${props.ai};`};
  ${(props) => props.w && `width: ${props.w}px;`};
  ${(props) => props.gap && `gap: ${props.gap}px;`};
  ${(props) =>
    props.p &&
    `padding: ${typeof props.p === "number" ? `${props.p}px` : props.p};`};
  ${(props) =>
    props.m &&
    `margin: ${typeof props.m === "number" ? `${props.m}px;` : props.m};`};
`;

export interface Props extends DOMAttributes<any> {
  style?: CSSObject;
  p?: number | string;
  m?: number | string;
  w?: number;
  gap?: number;
  wFull?: boolean;
  hFull?: boolean;
  jc?: "flex-start" | "center" | "flex-end" | "space-between";
  fd?: "row" | "column";
  ai?: "center" | "flex-start" | "flex-end";
}

const FlexDiv: React.FC<Props> = (props: Props) => {
  return <FlexDivWrapper {...props} />;
};

FlexDiv.defaultProps = {
  // ai: "center",
  gap: 0,
};
export default FlexDiv;
