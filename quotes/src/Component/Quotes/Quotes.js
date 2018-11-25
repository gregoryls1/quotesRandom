import React, { Component } from "react";

import './Quotes.css'


class Quotes extends Component {
    constructor(props) {
        super(props);
        this.json_data = require("./../../frases.json");
        this.state = {
          frase: "..."
        }
    
        this.gerarFrase();
      }
    
      geraNumeroInteiro(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
    
      mudaFrase = event => {
        let fraseGenerator = this.todasFrases[this.geraNumeroInteiro(0, this.json_data.length)];
        this.setState({
          frase: fraseGenerator
        });
      };
    
      gerarFrase = () => {
        const totalFrases = this.json_data;
    
        this.todasFrases = totalFrases.map(frases => frases.frase);
      };
    


    render() {
        return (
            <div className="text-center">
                <div className="quotes">
                    <div className="quotesContent">
                        <p>{this.state.frase}</p>
                    </div>
                </div>
                <button className="btn btn-outline-warning btn-lg" 
                    onClick={this.mudaFrase}>Gerar Frase</button>
            </div>
        );
    }
}

export default Quotes;