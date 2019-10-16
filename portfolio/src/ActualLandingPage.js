import React from 'react'
import Chess from './ChessBoard'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default function ActualLandingPage(){
    return(

        <Container className='p-3'>
            <Jumbotron>Welcome to my portfolio!</Jumbotron>
            <Chess/>
        </Container>
    )
}