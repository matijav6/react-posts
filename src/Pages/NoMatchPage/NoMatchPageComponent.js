import React from 'react';
import {useHistory} from 'react-router-dom';

export const NoMatchPageComponent = () => {
    const history = useHistory();

    return (
        <>
            <h1>Oops, seems like this page does not exist</h1>
            <button className={'btn btn-primary'} onClick={() => history.push('/posts')}>Back to posts</button>
        </>
    );
};
