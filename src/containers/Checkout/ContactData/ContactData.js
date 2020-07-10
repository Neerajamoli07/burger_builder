import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        console.log(this.props.price);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price.toFixed(2),
            customer: {
                name: 'Neeraj',
                address: {
                    street: 'TestStreet N-7',
                    zipcode: '41351',
                    country: 'India'
                },
                email: 'testuser@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json',order)
             .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
             })
             .catch(error => {
                this.setState({loading: false});
             });
    }

    render(){
        let form = (
            <form>
                <input type="text" className="Input" name="name" placeholder="Your Name" />
                <input type="email" className="Input" name="email" placeholder="Your Email" />
                <input type="text" className="Input" name="street" placeholder="Street" />
                <input type="text" className="Input" name="postal" placeholder="Postal Code" />
                <Button 
                    btnType="Success" 
                    clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
          form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;