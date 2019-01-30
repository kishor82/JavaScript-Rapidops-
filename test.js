let data = {}
let count = 1;
let key = null;
let arr = [1,2,10,"kishor", "test",{a:{ b:function(){}, c:"Hello",d:10 } } ];
let res=[];

for(a in arr){

	if(typeof(arr[a]) == 'number' ){
		data["key"] = arr[a] ;
		data["count"] =  arr[a] + count;
		count ++ ;
		res.push(data);
		data = {};
	}else if(typeof(arr[a]) == 'string' ){
		data["key"] = arr[a] ;
		data["name"] =  arr[a] 
		res.push(data);
		data = {};
	}else if(typeof(arr[a] ) == 'object' ){
		let obj = arr[a];
		for(let i in obj){
			let  datacopy = obj[i];
			data["key"] = Object.keys(obj);
			for ( let k in datacopy){
				data["subkey"] = k ;
				data["subValue"] = (obj[i][k]) ;
				res.push(data);
				data = {};
			}
		}
	}else{
			return console.log("What Happened ??!");
	}
			// alert(arr[a]);
		}

		console.log(res);
		console.log(arr[5]);
		