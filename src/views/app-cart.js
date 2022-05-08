import {LitElement, html, css} from 'lit';
import {Base} from '../Base';

import { deleteCart } from '../api/products';


export class AppCart extends Base {
    constructor() {
        super();
        this.products = [];
    }

    static get properties() {
        return {
            products: {type: Array}
        }
    }
    render() {
        return this.products.map((cart) => html`
            <div class="card">
                <header>
                    <figure>
                        ${console.log(cart.image)}
                        <img src="${cart.image}" alt="${cart.title}" loading="lazy">
                    </figure>
                </header>
                <main>
                    <h1>${cart.title}</h1>
                    <p>${cart.description}</p>
                    <p>${cart.quantity}</p>
                </main>
                <button @click="${() => deleteCart(this.product)}>delete from cart</button>
                <label>Choose quantity :</label>
                <input type="number" name="quantity" value="quantity"/>
            </div>
        `);
    }
}

customElements.define('app-cart', AppCart);
