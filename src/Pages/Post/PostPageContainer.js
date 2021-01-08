import React, {useEffect} from 'react';
import {PostPageComponent} from './PostPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';

const COMPONENT_NAME = 'Post';

const PostPageContainer = ({hello, location}) => {

    useEffect(() => {
        console.log(`${hello} ${COMPONENT_NAME}`);
        //eslint-disable-next-line
    }, []);

    return (
        <PostPageComponent
            postData={location.state.post}
        />
    );
};

export default withRequest(PostPageContainer);

PostPageContainer.propTypes = {
    hello: PropTypes.string.isRequired,
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
    }).isRequired
};
