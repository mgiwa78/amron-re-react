import styled from "styled-components/macro";

export const SpecializtionsContainer = styled.div`
  display: flex;
  height: 800px;
  justify-content: center;
  align-content: center;

  width: 70%;
  .specsection-first {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
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
      margin-top: 90px;
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
`;

export const SpecIcon = styled.img`
  width: 60px;
  height: 60px;
`;
