import React from 'react'
import Grid from "@material-ui/core/Grid";
import Add from "./add";
import Form from "./form";
import Dell from "./dell"

function genID() {
    return(
        parseInt(Math.random().toString().substring(2, 8)).toString(16)
    )
}

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.addFields = this.addFields.bind(this);
        this.delFields = this.delFields.bind(this);
        this.state = {
            fields: [{
                id: genID(),
                text: ''
            }],
        }
    }
    updateText(id) {
        return event => {
            this.setState({
                fields: this.state.fields.map((item) => {
                    if (item.id === id) {
                        item.text = event.target.value;
                    }
                    return item;
                }),
            })
        }
    };
    addFields() {
        this.setState({
            fields: this.state.fields.concat({id: genID(), text:this.updateText()})
        });
    }
    delFields(id){
        this.setState( {
           fields: this.state.fields.filter(item => item.id !== id)
           })
        });
    }
    render() {
        return (
            <div style={{ padding: 9}}>
                <Grid container spacing={16}>
                    <Grid item xs={2} md={3} >
                        <div style={{ display: 'flex',
                            flexDirection: 'column',
                            marginTop: 25,
                            alignItems: 'flex-end'}} >

                            <Add onClick={this.addFields} />
                        </div>
                    </Grid>

                    <Grid item xs={10} md={6} style={{marginBottom: 150}} >
                        {(this.state.fields.map((_, index) => (
                            <div key={index} style={{display: 'flex', flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
                                <Form/>
                                <Dell onClick={this.delFields}/>
                            </div>
                        )))}{console.log(this.state.fields.indexOf(this.state.fields))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default (FormContainer);
