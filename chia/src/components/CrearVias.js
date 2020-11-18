import React, { Component } from 'react'
import axios from 'axios'
export default class CrearVias extends Component {
    state = {
        vias: [],
        id: '',
        tipo: '',
        cllokr: '',
        numero: '',
        congestio: ''

    }
    async componentDidMount() {
        this.getVias();

        console.log(this.state.vias)


    }
    getVias = async () => {
        const res = await axios.get('http://localhost:4000/api/Vias/');
        this.setState({ vias: res.data });
    }
    onChangeId = async e => {
        this.setState({
            id: e.target.value,
            tipo: e.target.value,
            cllokr: e.target.value,
            numero: e.target.value,
            congestio: e.target.value

        })


    }
    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/Vias/', {
            id: this.state.nombre,
            tipo: this.state.nombre,
            cllokr: this.state.nombre,
            numero: this.state.nombre,
            congestion: this.state.nombre
        })
        this.setState({ id: '', tipo: '', cllokr: '', numero: '', congestion: '' });
        this.getVias();
    }
    deleteAgente = async id => {
        await axios.delete('http://localhost:4000/api/Vias/' + id);
        this.getVias()


    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Nueva Via </h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">

                                <input type="number"
                                    className="form-control"
                                    value={this.setState.id}
                                    onChange={this.onChangeId} />
                                <input type="text"
                                    className="form-control"
                                    value={this.setState.id}
                                    onChange={this.onChangeId} />
                                <input type="text"
                                    className="form-control"
                                    value={this.setState.id}
                                    onChange={this.onChangeId} />

                                <input type="Numero"
                                    className="form-control"
                                    value={this.setState.id}
                                    onChange={this.onChangeId} />

                                <input type="numero"
                                    className="form-control"
                                    value={this.setState.id}
                                    onChange={this.onChangeId} />


                            </div>
                            <button type="submit" className="btn btn-primary">Guardar</button>

                        </form>
                    </div>

                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.vias.map(vias => (
                                <li className="list-group-item list-group-item-action"
                                    key={vias._id}
                                    onDoubleClick={() => this.deleteAgente(vias._id)}
                                >

                                    {vias.id},
                                    {vias.tipo},
                                    {vias.cllokr},
                                    {vias.numero},
                                    {vias.congestion}


                                </li>
                            ))
                        }



                    </ul>
                </div>
            </div>
        )
    }
}
