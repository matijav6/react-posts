import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Text, TotalComments, User } from './PostStyle';

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

Post.User = function CardUser({ classes, children, ...restProps }) {
    return (
        <User className={classNames('card__user', classes)} {...restProps}>
            {children}
        </User>
    );
};

Post.TotalComments = function CardTotalCount({ classes, children, ...restProps }) {
    return (
        <TotalComments className={classNames('card__totalComments', classes)}{...restProps}>
            {children}
        </TotalComments>
    );
};
