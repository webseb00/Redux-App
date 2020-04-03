import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('asdsdf');
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        this.setState({
            title: '',
            body: ''
        });
    }

    render() {
        const { onChange, onSubmit } = this;
        return (
            <div>
                <h1>Add post</h1>
                <form>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" onChange={onChange} value={this.state.title}/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name="body" onChange={onChange} value={this.state.body}></textarea>
                    </div>
                    <button type="submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        )
    }

};

export default PostForm;