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

    const getPostsFromServer = async () => {
        setIsLoading(true);
        let posts = await sendRequest(getPosts);
        let users = await sendRequest(getUsers);
        return await Promise.all(posts.map(async post => {
            post.user = users.find(user => user.id === post.userId);
            post.comments = [];
            post.comments = await getComments(post);
            return post;
        }));
    };

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        getPostsFromServer().then(r => {
            setPostsData({filtered: r, allPosts: r});
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
