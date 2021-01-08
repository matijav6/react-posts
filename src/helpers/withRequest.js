import React from 'react';
import {serverUrl} from './urls';

const withRequest = (WrappedComponent) => {
    const sendRequest = async (api) => {
        return fetch(serverUrl + api,{
            mode: 'cors',
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(
                (result) => {
                    return result;
                },
                (error) => {
                    return error;
                },
            );
    };

    return props => {
        return (
            <WrappedComponent
                sendRequest={sendRequest}
                {...props}
            />
        );
    };
};
export default withRequest;
