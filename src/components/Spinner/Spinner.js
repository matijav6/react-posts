import React from 'react';
import './Spinner.scss'

export const CustomSpinner = ({isLoading}) => {
    return (
        <>
            {
                isLoading &&
                <div className={'custom-spinner'}>
                    <div className={"progress large"}/>
                </div>
            }
        </>
    );
};
