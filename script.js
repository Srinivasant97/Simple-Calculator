
function printoutput(O){
	document.getElementById("output").innerHTML = O
}

function printHistory(O){
	document.getElementById("result-history").innerHTML=O
}

Output=""
History=""
But = document.querySelectorAll('button')
open=true


But.forEach(butto => {
	butto.addEventListener('click', () =>{
		if(butto.className == "number"){
			value= butto.value.toLocaleString()
			Output= Output+value 
			printoutput(Output)
		}	

		if(butto.className== "delete"){
			if(butto.value=="clear"){
				Output=""
				History=""
				printoutput(Output)
				printHistory(History)
			}		
			if(butto.value=="backspace"){
				console.log(Output)
				Output=Output.substr(0,Output.length-1)
				printoutput(Output)
			}

		}




		if(butto.className== "operator"){
			value=butto.value.toLocaleString()
			
			if(isNaN(value) && Output==""){
				History=History.substr(0,History.length-1)+value
			}
			else{
				History=History+Output+value
			}
			
			printHistory(History)
			printoutput("")
			Output=""

			if (butto.value == "="){
				if (History!="="){
					result= History.substr(0,History.length-1)
					result=eval(result)
				}	
				else{
					result=""
				}
				printoutput(result)
				Output=result
				printHistory("")
				History=""
				
				
			}
			

		}
		
	
	}
	)
})



















