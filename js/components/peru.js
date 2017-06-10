'use strict';

const Peru = (update) => {
    const container = $('<section class="container-fluid"></section>');
    const row = $('<div class="row"></div>');
    const col5 = $('<div class="col-md-5"></div>');
    const col7 = $('<div class="col-md-7"></div>');
    const img = $('<img href="img/peru/' + state.selectedStudent.image + '" class="">');
    const form = $('<form class="form"></form>');
    const formGroup = $('<div class="form-group"></div>');
    const label = $('<label>Cuál es el nombre de esta coder?</label>');
    const input = $('<input type="text" class="form-control" placeholder="Nombre">');
    const button = $('<button type="submit" class="">Comprobar</button>');


    col5.append(img);
    col7.append(form);

    row.append(col5);
    row.append(col7);

    container.append(row);



    return container;
}