class Controller {
	constructor(items) {
		this.items = items;
		this.vector_generated = [];
	}

	getLength(){
		return this.vector_generated.length;
	}

	getAllItems() {
		return this.items;
	}

	makeVectorOfItems(n, Weight, Prices) {
		let vectorItems = [];
		for (var i = 0; i < n; i++)
			vectorItems.push([i, Weight[i], Prices[i]]);
		return vectorItems;
	}

	random(n) {
		let v = [];
		for (var i = 0; i < n; i++)
			v.push(0);
		let d = Math.pow(2, n) - 1;
		let number = Math.floor(Math.random() * d);
		var i = 0;
		while (number) {
			let bit_number = parseInt(number) % 2;
			v[i] = bit_number;
			number = parseInt(number / 2);
			i++;
		}
		v.reverse();
		return v;
	}

	countVector(x, v, n) {
		let c = 0;
		for (var i = 0; i < n; i++) {
			c += v[i][1] * x[i];
		}
		return c;
	}

	fitnessVector(x, v, n) {
		let w = 0;
		for (var i = 0; i < n; i++) {
			w += v[i][2] * x[i];
		}
		return w;
	}

	generate(k, n, vector, maxim) {
		let x = this.random(n), f1 = this.fitnessVector(x, vector, n),
			c = this.countVector(x, vector, n),
			bestF = f1, bestX = x, minc = c,
			maximAux = maxim;
		let v = this.vector_generated;
		v.push([minc, bestF]);

		for (var i = 0; i < k; i++) {
			x = this.random(n);
			var j;
			for (j = 0; j < x.length; j++) {
				if (x[j] == 0) {
					x[j] = 1;
				}
				else x[j] = 0;
				f1 = this.fitnessVector(x, vector, n);
				c = this.countVector(x, vector, n);
				if (f1 > bestF && f1 < maxim) {
					bestF = f1;
					maxim = maxim - f1;
					minc = c;
				}
			}
			maxim = maximAux;
		}
		return v;
	}
}