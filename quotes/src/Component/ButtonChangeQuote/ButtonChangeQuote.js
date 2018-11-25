import React, { Component } from "react";


class ButtonChangeQuote extends Component {



    render() {
        return (
            <div>
                <button className="btn btn-outline-warning btn-lg" 
                    onClick={this.mudaFrase}>Gerar Frase</button>
            </div>
        );
    }
}

export default ButtonChangeQuote;