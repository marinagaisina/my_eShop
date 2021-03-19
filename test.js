const products = [
    {
        name: 'Product#1',
        price: 100,
    },
    {
        name: 'Product#2',
        price: 98,
    },
    {
        name: 'Product#3',
        price: 23,
    },
    {
        name: 'Product#4',
        price: 987,
    }
]

const DEFAULT_LIST = [
    { name: 'Default', price: 999 }
]

const renderProduct = ({ name, price } = DEFAULT_LIST[0]) => {
    return `<li>${name}: $${price}</li>`
}

const renderProductsList = (products = DEFAULT_LIST) => {
    return products.map(p => renderProduct(p)).join('');
}

// window.onload = () => {
//     const $el = document.querySelector('.products-list');
//     $el.innerHTML = `<ul>${renderProductsList(products)}</ul>`
// };
