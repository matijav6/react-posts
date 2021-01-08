const filterByUserAttributes = (data, query) => {
    return data.filter(dataItem => {
        return Object.values(dataItem.user).filter(item => {
            if (typeof item === 'object') {
                return getValues(item, '').toString().indexOf(query) !== -1;
            } else {
                return item.toString().indexOf(query) !== -1
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
export {filterByUserAttributes};
