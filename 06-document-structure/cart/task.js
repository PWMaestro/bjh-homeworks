class Product {
	constructor( container ) {
		this.id = container.dataset.id;
		this.title = container.querySelector('.product__title');
		this.image = container.querySelector('.product__image');
		this.controls = new Controls( container.querySelector('.product__controls') );

		this.registerEvents();
	}

	registerEvents() {
		this.controls.btnAdd.addEventListener('click', event => {
			const img = document.createElement('img');
			img.classList.add('cart__product-image');
			img.setAttribute(
				'src',
				this.image.getAttribute('src')
			);

			const count = document.createElement('div');
			count.classList.add('cart__product-count');
			count.innerText = this.controls.quantity.textContent.trim();

			const cartProduct = document.createElement('div');
			cartProduct.classList.add('cart__product');
			cartProduct.dataset.id = this.id;
			cartProduct.appendChild(img);
			cartProduct.appendChild(count);

			cart.add( cartProduct );
		});
	}
}

class Controls {
	constructor( container ) {
		this.quantity = container.querySelector('.product__quantity-value');
		this.btnInc = container.querySelector('.product__quantity-control_inc');
		this.btnDec = container.querySelector('.product__quantity-control_dec');
		this.btnAdd = container.querySelector('.product__add');

		this.registerEvents();
	}

	registerEvents() {
		this.btnInc.addEventListener('click', event => {
			let number = Number(this.quantity.textContent.trim());
			this.quantity.textContent = ++number;
		});

		this.btnDec.addEventListener('click', event => {
			let number = Number(this.quantity.textContent.trim());
			if (number > 1) {
				this.quantity.textContent = --number;
			}
		});
	}
}

class Cart {
	constructor( container ) {
		this.title = container.querySelector('.cart__title');
		this.products = container.querySelector('.cart__products');
	}

	checkTheSame( item ) {
		const products = Array.from( this.products.children );
		for (let prod of products) {
			if (prod.dataset.id === item.dataset.id) {
				return prod;
			}
		}
		return null;
	}

	add( product ) {
		const checkedProd = this.checkTheSame( product );
		if ( checkedProd ) {
			const addedQuantity = Number(
				product
				.querySelector('.cart__product-count')
				.textContent
			);

			const oldQuantity = Number(checkedProd
				.querySelector('.cart__product-count')
				.textContent
			);

			checkedProd.querySelector('.cart__product-count')
				.textContent = 
					oldQuantity + addedQuantity;

		} else {
			this.products.appendChild( product );
		}
	}
}

const cart = new Cart( document.querySelector('.cart') );
const products = Array.from(
		document.getElementsByClassName('product')
	)
	.map( item => new Product( item ) );
