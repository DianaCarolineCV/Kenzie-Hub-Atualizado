import styled from "styled-components";

export const Container = styled.div `

    background-color: var(--color-black-2);
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
       color: var(--color-primary); 
       font-size: 1.875rem;
       text-align: center;
        margin-bottom: 2.2313rem;
    }


    main{
        width: 80%;
        height: 80%; 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 2.625rem 1.375rem; 
        background-color: var(--color-grey-3);
        box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
        border-radius: 0.25rem;

        h2{    
         color: var(--color-grey-0); 
         font-weight: 700;
         font-size: 1.125rem;
        }

        form {
            display: flex;
            flex-direction: column;
            gap:1.375rem;
            width: 100%;


            button{
                height: 3rem;
                padding: 0rem 1.3959rem;
                background-color: var(--color-primary);
                border: 0.0761rem solid var(--color-primary);
                border-radius: 0.2538rem;
                color: var(--color-white);
                font-weight: 700;
                transition: 1s;
            }


            button:hover{
                background-color: var(--color-white);
                color: var(--color-primary);
                border: 0.0761rem solid var(--color-grey-0);
                transition: 1s;
            }
        }

        label{
            color: var(--color-grey-0); 
            font-size: 0.75rem;
        }

        input{
            background-color: var(--color-grey-2);
            padding: 0rem 1.0152rem;
            height: 3rem;
            border: 0.0761rem solid var(--color-grey-0);
            border-radius: 0.25rem;
            color: var(--color-white);
        }

        input::placeholder{
            color: var(--color-grey-1);
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 1.375rem;
            width: 100%;
            margin-top: 1.25rem;
        }

        span{
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--color-grey-1);
            text-align: center;
        }

        button{
            height: 3rem;
            width: 100%;
            background-color: var(--color-grey-1);
            color: var(--color-grey-0); 
            font-size: 1rem;
            font-weight: 700;
            transition: 1s;
        }

        button:hover {
            background-color: var(--color-grey-0);
            color: var(--color-grey-1); 
            transition: 1s;
        }
    }


    @media (min-width: 25.875rem) {
     main {
        width: 23.0625rem;
        height: 25rem;
    }
 }  
 
`

export const Loading = styled.div `
    width: 50%; 
    min-height: 100vh;
    margin: 0 auto;
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