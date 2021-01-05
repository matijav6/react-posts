import React, {useEffect} from 'react';
import {NoMatchPageComponent} from './NoMatchPageComponent';

const COMPONENT_NAME = "No Match Page";

export const NoMatchPageContainer = (props) => {
    useEffect(() => {
        console.log(`${props.hello} ${COMPONENT_NAME}`);
        //eslint-disable-next-line
    }, []);
    return (
        <NoMatchPageComponent/>
    );
};
