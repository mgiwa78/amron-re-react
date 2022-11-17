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
        justify-content: space-between;
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
  .track-record {
    height: 394px;
    padding: 60px;
    background-color: var(--color7);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    margin-top: -70px;
  }
`;

export const TrackRecords = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .records {
    width: 300px;
    display: flex;
    justify-content: space-between;
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
    margin-top: 190px;
    width: 568px;
    height: 438px;
    display: flex;
    text-align: left;
    ${({ imgName }) =>
      css`
        background: url("/images/${imgName}");
      `}

    background-position: center;
    background-size: cover;
  }
`;
export const ServiceItem = styled.div`
  width: 559px;
  height: 292px;
  display: flex;
  align-items: center;
  justify-content: center;

  .service-item-right {
    display: flex;
    text-align: left;
    width: 50%;
    height: 100%;
    ${({ imgName }) =>
      css`
        background: url("/images/${imgName}");
      `}

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
`;
