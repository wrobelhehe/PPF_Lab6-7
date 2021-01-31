import React, { Component } from 'react'
import './Info.css'



class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Imię: "",
            Nazwisko: "",
            Hasło: "",
            email: "",
            Płeć: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firstHandler = (item) => {
        this.setState({
            Imię: item.target.value
        })
    }
    lastHandler = (item) => {
        this.setState({
            Nazwisko: item.target.value
        })
    }
    passwordHandler = (item) => {
        this.setState({
            Hasło: item.target.value
        })
    }

    emailHandler = (item) => {
        this.setState({
            email: item.target.value
        })
            }

    genderHandler = (item) => {
        this.setState({
            Płeć: item.target.value
        })
    }

 
    handleSubmit = (item) => {
        alert(`${this.state.Imię} ${this.state.Nazwisko}  Rejestracja przebiegła pomyślnie`)
        console.log(this.state);
        this.setState({
            Imię: "",
            Nazwisko: "",
            Hasło: '',
            email: "",
            Płeć: "",
        })
     item.preventDefault()
        
    }




    render() {
        return (
            

                <form className = "form1" onSubmit={this.handleSubmit}>
                    <h1>Rejestracja</h1>
                   <div className = "container"> <div className= "label"><label>Imię :</label> <div className = "input"><input className="inputImie" type="text" value={this.state.Imię} onChange={this.firstHandler} placeholder="Imię" /></div></div></div><br />
                   <div className = "container"> <div className= "label"> <label>Nazwisko :</label>  <div className = "input"><input className="inputNazwisko" type="text" value={this.state.Nazwisko} onChange={this.lastHandler} placeholder="Nazwisko" /></div></div></div><br />
                   <div className = "container"> <div className= "label"><label>Hasło :</label>  <div className = "input"><input className="inputHaslo" type="password" value={this.state.Hasło} onChange={this.passwordHandler} placeholder="Hasło" /></div></div></div><br />
                   <div className = "container"> <div className= "label"><label>e-mail :</label>  <div className = "input"><input className="inputEmail" type="text" value={this.state.email} onChange={this.emailHandler} placeholder="email" /></div></div></div><br />
                    <div className = "container"> <div className= "label"><label>Płeć :</label></div></div>
                    <div><select onChange={this.genderHandler} defaultValue="Wybierz płeć">
                        <option defaultValue>Wybierz płeć</option>
                        <option value="mężczyzna">Mężczyzna</option>
                   <option value="Kobieta">Kobieta</option>
                    </select></div><br />
                    <div className="btn"><input type="submit" value="Załóż konto" /></div>
                </form>

           
            
        )
    }
}

export default Info