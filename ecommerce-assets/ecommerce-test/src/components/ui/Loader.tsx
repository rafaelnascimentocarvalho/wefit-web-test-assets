import styled from "styled-components";

const StyledLoader = styled.div`
  width: 100%;
  height: 80px;
  display: grid;

  .icon {
    text-align: center;

    img {
      width: 80px;
      animation: spin 1s linear infinite;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export default function Loader() {
  return (
    <StyledLoader>
      <div className="icon">
        <img alt="loader" src="/assets/images/utils/loader.png" />
      </div>
    </StyledLoader>
  );
}
