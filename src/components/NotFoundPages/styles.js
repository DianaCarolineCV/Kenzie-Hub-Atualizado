import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-black-2);
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.25rem;

    svg {
      fill: var(--color-white);
    }
  }

  h2 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 1.75rem;
    width: 90%;
  }

  button {
    height: 3rem;
    padding: 0rem 1.3959rem;
    background-color: var(--color-primary);
    border: 0.0761rem solid var(--color-primary);
    border-radius: 0.2538rem;
    color: var(--color-white);
    font-weight: 700;
  }

  button:hover {
    background-color: var(--color-grey-0);
    color: var(--color-primary);
    border: 0.0761rem solid var(--color-grey-0);
  }

  @media (min-width: 31.25rem) {
    div > h2 {
      width: 100%;
    }
  }
`;
