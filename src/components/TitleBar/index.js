import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

function TitleBar() {
    return (
        <Container>
            <Jumbotron>
                <h1>React To-do List</h1>
            </Jumbotron>
        </Container>
    )
}

export default TitleBar;