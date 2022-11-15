import styled from "styled-components/macro";

export const PaginationContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination-box {
    font-weight: var(--font-weight6);

    display: flex;
    justify-content: flex-end;
    width: var(--contentwidth);
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
`;
