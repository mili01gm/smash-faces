'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    const update = function() {
        render(root);
    }

    // if (state.selectedStudent == null) {
    //     wrapper.append(Peru(update));
    // } else {
    //     wrapper.append(Mexico(update));
    // }

    if ($('.select')[0].val() === "peru") {
        wrapper.append(Peru(update));
    } else if ($('.select')[0].val() === "mexico") {
        wrapper.append(Mexico(update));
    }

    root.append(wrapper);
};

const state = {
    student: student,
    selectedStudent: null
}


$(_ => {

    getJSON('peru.json', (err, json) => {

        if (err) { return alert(err.message); }

        state.students = json;

        const root = $('.root');
        render(root);
    });

});

$(_ => {

    getJSON('mexico.json', (err, json) => {

        if (err) { return alert(err.message); }

        state.students = json;

        const root = $('.root');
        render(root);
    });

});