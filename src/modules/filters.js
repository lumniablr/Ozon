export const searchFilter = (goods, value) => {
    console.log(goods);
    return goods.filter((goodsItem) => {
        return goodsItem.title.includes(value);
    });
};


export const categoryFilter = (goods, value) => {
    console.log(goods);
    return goods.filter((goodsItem) => {
        return goodsItem.title.includes(value);
    });
};