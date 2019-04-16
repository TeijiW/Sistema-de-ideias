import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial/index';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction/index';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'


/*********************AQUI É O BOTÃO DE IMPRIMIR OU EXCLUIR FORMULÁRIO***********************/

const actions = [
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDials extends React.Component {
    state = {
        direction: 'up',
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({
            open: !state.open,
        }));
    };

    render() {
        const { direction, open } = this.state;

        return (
            <div>
                <SpeedDial
                    ariaLabel="set"
                    icon={<EditIcon/>}
                    onClick={this.handleClick}
                    open={open}
                    direction={direction}
                >
                    {actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={this.handleClick}
                        />
                    ))}
                </SpeedDial>
            </div>
        );
    }
}
;

export default SpeedDials;