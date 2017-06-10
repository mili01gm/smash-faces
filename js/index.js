'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    root.append(wrapper);
};

// const state = {
//     country: country,
//     selectedCountry: null
// }


$(_ => {

    //   getJSON('stations.json', (err, json) => {

    //     if (err) { return alert(err.message);}

    //     state.stations = json;

    const root = $('.root');
    render(root);
    //   });

});