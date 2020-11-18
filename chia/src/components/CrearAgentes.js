import React, { Component } from 'react'
import axios from 'axios'
export default class CrearAgentes extends Component {


    state={
        Vias: []
}

    async   componentDidMount(){
      const res=await  axios.get('http://localhost:4000/api/agentes')
      this.setState({Vias:res.data})

    }
    onSubmit = (e) => {
        e.preventDefault();


    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Agente </h4>
                    {/**Select Agent */}
                    <div className="form group">
                        <select
                        className="fomr-control"
                        name="AgentSelected"
                        onChange={}
                        >
                            {


                            }
                        </select>

                    </div>
                    <form onSubmit={this.onSubmit}>

                        <button type="submit" className="btn btn-primary">
                            Guardar Agente
                        </button>
                    </form>
                </div>
            </div>
        )
    }


}

