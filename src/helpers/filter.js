import PropTypes from 'prop-types';

const filterByUserAttributes = (data, query) => {
    return data.filter((dataItem, index) => {
        if (typeof dataItem.user === 'undefined') {
            throw new Error('user not set');
        }
        return Object.values(dataItem.user).filter(item => {
            if (typeof item === 'object') {
                return getValues(item, '').toString().indexOf(query) !== -1;
            } else if (typeof item === 'string') {
                return item.toString().indexOf(query) !== -1;
            } else {
                return false;
            }
        }).length > 0;
    });
};

const getValues = (data, string) => {
    Object.values(data).forEach(item => {
        if (typeof item === 'object') {
            string += ' ' + getValues(item, '') + ' ';
        } else if (typeof item === 'string') {
            string += ' ' + item + ' ';
        }
    });
    return string;
};
filterByUserAttributes.propTypes = {
    data: PropTypes.exact({
        userId: PropTypes.string,
        id: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        user: PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            username: PropTypes.string,
            email: PropTypes.string,
            address: PropTypes.shape({
                street: PropTypes.string,
                suite: PropTypes.string,
                city: PropTypes.number,
                zipcode: PropTypes.number,
                geo: PropTypes.shape({
                    lat: PropTypes.string,
                    lng: PropTypes.string,
                }),
            }),
        }).isRequired,
        comments: PropTypes.exact({
            postId: PropTypes.number,
            id: PropTypes.number,
            name: PropTypes.string,
            email: PropTypes.string,
            body: PropTypes.string,
        }),
    }).isRequired,
    query: PropTypes.string.isRequired,
};

export {filterByUserAttributes};
