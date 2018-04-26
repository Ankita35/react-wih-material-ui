import React, { Component } from 'react';
import {Button, Header, Container, Divider, Input, Form,FormField, Table} from 'semantic-ui-react'
import App from "../App";
import {Link, Redirect} from 'react-router-dom'

class Inventory extends Component {
    state={
        item:'',
        qty:'',
        count:1,
        itemArray:[]
    }


    componentDidMount() {
        const localData = localStorage.getItem('imItemArr')
        if (localData) {
            this.setState({
                itemArray: JSON.parse(localData)
            })
        }
    }

    onChangeItem = (event) => {
        // console.log(event.target.value)
        this.setState({ item: event.target.value })
    }

    onChangeQty = (event) => {
        // console.log(event.target.value)
        this.setState({ qty: event.target.value })
    }

    addItem = () => {

        const obj = {
            id: this.state.count,
            item: this.state.item,
            qty: this.state.qty
        }

        let itemArray = this.state.itemArray

        itemArray.push(obj)

        console.log(itemArray)

        this.setState({
            item: '',
            qty: '',
            count: this.state.count + 1,
            itemArray
        })

        this.updateItemArr(itemArray)

    }

    itemDelete = (id) => {
        let itemArray = this.state.itemArray
        let newArray = itemArray.filter(item => {
            if (item.id === id) {
                return false
            } else {
                return true
            }
        })

        this.updateItemArr(newArray)

    }

    updateItemArr = (newArray) => {

        this.setState({
            itemArray: newArray
        })

        localStorage.setItem('imItemArr', JSON.stringify(newArray))
    }
    render(){
        return(
            <div className="App">
                <Container>
                    <Header as='h1'>Ashish's Inventory Management System</Header>
                    <Divider />
                    <Form>
                        <Form.Field>
                            <Input label='Item' placeholder='Enter a name' value={this.state.item} onChange={(e) => this.onChangeItem(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Input label='Qty' placeholder='Enter a number' value={this.state.qty} onChange={(e) => this.onChangeQty(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Button onClick={() => this.addItem()} primary>Add</Button>
                        </Form.Field>
                    </Form>

                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>Item</Table.HeaderCell>
                                <Table.HeaderCell>Qty</Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.state.itemArray.map((item) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{item.id}</Table.Cell>
                                        <Table.Cell>{item.item}</Table.Cell>
                                        <Table.Cell>{item.qty}</Table.Cell>
                                        <Table.Cell><Button color='red' onClick={() => this.itemDelete(item.id)}>x</Button></Table.Cell>
                                    </Table.Row>
                                )
                            })

                            }

                        </Table.Body>
                    </Table>

                </Container>
            </div>
        )
    }

}
export default Inventory;