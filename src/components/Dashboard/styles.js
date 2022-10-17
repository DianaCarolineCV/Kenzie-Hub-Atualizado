import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-black-2);
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
    border-bottom: .0625rem solid var(--color-grey-4);
    padding: 0 1.125rem;

    h1 {
      color: var(--color-primary);
      font-size: 1.5625rem;
    }

    button {
      height: 1.75rem;
      width: 4.375rem;
      color: var(--color-grey-0);
      background-color: var(--color-grey-3);
      border-radius: .25rem;
      padding: 0rem 1.0152rem;
      transition: 1s ease;
      color: var(--color-grey-0);
      font-size: .75rem;
      font-weight: 600;
    }

    button:hover {
      background-color: var(--color-grey-0);
      color: var(--color-grey-3);
      transition: 1s ease;
    }
  }

  main {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7.375rem;
      border-bottom: .0625rem solid var(--color-grey-4);
      padding: 0 1.125rem;

      h2 {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 1.125rem;
        width: 40%;
      }

      p {
        width: 40%;
        font-size: .875rem;
        color: var(--color-grey-1);
      }
    }

    .mainTech {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      border-bottom: none;
      margin-top: 2.3125rem;

      span {
        height: 2rem;
        width: 2rem;
        border-radius: .25rem;
        background-color: var(--color-grey-3);
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 1s ease;
      }
    }

    span {
      font-size: 1rem;
      color: var(--color-grey-0);
    }
    span:hover {
      background-color: var(--color-grey-0);
      color: var(--color-grey-3);
      transition: 1s ease;
    }

    ul {
      background-color: var(--color-grey-3);
      margin: 1rem 1.125rem;
      border-radius: .25rem;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: .875rem;

      p {
        display: flex;
        align-items: center;
        gap: .5rem;
      }

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-grey-4);
        padding: 1rem;
        height: 3.0625rem;
        border-radius: .25rem;
        cursor: pointer;
        transition: 1s ease;

        h2 {
          color: var(--color-grey-0);
          font-weight: 700;
          font-size: .8881rem;
        }

        section {
          display: flex;
          align-items: center;
          gap: 1.5625rem;

          h4 {
            font-size: .75rem;
            color: var(--color-grey-0);
          }

          svg {
            color: var(--color-grey-1);
            height: 1rem;
            width: 1rem;
          }

          svg:hover {
            color: var(--color-grey-0);
          }
        }
      }

      li:hover {
        background-color: var(--color-grey-2);
        transition: 1s ease;
      }
    }
  }

  @media (min-width: 53.125rem) {
    header,
    main > div {
      padding: 0 9.375rem;
    }

    main > ul {
      margin: 1rem 9.375rem;
    }

    main {
      div {
        justify-content: space-between;
        gap: unset;

        p,
        h2 {
          width: unset;
        }
      }
    }
  }
`;
