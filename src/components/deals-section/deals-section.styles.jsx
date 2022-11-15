import styled from "styled-components/macro";

export const DealsSectionContainer = styled.div`
  padding: 50px 0px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  background-color: var(--color9);
  .title {
    color: var(--color4);
    font-size: var(--font-size2);
    font-weight: var(--font-weight6);
  }
  .deals-display {
    width: 90%;
    height: 470px;
  }
  .deals-footer {
    .deal-trails {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .on {
        border-radius: 15px;

        display: flex;
        padding: 2px;
        border: 1px solid var(--color10);
        .deal-trail {
          border-radius: 15px;
          width: 15px;
          height: 15px;
          background-color: var(--color8);
        }
      }
      .off {
        border-radius: 12px;
        width: 12px;
        height: 12px;
        display: flex;
        background-color: var(--color10);
      }
    }
  }
`;
