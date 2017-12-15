// test/test1/test1.js

Page({
	data: {
		sortData: [{
			name: "AA",
			product: [{
				name: "a1",
				price: 20
			}, {
				name: "a2",
				price: 10
			}, {
				name: "a3",
				price: 21
			}, {
				name: "a4",
				price: 5
			}]
		}, {
			name: "BB",
			product: [{
				name: "b1",
				price: 206
			}, {
				name: "b2",
				price: 2
			}, {
				name: "b3",
				price: 15
			}]
		}, {
			name: "CC",
			product: [{
				name: "c1",
				price: 2
			}, {
				name: "c2",
				price: 35
			}, {
				name: "c3",
				price: 14
			}, {
				name: "c4",
				price: 33
			}]
		}],
		sortIdx: 0,
		payment: 0,
		amount: 0
	},
	switchSort: function(e){
		var idx = e.currentTarget.dataset.index;
		this.setData({
			sortIdx: idx
		});
	},
	changeCount: function(e){
		var sort = this.data.sortData,
			type = e.currentTarget.dataset.type * 1,
			idx = e.currentTarget.dataset.idx.split(','),
			sidx = idx[0],
			pidx = idx[1],
			countTemp = 'sortData[' + sidx + '].product[' + pidx + '].count',
			sortCountTemp = 'sortData[' + sidx + '].count',
			count = sort[sidx].product[pidx].count,
			sortCount = sort[sidx].count,
			price = sort[sidx].product[pidx].price,
			payment = this.data.payment,
			amount = this.data.amount;
		count = count ? (count + type) : 1;
		sortCount = sortCount ? (sortCount + type) : 1;
		payment = payment + (price * type);
		amount = amount + type;
		this.setData({
			[countTemp]: count,
			[sortCountTemp]: sortCount,
			payment: payment,
			amount: amount
		});
	}
})