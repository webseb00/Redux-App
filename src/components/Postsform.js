import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newPostRequest } from '../reducers/rootReducer';

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
        const { newPostRequest } = this.props;
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        newPostRequest(post);

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

const mapDispatchToProps = dispatch => ({
    newPostRequest: (post) => dispatch(newPostRequest(post))
});

export default connect(null, mapDispatchToProps)(PostForm);

PostForm.propTypes = {
    newPostRequest: PropTypes.func.isRequired
};