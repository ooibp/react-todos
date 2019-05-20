import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import List from '../List';

const styles = {
    display: "flex",
    justifyContent: "center",
}


class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            lists: [],
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    onDelete(id) {
        this.setState({
            lists: this.state.lists.filter(item => item.id !== id)
        })
    }

    onSubmit(event) {
        event.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now(),
        }
        this.setState({
            lists: [...this.state.lists, newItem],
            text: '',
        });
    }

    render() {
        return (
            <Container>
                <div style={styles}>
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Add new todo"
                            value={this.state.text}
                            onChange={this.onChange}
                        ></input>
                        <Button type="submit">Add</Button>
                    </form>
                </div>

                <List lists={this.state.lists} remove={this.onDelete} />
            </Container>
        )
    }
}

export default InputForm;