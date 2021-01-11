import React, {useEffect, useState} from 'react';
import {PostsPageComponent} from './PostsPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';
import {getPostComments, getPosts, getUsers} from '../../helpers/urls';
import {filterByUserAttributes} from '../../helpers/filter';

const COMPONENT_NAME = 'Posts';

const PostsPageContainer = ({hello, sendRequest}) => {
    const [postsData, setPostsData] = useState({filtered: [], allPosts: []});
    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (query) => {
        let filtered = filterByUserAttributes(postsData.allPosts, query);
        setPostsData(prevState => ({filtered: filtered, allPosts: prevState.allPosts}));
    };

    const getComments = async (post) => {
        return await sendRequest(getPostComments + '?postId=' + encodeURIComponent(post.id));
    };

    const getUsersFromServer = async () => {
        return await sendRequest(getUsers);
    };

    const getPostsFromServer = async () => {
        return await sendRequest(getPosts);
    };

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        setIsLoading(true);
        getPostsFromServer().then(async posts => {
            if (!Array.isArray(posts)) {
                return false;
            }

            let users = await getUsersFromServer();
            if (!Array.isArray(users)) {
                return false;
            }

            posts = await Promise.all(posts.map(async post => {
                post.user = users.find(user => user.id === post.userId);
                post.comments = [];
                post.comments = await getComments(post);
                return post;
            }));

            setPostsData({filtered: posts, allPosts: posts});
            setIsLoading(false);
        });
        //eslint-disable-next-line
    }, []);

    return (
        <PostsPageComponent
            postsData={postsData}
            isLoading={isLoading}
            handleFilter={handleFilter}
        />
    );
};

export default withRequest(PostsPageContainer);

PostsPageContainer.propTypes = {
    hello: PropTypes.string.isRequired,
    sendRequest: PropTypes.func.isRequired,
};
