import React, { Component } from 'react';
import { sendContactEmail } from '../services/contact';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            //display thank you modal
            //redirect to homepage
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="container mx-auto bg-light">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mesaage">Message</label>
                        <textarea id="message" cols="30" rows="10" name="message" className="form-control" onChange={this.handleChange} required></textarea>
                    </div>
                    <button id="message-submit" type="submit" onClick={this.handleSubmit} className="btn btn-contrast">Send Message</button>
                </form>
            </div>
        );
    }
}

export default Contact;