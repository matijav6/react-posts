import React from 'react';
import {BackButton} from '../../components/BackButton/BackButton';
import {CustomSpinner} from '../../components/Spinner/Spinner';
import {Post} from '../../components/Post/Post';
import {Comment} from '../../components/Comment/Comment';
import PropTypes from 'prop-types';

export const PostPageComponent = ({postData, isLoading}) => {
        return (
            <>  <CustomSpinner isLoading={isLoading}/>
                <nav className="navbar navbar-dark bg-primary d-flex justify-content-center min-height-50"/>
                <div className={'container-fluid p-3'}>
                    <div className={'row justify-content-md-center'}>
                        <div className={'col-sm-8 mb-4 d-flex justify-content-center'}>
                            <div className={'w-100'}>
                                <Post classes={'h-auto mw-100'}>
                                    <Post.Body>
                                        <Post.Title>{postData.post.title}</Post.Title>
                                        <Post.Text>{postData.post.body}</Post.Text>
                                    </Post.Body>
                                </Post>
                                {
                                    postData.comments.map(comment => (
                                        <Comment classes={'w-50 mw-100'} key={comment.id}>
                                            <Comment.Body>
                                                <Comment.Title>{comment.name}</Comment.Title>
                                                <Comment.Text>{comment.body}</Comment.Text>
                                                <Comment.Author>{comment.email}</Comment.Author>
                                            </Comment.Body>
                                        </Comment>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <BackButton/>
            </>
        );
    }
;
PostPageComponent.propTypes = {
    postData: PropTypes.shape({
        post:  PropTypes.shape({
            body: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                body: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
            }),
        ).isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
};
