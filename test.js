let data = {}
		let count = 1;
		let key = null;
		let arr = [1,
		2,
		10,
		"kishor",
		"test",
		{
			a:
			{ b:function(){}
			, c:"Hello",d:{name:"kishor"} 
		},
		f:
		{name:"kishor"}
		}];
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
				let inner = {} ;
				// let c = 1 ;
				// let In = 1 ;
				for(let i in obj){
					// this is to see how loop iterate 
					// console.log(c+" - iteration");
					// console.log(i);
					// console.log(typeof(obj[i]));
					let  datacopy = obj[i];

					data[`key`] = i;
					for ( let k in datacopy){
						// console.log("["+c+"]"+"["+In+"] -  iteration ");
						// console.log (k)
						inner[`key`] = k ;
						inner[`value`] = (obj[i][k]) ;
						data[`Value-${k}`] = inner ;
						// console.log(data);
						inner = {};
						// In  ++;
					}
					res.push(data);
					data = {};
					// c ++;
					// In = 1 ;
				}
				
			}else{

			}
			// alert(arr[a]);
		}
		console.log(arr);
		console.log("----------------------------------------------------------------");
		console.log(res);