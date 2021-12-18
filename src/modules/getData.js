const getData = () => {
    return fetch('https://ozontestby-default-rtdb.firebaseio.com/goods.json')
        .then(response => response.json())
        .then(json => console.log(json));

};

export default getData;