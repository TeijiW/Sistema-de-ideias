import React from 'react';
import Fab from '@material-ui/core/Fab/index';
import AddIcon from '@material-ui/icons/Add';

/*************AQUI É O BOTÃO DE ADICIONAR CAMPOS AO FORMULÁRIO*******************/

function FloatingActionButtons({ onClick }) {

    return (
            <Fab onClick={onClick} size="medium" color="primary" aria-label="Add">
                <AddIcon />
            </Fab>
    );
}

export default FloatingActionButtons;
