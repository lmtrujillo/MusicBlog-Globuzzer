import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title: '',
        artist: '',
        rating: '',
        review: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="mform">
                    <h5 className="signIn">Review</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="artist">Artist</label>
                        <input type="text" id="artist" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="review">Review</label>
                        <input type="text" id="review" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="loginb">Post</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default CreateProject