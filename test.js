// const products = [
//     {
//         name: 'Product#1',
//         price: 100,
//     },
//     {
//         name: 'Product#2',
//         price: 98,
//     },
//     {
//         name: 'Product#3',
//         price: 23,
//     },
//     {
//         name: 'Product#4',
//         price: 987,
//     }
// ]

const DEFAULT_PRODUCT = {
    name: 'Default',
    price: 999
}

const renderProduct = ({ name, price } = DEFAULT_PRODUCT) => {
    return `<li>${name}: $${price}</li>`
}

const renderProductsList = (products = []) => {
    return products.map(p => renderProduct(p)).join('');
}

window.onload = () => {
    const $el = document.querySelector('.goods-list');
    $el.innerHTML = `<ul>${renderProductsList()}</ul>`
};
