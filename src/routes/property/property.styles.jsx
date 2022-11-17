import styled, { css } from "styled-components/macro";

export const PropertyContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  height: max-content;
  gap: 70px;

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: var(--contentwidth);
    max-width: 1300px;
    padding: 40px 0;
  }
  .contact-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    width: max-content;
    max-width: 695px;
    padding: 40px 0;
  }
  .cta-req {
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: var(--color7);

    margin-bottom: -70px;
    align-items: center;
  }
  .cta-title {
    color: var(--color0);
    font-weight: var(--font-weight6);
    font-size: var(--font-size4);
    margin-bottom: 15px;
  }
  .cta-info {
    text-align: left;
  }

  .cta {
    display: flex;

    justify-content: center;
    align-items: flex-start;
    font-weight: 300;
    p {
      margin-left: 10px;
      text-align: left;
      width: 200px;
      line-height: 20px;
    }
  }
  .cta-form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 21px;
    text-align: left;
    margin-bottom: 30px;

    input::placeholder {
      text-transform: capitalize;
      color: var(--color28);
    }
    input[type="text"],
    input[type="email"],
    input[type="number"] {
      width: 334px;
      height: 45px;
      padding: 15px;

      border: 0.699999988079071px solid #1515155f;
      border-radius: 5px;
    }
    textarea {
      text-transform: capitalize;
      color: var(--color28);
      padding: 15px;
      width: 694px;
      height: 200px;
      border: 0.699999988079071px solid #1515155f;
      border-radius: 5px;
    }
  }
  .submit {
    width: 125px;
    height: 38px;

    border: 1px solid #ffffff;
    border-radius: 5px;
    opacity: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color0);
    flex-wrap: wrap;
    font-weight: var(--font-weight5);
  }
  .property {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .top {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom: 0.6000000238418579px solid #b5b5b5b2;
    }
    .middle {
      padding-top: 70px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
    .bottom {
      padding-top: 70px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom: 0.6000000238418579px solid #b5b5b5b2;
      padding-bottom: 90px;

      .props {
        width: 400px;
      }
      .props:nth-child(2) {
        tbody {
          border-right: 0.6000000238418579px solid #b5b5b5b2;
        }
      }
      .table-title {
        height: 60px;
        text-align: left;
        font-size: var(--font-size4);
        font-weight: var(--font-weight5);
        margin-left: -0px;
      }
      table {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        tbody {
          text-align: left;
          font-size: var(--font-size8);
          font-weight: var(--font-weight4);
          width: 100%;
        }

        th {
          height: 100px;
          text-align: left;
          font-size: var(--font-size4);
          font-weight: var(--font-weight5);
          margin-left: -0px;
        }
        tr {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 29px;
        }
        td {
          text-transform: capitalize;
          &.key {
            width: 154px;
            color: var(--color28);
          }
          &.value {
            width: 170px;
            font-weight: var(--font-weight5);

            color: var(--color4);
          }
        }
      }
    }
    .agent {
      text-align: left;
      width: 250px;
      .title {
        font-weight: var(--font-weight5);
        font-size: var(--font-size4);
        margin-bottom: 20px;
      }
      .agent-details {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .agent-img {
          width: 80px;
          height: 80px;
          background: url("/images/Image 17@2x.png");

          background-position: center;
          background-size: cover;
          border-radius: 70px;
        }

        .agent-other {
          display: flex;
          flex-direction: column;

          .agent-name {
            padding-bottom: 7px;
            font-weight: var(--font-weight5);
            font-size: var(--font-size8);
          }
          .agent-phone,
          .agent-email {
            color: var(--color12);
            font-weight: var(--font-weight4);
            font-size: var(--font-size8);
          }
        }
      }
    }
    .property-preview {
      width: 300px;
      text-align: left;
      display: flex;
      flex-direction: column;
      padding-bottom: 70px;
      gap: 10px;
      .deal-location {
        display: flex;
        align-items: center;
        font-size: var(--font-size10);
        color: var(--color8);
        font-weight: var(--font-weight3);
      }
      .deal-title {
        font-size: var(--font-size2);
        color: var(--color4);
        font-weight: var(--font-weight5);
        .deal-size {
          margin-left: 10px;
          font-size: var(--font-size10);
          color: var(--color8);
          font-weight: var(--font-weight4);
        }
      }
      .deal-amenities {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        color: var(--color12);

        .amenities-prop {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: baseline;
          font-size: var(--font-size7);
        }
        .bed {
        }
        .bathroom {
        }
      }
    }
  }
`;
export const ctaIcon = styled.img``;

export const LocationIcon = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
`;
export const BedIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const BathIcon = styled.img`
  width: 26px;
  height: 25px;
  margin-right: 5px;
`;
