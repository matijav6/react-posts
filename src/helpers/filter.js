const filterByAllAttributes = (data, attribute) => {
    return data.filter(post => {
        return Object.values(post).filter(item => {
            return item.toString().indexOf(attribute) !== -1
        }).length > 0;
    });
};
export {filterByAllAttributes};
