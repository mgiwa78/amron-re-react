import styled from "styled-components/macro";

export const DealItemContainer = styled.div`
  height: 332px;
  width: 262px !important;
  padding: 10px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  background-color: var(--color0);
  border: 1px solid var(--color11);
  border-radius: 4px;
  .item-top {
    padding: 20px;
    position: relative;
    width: 228px;
    height: 322px;
    border-radius: 2px;
    background: url("/images/Image 2.png");

    .selling-div {
      padding: 3px 8px;
      border-radius: 2px;
      font-size: var(--font-size11);
      line-height: 13px;
      width: max-content;
      color: var(--color0);
      &.sale {
        background-color: var(--color13);
      }
      &.not-sale {
        background-color: var(--color16);
      }
    }
    .like-box {
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      width: max-content;
      background-position: center;
      background-size: contain;
      background-color: #00000051;
      border-radius: 5px;
    }
  }

  .item-btm {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .deal-location {
      display: flex;
      align-items: center;
      font-size: var(--font-size10);
      color: var(--color12);
      font-weight: var(--font-weight5);
    }
    .deal-title {
      font-size: var(--font-size4);
      color: var(--color4);
      font-weight: var(--font-weight5);
      .deal-size {
        margin-left: 10px;
        font-size: var(--font-size10);
        color: var(--color5);
        font-weight: var(--font-weight4);
      }
    }
    .deal-amenities {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--color12);
      font-size: var(--font-size10);

      .amenities-prop {
        display: flex;
        align-items: center;
        gap: 4px;
        justify-content: baseline;
      }
      .bed {
      }
      .bathroom {
      }
    }
    .deal-price {
      font-weight: 500;

      font-size: var(--font-size5);
      color: var(--color6);
    }
  }
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  /////Media quaries//////////////
  ////////////////////////////////
  ////////////////////////////////
  ////////////////////////////////
  @media only screen and (min-width: 1200px) {
    height: 369px;
    width: 362px;
    padding: 10px;
    gap: 5px;
    display: flex;
    flex-direction: column;
    background-color: var(--color0);
    border: 1px solid var(--color11);
    border-radius: 10px;
    .item-top {
      padding: 20px;
      position: relative;
      width: 100%;
      height: 303px;
      border-radius: 5px;
      background: url("/images/Image 2.png");

      .selling-div {
        padding: 7px 12px;
        border-radius: 5px;
        font-size: var(--font-size11);
        line-height: 13px;
        width: max-content;
        color: var(--color0);
        &.sale {
          background-color: var(--color13);
        }
        &.not-sale {
          background-color: var(--color16);
        }
      }
      .like-box {
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        width: max-content;
        background-position: center;
        background-size: contain;
        background-color: #00000051;
        border-radius: 5px;
      }
    }

    .item-btm {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 10px;
      .deal-location {
        display: flex;
        align-items: center;
        font-size: var(--font-size10);
        color: var(--color12);
        font-weight: var(--font-weight5);
      }
      .deal-title {
        font-size: var(--font-size4);
        color: var(--color4);
        font-weight: var(--font-weight5);
        .deal-size {
          margin-left: 10px;
          font-size: var(--font-size10);
          color: var(--color5);
          font-weight: var(--font-weight4);
        }
      }
      .deal-amenities {
        display: flex;
        align-items: center;
        gap: 10px;
        color: var(--color12);

        .amenities-prop {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: baseline;
        }
        .bed {
        }
        .bathroom {
        }
      }
      .deal-price {
        font-weight: 500;

        font-size: var(--font-size5);
        color: var(--color6);
      }
    }
  }
`;

export const LikeIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
export const BedIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const BathIcon = styled.img`
  width: 14px;
  height: 14px;
`;
