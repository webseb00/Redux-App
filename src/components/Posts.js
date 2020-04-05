import React, { Component } from 'react';
import { fetchPostsRequest } from '../reducers/rootReducer';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class Posts extends Component {

    componentDidMount() {
        const { fetchPostsRequest } = this.props;
        fetchPostsRequest();
    }

    render() {
        const { posts, post } = this.props;
        posts.unshift(post);
        // console.log(post);
        const postItems = posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                { postItems }
            </div>
        )
    }
};

const mapStateToProps = state => ({
    posts: state.items,
    post: state.item
});

const mapDispatchToProps = dispatch => ({
    fetchPostsRequest: () => dispatch(fetchPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

Posts.propTypes = {
    fetchPostsRequest: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};