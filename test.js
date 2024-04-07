
function getCartTotalPrice(cart){
	let total = 0.0;
	
	for (item in cart){
		if (cart[item] != null){
			total += cart[item].count * cart[item].price;
		}
		else  {
			console.warn(`${item}: ${cart[item]}`);
		}
	}
	
	return total;
}


let cart1 = {
	'apple':{
		'count':2,
		'price':0.2
	},
		'orange':{
		'count':1,
		'price':0.4
	},
		'banana':{
		'count':7,
		'price':0.2
	},
	null: null
}

let cart2 = {
	'apple':{
		'count':3,
		'price':0.2
	},
		'orange':{
		'count':2,
		'price':0.4
	}
}


console.log(getCartTotalPrice(cart1));
console.log(getCartTotalPrice(cart2));