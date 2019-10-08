import React from 'react'


class Validador extends React.Component {
    state = {

        name: ''
    }

    handleSubmit(evet) {
        evet.preventDefault()

        if (/^([0-9])*$/.test(evet.target[0].value)) {

            this.setState({

                name: evet.target[0].value

            })
        }
        else {
            this.setState({

                name: 'El dato ingresado no es un numero'

            })
            setTimeout(() => {
                this.setState({

                    name: ''

                })
            }, 3000)

        }
        evet.target.reset()


    }
    handleChange(e) {

    }
    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
         <p> El numero ingresado es: {this.state.name}</p>
            <input   name="nombre" id="nombre" type="text" />
            <button type="submit">Enviar</button>
        </form>
        </div>
        )
    }
}
export default Validador
