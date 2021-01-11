import React from 'react';
import {useHistory} from 'react-router-dom';
import './BackButtonStylesheet.scss';

export const BackButton = () => {
    const history = useHistory();

    return (
        <div onClick={() => history.goBack()} className={'back-button alert-primary'}>
            <h5>{'<-'}</h5>
        </div>
    );
};
