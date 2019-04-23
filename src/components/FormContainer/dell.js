import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function ButtonSizes({ onClick }) {

    return (
        <div onClick={ onClick }>
            <IconButton aria-label="Delete"
                        style={{display:'flex', alignItems:'flex-end',justifyContent:'center', marginTop: 20}}>
                <DeleteIcon fontSize="small"/>
            </IconButton>
        </div>
    );
}
export default ButtonSizes;