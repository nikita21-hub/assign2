
	
	
	function add(){
	

			var table =document.getElementById("table"),
			newRow=table.insertRow(table.length),


			cell1=newRow.insertCell(0),
			cell2=newRow.insertCell(1),
			cell3=newRow.insertCell(2),
			cell4=newRow.insertCell(3),
			cell5=newRow.insertCell(4),
			cell6=newRow.insertCell(5),
			cell7=newRow.insertCell(6),
			cell8=newRow.insertCell(7),			


			
 fname = document.getElementById('fname').value;
			 iname = document.getElementById('iname').value;
			 cgpa = document.getElementById('cgpa').value;
			 side = document.getElementById('side').value;
			 address= document.getElementById('address').value;
			emailid = document.getElementById('emailid').value;
			male = document.getElementById("male").value;
    female = document.getElementById("female").value;
    other= document.getElementById("other").value;


				 if (document.getElementById('male').checked) {
     g = document.getElementById('male').value;
    }else if (document.getElementById('female').checked) {
    g = document.getElementById('female').value;
  } else if (document.getElementById('other').checked) {
    g = document.getElementById('other').value;
  }

  		 cell1.innerHTML = dateTime; 
		cell2.innerHTML =fname;
		cell3.innerHTML =iname;
		cell4.innerHTML =cgpa;
		cell5.innerHTML =side;
		cell6.innerHTML =address;
		cell7.innerHTML =emailid;
		 cell8.innerHTML = g;
		

		
			
		
alert("succeful");
		


	}

	function validation(){

	var fname = document.getElementById('fname').value;
			var iname = document.getElementById('iname').value;
			var cgpa = document.getElementById('cgpa').value;
			var side = document.getElementById('side').value;
			var address= document.getElementById('address').value;
			var emailid = document.getElementById('emailid').value;
			
			var atposition=emailid.indexOf("@");  



			if(fname ==""){
				alert("Please fill the field" ); 
			}
			 else if(!isNaN(fname))
			{

				alert(" Only charcters are allowed ");
			}

			 else if(iname == "")
			{	alert("Please fill School Name  ");
				
			}
			 else if(iname.length >= 10 )
			{	alert("Please fill full school name  ");
				
			
			}


			 else if(cgpa == ""){
			 	alert(" Please fill the Marks field  ");
				
			}
			 else if(isNaN(cgpa))
			{	alert(" Only Numbers are allowed ");
				

			}
			else if( cgpa.length!=2){
			 	alert(" Marks must be in 2 digit ( % ) ");
				
			}


			else if(address == ""){	
				alert("Please fill the address  ");
				
			}


			 else if(emailid == ""){
			 	alert(" Please fill the Active Email ");
				
			}
				
			 else if( atposition<1)
			{	alert(" @ Invalid Position ");
				
			}
			 else 
			{	alert(" Your form is valid. You can submit it now. ");
				
			}
			
			

		}
		


function reg11() {
  var x = document.getElementById("tab");
  var y = document.getElementById("main");
  var z = document.getElementById("registration-table");
    
    x.style.display  ="block";
    y.style.display = "none";
    z.style.display = "none";
   
}

function registertab() {
  var a = document.getElementById("registration-table");
  var b = document.getElementById("main");
  var c = document.getElementById("tab");

   a.style.display ="block";
   b.style.display = "none";
    c .style.display = "none";
}
  
function home123() {
  var a1 = document.getElementById("main");
  var b1 = document.getElementById("registration-table");
  var c1 = document.getElementById("tab");

   a1.style.display ="block";
   b1.style.display = "none";
    c1 .style.display = "none";
}
		
		table = document.getElementById("table");

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();   //calculate current date and time
 var dateTime = date+' '+time;