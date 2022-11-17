import styled, { css } from "styled-components/macro";

export const ContactUsContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  height: max-content;
  gap: 70px;

  .content-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: var(--contentwidth);
    max-width: 1100px;
  }
  .contact-title {
    color: var(--color4);
    font-weight: var(--font-weight6);
    font-size: var(--font-size6);
    margin-bottom: 15px;
  }
  .contact-info {
    text-align: left;
  }
  .address {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-weight: 300;
    margin-bottom: 10px;

    p {
      margin-left: 10px;

      text-align: left;
      width: 200px;
      line-height: 20px;
    }
  }
  .contact {
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
  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 21px;
    text-align: left;

    input::placeholder {
      text-transform: capitalize;
      color: var(--color28);
    }
    input[type="text"],
    input[type="email"],
    input[type="number"] {
      width: 681px;
      height: 45px;
      padding: 15px;

      border: 0.699999988079071px solid #1515155f;
      border-radius: 5px;
    }
    textarea {
      padding: 15px;
      width: 681px;
      height: 194px;
      border: 0.699999988079071px solid #1515155f;
      border-radius: 5px;
    }
  }
`;
export const ContactIcon = styled.img``;
