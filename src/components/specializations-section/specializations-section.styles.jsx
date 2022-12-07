import styled from "styled-components/macro";

export const SpecializtionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  align-items: center;

  width: 100vw;
  .specsection-first {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: 30px;
    .spec-item {
      background: var(--color0) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 30px #00000010;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 247px;
      height: 227px;
      gap: 15px;
      text-align: center;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 7px;
      }

      .item-icon {
      }
      .item-header {
        text-align: center;

        font-size: var(--font-size5);
        font-weight: var(--font-weight6);
      }
      .item-body {
        width: 230px;
        line-height: 18px;
        color: var(--color5);
        font-size: var(--font-size9);
      }
    }
    .spec-item:nth-child(3) {
      margin-top: 10px;
    }
  }
  .specsection-second {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 35px;
    text-align: left;
    gap: 10px;
    .spec-block-header {
      text-align: left;
      font-weight: var(--font-weight6);

      color: var(--color4);
      font-size: var(--font-size3);
    }
    .spec-block-body {
      color: var(--color5);
      font-size: var(--font-size9);
      line-height: 23px;
    }
  }

  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    height: 800px;
    justify-content: center;
    align-content: center;

    width: 100%;
    .specsection-first {
      display: flex;
      max-width: 700px;

      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 30px;
      .spec-item {
        background: var(--color0) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 30px #00000010;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 247px;
        height: 227px;
        gap: 15px;
        text-align: center;
        div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 7px;
        }

        .item-icon {
        }
        .item-header {
          text-align: center;

          font-size: var(--font-size5);
          font-weight: var(--font-weight6);
        }
        .item-body {
          width: 230px;
          line-height: 18px;
          color: var(--color5);
          font-size: var(--font-size9);
        }
      }
      .spec-item:nth-child(2) {
        margin-top: 90px;
      }
      .spec-item:nth-child(3) {
        margin-top: -90px;
      }
      .spec-item:nth-child(4) {
        margin-top: 45px;
      }
    }
  }
  @media only screen and (min-width: 1400px) {
    flex-direction: row;
    display: flex;
    height: 800px;
    justify-content: center;
    align-content: center;

    width: 70%;
    .specsection-first {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: flex-start;
      width: 70%;
      gap: 30px;
      .spec-item {
        background: var(--color0) 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 30px #00000010;
        border-radius: 35px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 327px;
        height: 317px;
        padding: 40px;
        gap: 15px;
        text-align: left;

        .item-icon {
        }
        .item-header {
          font-size: var(--font-size5);
          font-weight: var(--font-weight6);
        }
        .item-body {
          width: 230px;
          line-height: 20px;
          color: var(--color5);
          font-size: var(--font-size9);
        }
      }
      .spec-item:nth-child(3) {
        margin-top: -120px;
      }
      .spec-item:nth-child(2) {
        margin-top: 130px;
      }

      .spec-item:nth-child(4) {
        margin-top: 30px;
      }
    }
    .specsection-second {
      margin: auto 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 30%;
      text-align: left;
      gap: 10px;
      .spec-block-header {
        text-align: left;
        font-weight: var(--font-weight6);

        color: var(--color4);
        font-size: var(--font-size3);
      }
      .spec-block-body {
        color: var(--color5);
        font-size: var(--font-size9);
        line-height: 23px;
      }
    }
  }
`;

export const SpecIcon = styled.img`
  width: 40px;
  height: 40px;

  @media only screen and (min-width: 1400px) {
    width: 60px;
    height: 60px;
  }
`;
