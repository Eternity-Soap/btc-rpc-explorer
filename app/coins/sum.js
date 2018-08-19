var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"Sumcoin",
	logoUrl:"/img/logo/sum.svg",
	siteTitle:"Sumcoin Explorer",
	nodeTitle:"Sumcoin Full Node",
	nodeUrl:"https://sumexplorer.com/",
	demoSiteUrl: "https://sumexplorer.com",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/hashstream/pools/master/pools.json",
	],
	maxBlockWeight: 4000000,
	currencyUnits:[
		{
			name:"SUM",
			multiplier:1,
			default:true,
			values:["", "sum", "SUM"],
			decimalPlaces:8
		},
		{
			name:"mSUM",
			multiplier:1000,
			values:["mSUM"],
			decimalPlaces:5
		},
		{
			name:"uSUM",
			multiplier:1000000,
			values:["uSUM"],
			decimalPlaces:2
		},
		{
			name:"sigma",
			multiplier:100000000,
			values:["sigma", "sig"],
			decimalPlaces:0
		}
	],
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHash: "8f4af36aa0bdb9ae5a34d191bcbd80748569e4ef2e47587f0a3f5749dde17eea",
	genesisCoinbaseTransactionId: "ccd37098b85fc0f190dc74b18c0d6a42f52ac8833348d6ff3663489fc66e31e2",
	genesisCoinbaseTransaction: {
		"txid":"ccd37098b85fc0f190dc74b18c0d6a42f52ac8833348d6ff3663489fc66e31e2",
		"hash":"ccd37098b85fc0f190dc74b18c0d6a42f52ac8833348d6ff3663489fc66e31e2",
		"blockhash":"8f4af36aa0bdb9ae5a34d191bcbd80748569e4ef2e47587f0a3f5749dde17eea",
		"version":1,
		"locktime":0,
		"size":253,
		"vsize":253,
		"time":1523718257,
		"blocktime":1523718257,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d0104404e592054696d65732030352f4f63742f32303131205374657665204a6f62732c204170706c65e280997320566973696f6e6172792c2044696573206174203536"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"hex":"041880a07bac6e19ba6da66aec00cd7b824bccaeec805b84bd29941b13d31246dafb2d2914984b7080a34e8c9f51a6baf2c1fa3b48fc5eea80d8359ac9276dc17d",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"Unknown"
					]
				}
			}
		]
	},
	historicalData: [
		{
			type: "blockheight",
			date: "2011-10-07",
			blockHeight: 101332,
			blockHash: "628d0da596ca299bb354dbe717f1755a34c9b800b997b4eccfc8791a5e926726",
			summary: "This block marks the beginning of the segwit activation period",
			alertBodyHtml: "This block marks the beginning of the segwit activation period",
			referenceUrl: ""
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Litecoin/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				// return responseBody[0].price_usd;
				return "Coming soon";
			}
			
			return -1;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 1000000);

		return eras[index];
	}
};