import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-black-2);
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5625rem;

  .header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
    h1 {
      color: var(--color-primary);
      font-size: 1.4375rem;
    }

    button {
      height: 1.75rem;
      width: 4.375rem;
      color: var(--color-grey-0);
      background-color: var(--color-grey-3);
      border-radius: 0.25rem;
      padding: 0rem 1.0152rem;

      color: var(--color-grey-0);
      font-size: 0.75rem;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  main {
    width: 100%;
    height: 90%;
    gap: 1.375rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.9375rem;

    background-color: var(--color-grey-3);
    box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
    border-radius: 0.25rem;

    h2 {
      color: var(--color-grey-0);
      font-weight: 700;
      font-size: 1.125rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 0.9375rem;

      button {
        height: 3rem;
        padding: 0rem 1.3959rem;
        background-color: var(--color-primary-3);
        border: 0.0761rem solid var(--color-primary-3);
        border-radius: 0.2538rem;
        color: var(--color-white);
        transition: 1s;
      }

      button:hover {
        background-color: var(--color-grey-0);
        color: var(--color-primary-3);
        border: 0.0761rem solid var(--color-grey-0);
        transition: 1s;
      }
    }

    label {
      color: var(--color-grey-0);
      font-size: 0.75rem;
    }

    input {
      background-color: var(--color-grey-2);

      padding: 0rem 1.0152rem;
      height: 3rem;

      border: 0.0761rem solid var(--color-grey-2);
      border-radius: 0.25rem;

      color: var(--color-white);
    }

    input::placeholder {
      color: var(--color-grey-1);
    }

    select {
      background-color: var(--color-grey-2);
      padding: 0rem 1.0152rem;
      height: 3rem;
      border: 0.0761rem solid var(--color-grey-2);
      border-radius: 0.25rem;

      color: var(--color-grey-0);
    }

    span {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-grey-1);
      text-align: center;
    }
  }

  @media (min-width: 25.875rem) {
    main {
      width: 23.0625rem;
      padding: 1.375rem;
    }

    .header {
      width: 25.875rem;
    }
  }
`;
