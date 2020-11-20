import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    color: #4e4e51;
    background: #fff;
    padding: 10px 17px;
    border-radius: 8px;
    border: 1px solid #E6E9ED;
    opacity: 1;
    transition: all .2s ease;
`
export const CardTitle = styled.div`
    border-bottom: 2px solid #E6E9ED;
    padding: 1px 5px 6px;
    margin-bottom: 10px;
    font-size:1.5rem;
`
export const CardBody = styled.div`
    padding: 1px 5px 6px;
    margin-bottom: 10px;
`
export const CardFooter = styled.div`
    margin-top: auto;
    border-top: 2px solid #E6E9ED;
    padding: 1px 5px 6px;
    font-size:1.5rem;
`