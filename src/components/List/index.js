import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

class List extends React.Component {
    clickHandle(id) {
        this.props.remove(id)
    }

    render() {
        return (
            <ListGroup>
                 {
                        this.props.lists.map(item =>
                            <ListGroup.Item key={item.id}>
                                <Button onClick={() => this.clickHandle(item.id)}>X</Button>
                                <span style={{marginLeft: "10px"}}>{item.text}</span>
                            </ListGroup.Item>
                        )
                    }
            </ListGroup>
        )
    }
}

export default List;