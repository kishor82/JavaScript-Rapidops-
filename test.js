let data = {}
		let count = 1;
		let key = null;
		let arr = [
		1,
		2,
		10,
		"kishor",
		"test",
		{
			a:{
				b:function(){},
				c:"Hello",
				d:10
			}
		}
		];
		let res=[];
		console.log(typeof(arr[5]));
		for(a in arr){

			if(typeof(arr[a]) == 'number' ){
				data["key"] = arr[a] ;
				data["count"] =  arr[a] + count;
				count ++ ;
				res.push(data);
				data = {};
			}else if(typeof(arr[a]) == 'string' ){
				data["key"] = arr[a] ;
				data["NAME"] =  arr[a] 
				res.push(data);
				data = {};
			}else if(typeof(arr[a] ) == 'object' ){
				key =arr[a] ;
				data[key] = Object.keys(arr[a]);
			}else{
				alert("sorry");
			}
			// alert(arr[a]);
		}

		console.log(res);