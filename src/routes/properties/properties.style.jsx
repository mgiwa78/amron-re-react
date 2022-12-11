import styled from "styled-components/macro";

export const PropertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: var(--color9);
  height: max-content;
  justify-content: center;

  .properties-container {
    width: var(--contentwidth);
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 20px;
    min-height: 100vh;
    height: max-content;
  }

  .bradcrumps {
    margin-top: 100px;
    width: fit-content;
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }
  .crumpsep {
    width: 6px;
    height: 6px;

    transform: rotate(45deg);
    border-right: 1px solid #5a5a5a;
    border-top: 1px solid #5a5a5a;

    opacity: 1;
    color: var(--color5);
  }
  .crump {
    color: var(--color12);
    font-size: var(--font-size10);
    font-weight: var(--font-weight6);
  }
  .crump:last-child {
    color: var(--color6);
  }
  .properties-header {
    background: var(--color0) 0% 0% no-repeat padding-box;
    border: 1px solid var(--color20);
    border-radius: 5px;
    opacity: 1;
    height: 76px;
    font-size: var(--font-size8);
    position: sticky;

    display: flex;
    justify-content: space-between;
    padding: 0 36px;
    align-items: center;
  }
  .page-desc {
    font-weight: var(--font-weight5);
    color: var(--color5);
  }
  .page-sort {
    font-weight: var(--font-weight6);
    color: var(--color5);

    .sort-icon {
    }
    .sort-title {
      font-weight: var(--font-weight6);
      color: var(--color4);
    }
  }
  .properties-section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .pagination-box {
    font-weight: var(--font-weight6);

    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 20px;
    align-items: center;
    padding-bottom: 40px;

    .pagintion-item {
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      width: 53px;
      height: 53px;
      opacity: 1;
      border-radius: 100px;

      background-color: var(--color0);
      color: var(--color12);
      font-size: var(--font-size7);

      &.on {
        background-color: var(--color6);
        color: var(--color0);

        &:hover {
          background-color: var(--color17);
          color: var(--color0);
        }
      }
    }
    .arrw {
      width: 10px;
      height: 10px;
      border-top: 2px solid #5a5a5a;
      border-left: 2px solid #5a5a5a;
      rotate: 135deg;
    }
  }
  @media only screen and (min-width: 1000px) {
    padding-top: 140px;
    .bradcrumps {
      margin-top: 20px;
    }
    .properties-section {
      gap: 60px;
    }
    .properties-header {
      width: 100%;
    }
  }
`;
