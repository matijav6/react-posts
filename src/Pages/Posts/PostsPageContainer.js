import React, {useEffect, useState} from 'react';
import {PostsPageComponent} from './PostsPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';
import {getPosts} from '../../helpers/urls';

const COMPONENT_NAME = 'Posts';

const PostsPageContainer = ({hello, sendRequest}) => {
    const [postsData, setPostsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        let data = async () => {
            setIsLoading(true)
            return await sendRequest(getPosts);
        };
        data().then(r => {
            setPostsData(r);
            setIsLoading(false)
        });
        //eslint-disable-next-line
    }, []);

    return (
        <PostsPageComponent
            postsData={postsData}
            isLoading={isLoading}
        />
    );
};

export default withRequest(PostsPageContainer);

PostsPageContainer.propTypes = {
    hello: PropTypes.string.isRequired,
    sendRequest: PropTypes.func.isRequired,
};
