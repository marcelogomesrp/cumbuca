import React from 'react';
import './custom.css';
import acai from '../assets/acai.jpg';
import caldos from '../assets/caldos.jpg';
import picole from '../assets/picole.jpg';


export default function ToolBar() {

    return (
        <div>
            <div>
                <h1>Cardapio</h1>
                <h2>Açaí</h2>
                <img src={acai} className="App-acai img-cardapio" alt="acai" />
                <h2>Caldos</h2>
                <img src={caldos} className="App-caldos img-cardapio" alt="caldos" />
                <h2>Picolé</h2>
                <img src={picole} className="App-picole img-cardapio" alt="picole" />
            </div>
            <div>
                <h2>Açaí</h2>
                <ul>
                    <li>Açaí No Copo 350 Ml (Com 3 Acompanhamentos Grátis)</li>
                    <li>Açaí No Copo 500 Ml (Com 3 Acompanhamentos Grátis)</li>
                    <li>Açaí No Copo 700 Ml (Com 3 Acompanhamentos Grátis)</li>
                    <li>Açaí Na Cumbuca 200 Ml (Açaí Puro)</li>
                    <li>Açaí Na Cumbuca 300 Ml (Açaí Puro)</li>
                    <li>Açaí Na Cumbuca 500 Ml (Açaí Puro)</li>
                    <li>Pote Tamanho Família De 1.000 Ml De Açaí sem acompanhamentos</li>
                    <li>Pote de Tamanho Família de 1.000 Ml De Açaí Com 3 Acompanhamentos</li>
                    <li>Cascão de Açaí</li>
                    <li>Barca Pequena de Açaí Com 5 acompanhamentos</li>
                    <li>Taça Trufada De Açai Com Creme de Avelã</li>
                </ul>
            </div>
            <div>
                <h2>Caldos</h2>
                <ul>
                    <li>Caldo De Mandioquinha Com Calabresa E Bacon</li>
                    <li>Caldo De Mandioquinha Com Alho Poró</li>
                    <li>Caldo De Mandioca Com Frango</li>
                    <li>Caldo De Mandioca Com Costela</li>
                    <li>Caldo De Feijão Com Bacon</li>
                </ul>
            </div>
            <div>
                <h2>Picolé</h2>
                <h3>Com leite</h3>
                <ul>
                    <li>Chocolate</li>
                    <li>Coco</li>
                    <li>Leite Condensado</li>
                    <li>Milho - Verde</li>
                    <li>Morango</li>
                </ul>
                <h3>Com água</h3>
                <ul>
                    <li>Cupuaçu</li>
                    <li>Abacaxi</li>
                    <li>Cajá - Manga</li>
                    <li>Framboesa</li>
                    <li>Uva</li>
                    <li>Limão</li>
                    <li>Mini - Saia</li>
                    <li>Picolé Bombom Skimo</li>
                </ul>
            </div>
        </div>
    );

}

/*

Caldos





Picolé

Com leite

• Chocolate
• Coco
• Leite Condensado
• Milho - Verde
• Morango

Com água

Cupuaçu
Abacaxi
Cajá - Manga
Framboesa
Uva
Limão
Mini - Saia
Picolé Bombom Skimo


*/