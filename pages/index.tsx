import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";
import SampleMockUp from "../src/SampleMockup";

const IndexPage = () => (
  <>
    <Global
      styles={css`
        ${emotionReset}
        ::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
        *,
        *::after,
        *::before {
          font-family: "Nanum Myeongjo", "Courier New";
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */

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
