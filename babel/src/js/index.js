import '../css/index.css';
/*
import text from './text';
import search from './search';
import render from './render';
*/

/*
const id = prompt('quien es ese pokemon');

//text();


if (module.hot) {
    module.hot.accept('./text.js', function() {
        console.log('he recardo en caliente');
        text();
    } )
}


search(id)
.then((data) =>{
    render(data);

})
.catch(() => {
    console.log('no hubo pokemon')
})
*/

/* REACT EJERCICIOS */
import { render } from 'react-dom';
import React from 'react';
import App from './components/app'
render(<App></App>, document.getElementById('container'));
