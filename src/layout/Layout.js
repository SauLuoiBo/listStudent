import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import { Container } from '../style/GlobalComponents'



const Layout = ({children}) => {
    return (
            <>
            <Header/>
            <Main>
                <Container>
                    {children}
                </Container>
            </Main>
            </>
    )
}

const Main = styled.main`
    
    width: 1fr;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Layout
