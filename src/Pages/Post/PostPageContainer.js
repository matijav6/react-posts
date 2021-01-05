import React, {useEffect} from 'react';
import {PostPageComponent} from './PostPageComponent';
import withRequest from '../../helpers/withRequest';
import PropTypes from 'prop-types';

const COMPONENT_NAME = 'Post';

const PostPageContainer = ({hello, match, sendRequest}) => {

    useEffect(() => {
        console.log(match.params.id);
        console.log(`${hello} ${COMPONENT_NAME}`);
        //eslint-disable-next-line
    }, []);

    return (
        <PostPageComponent/>
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
    sendRequest: PropTypes.func.isRequired,
};
