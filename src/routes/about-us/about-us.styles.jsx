import styled, { css } from "styled-components/macro";

export const AboutUsContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: max-content;
  gap: 70px;
  .content-box {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: var(--contentwidth);
    .services {
      .sevices-list {
        width: 100%;
        max-width: 1200px;
        flex-wrap: wrap;
        display: flex;
        gap: 40px;
        padding-top: 53px;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: var(--font-size2);
        color: var(--color4);
        font-weight: var(--font-weight6);
      }
    }
  }
  .history-section {
    background-color: var(--color9);
    padding: 60px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      color: var(--color4);
      font-size: var(--font-size2);
      font-weight: var(--font-weight5);
    }
    .history-content {
      text-align: left;

      flex-direction: column;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1100px;
      .history-content-box {
        text-transform: capitalize;
        margin-top: 40px;
        font-size: var(--font-size8);
        height: 100%;
        width: 100%;
        line-height: 23px;
        color: var(--color28);
      }
    }
  }
  .track-record {
    height: max-content;
    padding: 60px;
    background-color: var(--color7);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 1000px) {
    .sevices-list {
      flex-direction: row;
    }
    .history-section {
      background-color: var(--color9);
      padding: 60px 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        color: var(--color4);
        font-size: var(--font-size2);
        font-weight: var(--font-weight5);
      }
      .history-content {
        text-align: left;
        flex-direction: row;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 1100px;
        .history-content-box {
          text-transform: capitalize;
          margin-top: 40px;
          font-size: var(--font-size8);
          height: 360px;
          width: 490px;
          line-height: 23px;
          color: var(--color28);
        }
      }
    }
  }
`;

export const TrackRecords = styled.div`
  width: 100%;
  flex-direction: column !important;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  row-gap: 20px;
  align-items: center;
  .records {
    gap: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 20px;
    .record-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      color: var(--color0);
      .record-number {
        font-size: var(--font-size1);
        font-weight: var(--font-weight7);
        line-height: 60px;
      }
      .record-name {
        font-size: var(--font-size8);
      }
    }
  }
  .trackImg {
    margin-top: 0;
    width: 100%;
    height: 238px;
    display: flex;
    text-align: left;
    ${({ trackPath }) =>
      css`
        background: url("${trackPath}");
      `}

    background-position: center;
    background-size: cover;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row !important;

    .records {
      width: 400px;
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 20px;
      .record-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        color: var(--color0);
        .record-number {
          font-size: var(--font-size1);
          font-weight: var(--font-weight7);
          line-height: 60px;
        }
        .record-name {
          font-size: var(--font-size8);
        }
      }
    }
    .trackImg {
      width: 40%;
    }
  }
`;
export const ServiceItem = styled.div`
  width: 559px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  .service-item-right {
    display: flex;
    text-align: left;
    width: 50%;
    height: 200px;
    ${({ imgPath }) =>
      css`
        background: url("${imgPath}");
      `}

    background-position: center;
    background-size: cover;
  }
  .service-item-left {
    width: 50%;
    height: 210px;
    display: flex;
    gap: 10px;

    text-align: left;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    background-color: var(--color7);
    color: var(--color0);

    .service-item-name {
      font-size: var(--font-size4);
      font-weight: var(--font-weight5);
      width: 170px;
      height: max-content;
    }
    .service-item-desc {
      height: max-content;
      line-height: 20px;
      font-size: var(--font-size9);
      font-weight: var(--font-weight3);
      width: 67%;
    }
  }

  @media only screen and (min-width: 1000px) {
    width: 492px;
    height: 292px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .service-item-right {
      display: flex;
      text-align: left;
      width: 50%;
      height: 100%;

      background-position: center;
      background-size: cover;
    }
    .service-item-left {
      width: 50%;
      height: 100%;
      display: flex;
      gap: 10px;

      text-align: left;
      justify-content: center;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
      background-color: var(--color7);
      color: var(--color0);

      .service-item-name {
        font-size: var(--font-size4);
        font-weight: var(--font-weight5);
        width: 170px;
        height: max-content;
      }
      .service-item-desc {
        height: max-content;
        line-height: 20px;
        font-size: var(--font-size9);
        font-weight: var(--font-weight3);
        width: 67%;
      }
    }
  }
`;
