'use strict';

const Header = () => {
    const header = $('<header class="header"></header>');
    const h1 = $('<h1>Smash Faces</h1>');
    const divLine = $('<div class="divider"></div>');
    const p = $('<p>Bienvenida a Smash Face! Tu misión: identificar a tus compañeras de Laboratoria. Tienes 5 intentos para adivinar el nombre de cada una. Si aciertas tienes 5 puntos, si fallas es un punto menos. Suerte!</p>');
    const formInline = $('<form clas="form-inline"></div>');
    const formGroup = $('<div class="form-group"></div>');
    const label = $('<label>Elige tu sede</label>');
    const select = $('')


    header.append(h1);
    header.append(divLine);
    header.append(p);

    return header;
}