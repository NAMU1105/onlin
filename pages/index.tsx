import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import SampleMockUp from "../src/SampleMockup";

const IndexPage = () => (
  <>
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          font-family: "Nanum Myeongjo", "Courier New";
          box-sizing: border-box;
          line-height: 1.5;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
    <SampleMockUp />
  </>
);

export default IndexPage;
