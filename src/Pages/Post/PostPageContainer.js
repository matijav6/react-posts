import React, {useEffect, useState} from 'react';
import {PostPageComponent} from './PostPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';
import {getPostComments} from '../../helpers/urls';

const COMPONENT_NAME = 'Post';

const PostPageContainer = ({hello, match, location, sendRequest}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [postData, setPostData] = useState({post: location.state.post, comments: []});

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        let data = async () => {
            let url = getPostComments + '?postId=' + encodeURIComponent(match.params.id);
            setIsLoading(true);
            return await sendRequest(url);
        };
        data().then(r => {
            setPostData(prevState => ({
                ...prevState,
                comments: r,
            }));
            setIsLoading(false);
        });
        //eslint-disable-next-line
    }, []);

    return (
        <PostPageComponent
            isLoading={isLoading}
            postData={postData}
        />
    );
};

export default withRequest(PostPageContainer);

PostPageContainer.propTypes = {
    hello: PropTypes.string.isRequired,
    match: PropTypes.exact({
        isExact: PropTypes.bool,
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
        path: PropTypes.string,
        url: PropTypes.string,
    }).isRequired,
    location: PropTypes.exact({
        pathname: PropTypes.string,
        search: PropTypes.string,
        hash: PropTypes.string,
        key: PropTypes.string,
        state: PropTypes.exact({
            post: PropTypes.shape({
                body: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                id: PropTypes.number.isRequired,
                userId: PropTypes.number.isRequired,
            }).isRequired,
        }),
    }).isRequired,
    sendRequest: PropTypes.func.isRequired,
};
