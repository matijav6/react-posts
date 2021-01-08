import React, {useEffect, useState} from 'react';
import {PostsPageComponent} from './PostsPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';
import {getPosts} from '../../helpers/urls';
import {filterByAllAttributes} from '../../helpers/filter';

const COMPONENT_NAME = 'Posts';

const PostsPageContainer = ({hello, sendRequest}) => {
    const [postsData, setPostsData] = useState({filtered: [], allPosts: []});
    const [isLoading, setIsLoading] = useState(false);

    const handleFilter = (attribute) => {
        let filtered = filterByAllAttributes(postsData.allPosts, attribute);
        setPostsData(prevState => ({filtered: filtered, allPosts: prevState.allPosts}))
    };

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        let data = async () => {
            setIsLoading(true);
            return await sendRequest(getPosts);
        };
        data().then(r => {
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
