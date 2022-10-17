import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 101;
  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: var(--color-modal);
  }
  .content {
    width: 100%;
    max-width: 23.125rem;
    position: relative;
    padding: 0.625rem;

    div {
      display: flex;
      justify-content: space-between;
      background: var(--color-grey-2);
      align-items: center;
      padding: 0.75rem 1.25rem;

      border-radius: 0.25rem 0.25rem 0rem 0rem;
      h2 {
        font-weight: 700;
        font-size: 0.9375rem;
        color: var(--color-grey-0);
      }

      button {
        display: flex;
        align-items: center;
      }
      svg {
        color: var(--color-grey-1);
        font-weight: 600;
        height: 1rem;
        width: 1rem;
      }

      svg:hover {
        color: var(--color-grey-0);
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.9375rem;
      height: 15.625rem;
      background: var(--color-grey-3);
      padding: 1.375rem 1.375rem;
      border-radius: 0 0 0.25rem 0.25rem;

      label {
        color: var(--color-grey-0);
        font-size: 0.75rem;
      }

      input,
      select {
        height: 3rem;
        background: var(--color-grey-2);
        border: 0.0761rem solid var(--color-grey-0);
        border-radius: 0.25rem;
        padding: 0rem 1.0152rem;
        color: var(--color-grey-0);
      }

      input::placeholder {
        color: var(--color-grey-0);
      }

      button {
        height: 3rem;
        background: var(--color-primary);
        border: 0.0761rem solid var(--color-primary);
        border-radius: 0.25rem;
        padding: 0rem 1.0152rem;
        color: var(--color-grey-0);
        transition: 1s ease;
        font-weight: 600;
      }

      button:hover {
        transition: 1s ease;
        background-color: var(--color-grey-0);
        color: var(--color-primary);
        border: 0.0761rem solid var(--color-grey-0);
      }
    }
  }
`;
