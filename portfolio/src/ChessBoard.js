import ChessBoard from 'next-chess-board';
import React from 'react'

export default function Chess(){
    return(
        <ChessBoard size ={400} moveValidator={true} />
    )
} 