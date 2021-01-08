import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, Author } from './CommentStyle';

export const Comment = ({classes, children, ...restProps}) => {
    return (
        <Container className={classNames('comment', classes)} {...restProps}>
            {children}
        </Container>
    );
};


Comment.Body = function CommentBody({ classes, children, ...restProps }) {
    return (
        <Body className={classNames('comment__body', classes)} {...restProps}>
            {children}
        </Body>
    );
};

Comment.Title = function CommentTitle({ classes, children, ...restProps }) {
    return (
        <Title className={classNames('comment__title', classes)} {...restProps}>
            {children}
        </Title>
    );
};

Comment.Text = function CommentText({ classes, children, ...restProps }) {
    return (
        <Text className={classNames('comment__text', classes)} {...restProps}>
            {children}
        </Text>
    );
};

Comment.Author = function CommentAuthor({ classes, children, ...restProps }) {
    return (
        <Author className={classNames('comment__author', classes)} {...restProps}>
            {children}
        </Author>
    );
};
