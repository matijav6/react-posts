import React from 'react';
import PropTypes from 'prop-types';
import {Spinner} from 'react-bootstrap';

export const PostsPageComponent = ({postsData, isLoading}) => {
    return (
        <>
            {
                isLoading &&
                <Spinner animation="border"/>
            }
            <h1>Posts</h1>
        </>
    );
};

PostsPageComponent.propTypes = {
    postsData: PropTypes.arrayOf(
        PropTypes.shape({
            body: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            userId: PropTypes.number.isRequired,
        }),
    ).isRequired,
    isLoading: PropTypes.bool.isRequired,
};
