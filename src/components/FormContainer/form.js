import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import TextField from '@material-ui/core/TextField/index';

const styles = theme => ({
    container: {
        marginTop: 20,
        flexWrap: 'wrap',
        display: 'flex',
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },

});

class OutlinedTextFields extends React.Component {
    state = {
        name: 'Cat in the Hat',
        multiline: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-multiline-flexible"
                    label="Deposite sua deia aqui!"
                    value={this.state.multiline}
                    multiline
                    fullWidth
                    rowsMax="10"
                    onChange={this.handleChange('multiline',)}
                    className={classes.textField}
                    variant="outlined"
                />
            </form>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);