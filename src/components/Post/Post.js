import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, ViewComments, ViewPost } from './PostStyle';

export const Post = ({classes, children, ...restProps}) => {
    return (
        <Container className={classNames('card', classes)} {...restProps}>
            {children}
        </Container>
    );
};


Post.Body = function CardBody({ classes, children, ...restProps }) {
    return (
        <Body className={classNames('card__body', classes)} {...restProps}>
            {children}
        </Body>
    );
};

Post.Title = function CardTitle({ classes, children, ...restProps }) {
    return (
        <Title className={classNames('card__title', classes)} {...restProps}>
            {children}
        </Title>
    );
};

Post.Text = function CardText({ classes, children, ...restProps }) {
    return (
        <Text className={classNames('card__text', classes)} {...restProps}>
            {children}
        </Text>
    );
};

Post.ViewCommentsButton = function CardButton({ classes, children, ...restProps }) {
    return (
        <ViewComments
            type="button"
            className={classNames('card__viewComments', classes)}
            {...restProps}
        >
            {children}
        </ViewComments>
    );
};

Post.ViewPostButton = function CardButton({ classes, children, ...restProps }) {
    return (
        <ViewPost
            type="button"
            className={classNames('card__viewPost', classes)}
            {...restProps}
        >
            {children}
        </ViewPost>
    );
};
