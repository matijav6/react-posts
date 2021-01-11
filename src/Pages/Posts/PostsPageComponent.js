import React from 'react';
import PropTypes from 'prop-types';
import {Post} from '../../components/Post/Post';
import {CustomSpinner} from '../../components/Spinner/Spinner';
import {useHistory} from 'react-router-dom';
import './PostsPageStylesheet.scss';

export const PostsPageComponent = ({postsData, handleFilter, isLoading}) => {
    const history = useHistory();

    return (
        <>
            <CustomSpinner isLoading={isLoading}/>
            <nav className="navbar navbar-dark bg-primary d-flex justify-content-center min-height-50">
                <form className="form-inline w-75">
                    <input type="text" placeholder="Search" className="form-control mr-sm-2 w-100" onChange={event => handleFilter(event.target.value)}/>
                </form>
            </nav>
            <div className={'container-fluid p-3'}>
                <div className={'row justify-content-md-center'}>
                    {
                        postsData.filtered.map(post => (
                            <div
                                className={'col-sm-12 col-md-6 col-xl-3 mb-4 d-flex justify-content-center'}
                                key={post.id}
                            >
                                <Post
                                    classes="mr pointer"
                                    onClick={() => {
                                        history.push({
                                            pathname: '/post/' + post.id,
                                            state: {post: post},
                                        });
                                    }}
                                >
                                    <Post.Body>
                                        <Post.Title>{post.title}</Post.Title>
                                        <Post.User>{post.user.username}</Post.User>
                                        <Post.Text>{post.body}</Post.Text>
                                        <Post.TotalComments>
                                            {post.comments.length} comment(s)
                                        </Post.TotalComments>
                                    </Post.Body>
                                </Post>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

PostsPageComponent.propTypes = {
    postsData: PropTypes.shape({
        filtered: PropTypes.arrayOf(
            PropTypes.shape({
                body: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                userId: PropTypes.number.isRequired,
            }),
        ).isRequired,
        allPosts: PropTypes.arrayOf(
            PropTypes.shape({
                body: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                userId: PropTypes.number.isRequired,
            }),
        ).isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
};
