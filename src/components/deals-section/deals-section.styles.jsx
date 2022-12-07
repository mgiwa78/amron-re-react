import styled from "styled-components/macro";

export const DealsSectionContainer = styled.div`
  padding: 30px 0px;
  width: 100vw;
  height: 500px;
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
    display: flex;
    gap: 40px;
    align-items: center;
    overflow-y: scroll;
    padding: 0 20px;
    height: 350px;
    width: 800px;
  }
  .deals-footer {
    .deal-trails {
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .on {
        border-radius: 15px;

        display: flex;
        padding: 2px;
        border: 1px solid var(--color10);
        .deal-trail {
          border-radius: 8px;
          width: 8px;
          height: 8px;
          background-color: var(--color8);
        }
      }
      .off {
        border-radius: 8px;
        width: 8px;
        height: 8px;
        display: flex;
        background-color: var(--color10);
      }
    }
  }

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1400px) {
    padding: 50px 0px;
    width: 100vw;
    height: 600px;
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
      display: flex;
      gap: 40px;
      align-items: center;
      overflow: hidden;
      padding: 0 20px;
      height: 550px;
      width: 1000px;
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
  }
`;
