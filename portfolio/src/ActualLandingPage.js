import React from 'react'
import Chess from './ChessBoard'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export default function ActualLandingPage(){
    return(

        <Container className='p-3'>
            <NavBar color='light' light expand='md'>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
            </NavBar>
            <Jumbotron>Welcome to my portfolio!</Jumbotron>
            <Chess/>
        </Container>
    )
}