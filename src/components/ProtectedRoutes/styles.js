import styled from "styled-components";

export const Loading = styled.div`
    width: 100%; 
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    p{
        width: 3.75rem;
        height: 3.75rem;
        background-color: transparent;
        display: block;
        border:  0.5rem solid var(--color-primary);
        border-bottom: 0.5rem solid transparent;
        border-radius: 50%;
    }

    animation: loading 1s ease-in-out infinite;

    @keyframes loading{
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
        
    }`