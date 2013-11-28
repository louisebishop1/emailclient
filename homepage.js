// JavaScript Document//

//CHECK PASSWORDS//
function checkPassword() {
var minLength = 4; 
var pw = document.registerForm.password.value;
var pw1 = document.registerForm.password1.value;
var spaces = " "; 
if (pw == '' || pw1 == '') {
	alert('Please ensure your password is entered into both boxes');
return false;}
if (document.registerForm.password.value.length < minLength) {
	alert('Please enter a password containing more than ' + minLength + ' characters');
return false;}
if (document.registerForm.password.value.indexOf(spaces) > -1) {
	alert("Please enter a password with no spaces.");
return false;}
if (pw != pw1) {
	alert ("Please check that you have entered the same password twice");
return false;}
re = /[0-9]/;
if (!re.test(pw || pw1)) {
	alert("Please ensure your password contains at least one number");
return false;}
if (pw == pw1){
	alert('You are now registered');
return true;}
}
// END OF CHECK PASSWORDS //

// LOG IN //
var	xhr2 = null;
var user = window.name;
function logIn(url2){
	var userName1 = document.getElementById('userName1').value;
	window.name = userName1;
	var pWord1 = document.getElementById('password2').value;
	var url2 = "http://itsuite.it.brighton.ac.uk/leb17/checkuser.php?userID="+userName1+"&passWD="+pWord1;
	if (window.ActiveXObject){
		xhr2 = new ActiveXObject("Microsoft.XMLHTTP");} 
		else if (window.XMLHttpRequest){
			xhr2 = new XMLHttpRequest(); 
			}
			if (xhr2!=null){
				xhr2.onreadystatechange=Response2;
				xhr2.open("GET",url2, true);
				xhr2.send(null)
				}
					}
function Response2(){
	if (xhr2.readyState==4){
		if (xhr2.status==200){
			var response2=xhr2.responseText;
			alert(response2);
			if (response2 == "Login Sucessful"){
				
				document.location="inbox.html";
				}
				else{""}
}
}
}

// END OF LOG IN //

function Logout() {
	window.location="test.html"
}

// REGISTER NEW USER //
var	xhr=null;	
function registerUser(url){
	var userName = document.getElementById('userName').value;
	var firstName = document.getElementById('fname').value;
	var surName = document.getElementById('sname').value;
	var pWord = document.getElementById('password').value;
	var url = "http://itsuite.it.brighton.ac.uk/leb17/RegisterNewUser.php?Name="+firstName+"&Surname="+surName+"&userID="+userName+"&passWD="+pWord;

	 if (window.ActiveXObject){
		 xhr = new ActiveXObject("Microsoft.XMLHTTP");
		 } 
			else if (window.XMLHttpRequest){
       			xhr = new XMLHttpRequest();
	   			}
	if (xhr!=null){  
		xhr.onreadystatechange=Response;
 		xhr.open("GET",url, true);
   		xhr.send(null)
	 }
}
function Response(){
	if (xhr.readyState==4){
		if (xhr.status==200){
			var response=xhr.responseText;
			} 
		}
	}
	
// END OF REGISTER NEW USER //

// ACCESS INBOX /// 

function inbox(){
	fixbutton();
	document.getElementById('emaildiv').innerHTML="Click on a message to read it";
	var userName = window.name;
	var message = "http://itsuite.it.brighton.ac.uk/leb17/checkmail1.php?userID="+userName;
	if (window.ActiveXObject){
		xhr1 = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest){
			xhr1 = new XMLHttpRequest();
			}
			if (xhr1!=null){
				xhr1.onreadystatechange=Response3;
				xhr1.open("GET", message, true);
				xhr1.send(null);
		}
	} 
function Response3() {
	if (xhr1.readyState==4) {
		if (xhr1.status==200) {
			var response3=xhr1.responseXML;
			
			var table=document.createElement("Inbox");
			document.getElementById("inboxdiv").appendChild(table);
			table.setAttribute("border", "0");
			table.setAttribute("class", "Inbox");
			var inbody=document.createElement("inbody");
			table.appendChild(inbody);
			var tr= document.createElement("tr");
			inbody.appendChild(tr);
			
			var th=document.createElement("th");
			th.setAttribute("class","th");
			th.appendChild(document.createTextNode("E-Mail ID"));
			tr.appendChild(th);
			var th1=document.createElement("th");
			th1.setAttribute("class","th1");
			th1.appendChild(document.createTextNode("Recieved From"));
			tr.appendChild(th1);
			var th2=document.createElement("th");
			th2.setAttribute("class","th2");
			th2.appendChild(document.createTextNode("Subject"));
			tr.appendChild(th2);
			var th3=document.createElement("th");
			th3.setAttribute("class","th3");
			th3.appendChild(document.createTextNode("Status"));
			tr.appendChild(th3);
			var th4=document.createElement("th");
			th4.setAttribute("class","th4");
			th4.appendChild(document.createTextNode("Date"));
			tr.appendChild(th4);
			
			for (var i=0; i<response3.getElementsByTagName('mail').length; i++) {
				var mailId =response3.getElementsByTagName('mailid')[i].firstChild.nodeValue;
				var message= "http://itsuite.it.brighton.ac.uk/leb17/update.php?mailID="+mailId;
				var sender=response3.getElementsByTagName('sender')[i].firstChild.nodeValue;
				var subject=response3.getElementsByTagName('subject')[i].firstChild.nodeValue;
				var status=response3.getElementsByTagName('status')[i].firstChild.nodeValue;
				var date = response3.getElementsByTagName('date')[i].firstChild.nodeValue;
				
				var tr= document.createElement("tr");
				inbody.appendChild(tr);
				var mail_td= document.createElement("td");
				tr.appendChild(mail_td);
				var sender_td= document.createElement("td");
				tr.appendChild(sender_td);
				var subject_td= document.createElement("td");
				tr.appendChild(subject_td);
				var status_td= document.createElement("td");
				tr.appendChild(status_td);
				var date_td= document.createElement("td");
				tr.appendChild(date_td);
				
				mail_td.appendChild(document.createTextNode(mailId));
				sender_td.appendChild(document.createTextNode(sender));
				subject_td.appendChild(document.createTextNode(subject));
				status_td.appendChild(document.createTextNode(status));
				date_td.appendChild(document.createTextNode(date));
				mail_td.setAttribute("onclick","read(\'"+mailId+"\');");
				mail_td.setAttribute("class","tblborder");
				date_td.setAttribute("onclick","read(\'"+mailId+"\');");
				date_td.setAttribute("class","tablebg");
				sender_td.setAttribute("onclick","read(\'"+mailId+"\');");
				sender_td.setAttribute("class","tablebg");
				subject_td.setAttribute("onclick","read(\'"+mailId+"\');");
				subject_td.setAttribute("class","tablebg");
				status_td.setAttribute("onclick","read(\'"+mailId+"\');");
				status_td.setAttribute("class","tablebg");
				} 
			}
		}
	}

//END OF ACCESS INBOX//

// NEW EMAIL //
function compose() {
	document.getElementById("inboxdiv").innerHTML="";
	document.getElementById("messagediv").innerHTML="Create your email below:";
	document.getElementById("creatingdiv").innerHTML+="<label>To:</label><input type=\"text\" class=\"box\" size=\"35\"name=\"to\" id=\"to\"/><br> <label>Subject:</label><input type=\"text\" class=\"box\" 			size=\"35\"name=\"subject\" id=\"subject\"/><br><label>Message:</label><br><textarea class=\"message\"name=\"message\" id=\"message\" rows=\"15\" cols=\"60\"  wrap=off virtual physical></textarea></div>";
	button();
	breakbutton();
	document.getElementById("emaildiv").innerHTML="";
	
}
// END OF NEW EMAIL //

// HIDE COMPOSE	//
function hidecompose() {
	document.getElementById("inboxdiv").innerHTML="";
	document.getElementById("messagediv").innerHTML="";
	document.getElementById("createbtn").innerHTML="";
	document.getElementById("creatingdiv").innerHTML="";
}
// END OF HIDE COMPOSE //


// CREATE SEND BUTTON //
function button(type) {
    var element = document.createElement("input");
	element.setAttribute("class","buttons");
    element.setAttribute("type", "button");
    element.setAttribute("value","send");
	element.onclick = send;
    var puthere	= document.getElementById("createbtn");
    puthere.appendChild(element);

}
// END OF CREATE SEND BUTTON //

// BREAK COMPOSE BUTTON //
function breakbutton(){
	var bb = document.getElementById("hidebtn").style.visibility="hidden";
}
// BREAK COMPOSE BUTTON //

// FIX COMPOSE BUTTON //
function fixbutton(){
	var fb = document.getElementById("hidebtn").style.visibility="visible";
}
// FIX COMPOSE BUTTON //

// SEND MAIL //
var xhr3=null;
function send(){
	var Id = document.getElementById("to").value;
	var sender = window.name;
	var subj = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var string = "http://itsuite.it.brighton.ac.uk/leb17/insert.php?id="+Id+"&sender="+sender+"&subject="+subj+"&message="+message;
	if (window.ActiveXObject){
		xhr3 = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest){
			xhr3 = new XMLHttpRequest();
			}
			if (xhr3!=null){
				xhr3.onreadystatechange=response4;
				xhr3.open("GET", string, true);
				xhr3.send(null);
				}
			}
function response4(){
	if (xhr3.readyState==4){
		if (xhr3.status==200){
			var response4=xhr3.responseText;
			alert(response4);
			if (response4 == "Email Sent") {inbox();hidecreate();}
			else {""}
			}
		}
	} 
//END OF SEND MAIL//

// READ EMAIL //
var xhr5=null;
function read(mailId){
	var url = "update.php?mailID="+mailId;
	if (window.ActiveXObject){
		xhr5 = new ActiveXObject("Microsoft.XMLHTTP");}
		if (window.XMLHttpRequest){
			xhr5 = new XMLHttpRequest();
			}
			if (xhr5!=null){
				xhr5.onreadystatechange=response5;
				xhr5.open("GET", url, true);
				xhr5.send(null);
				}
			}
function response5(){
	if (xhr5.readyState==4){
		if (xhr5.status==200){
			var response5=xhr5.responseXML; document.getElementById('emaildiv').innerHTML= "<label>Message:</label></br>"+response5.getElementsByTagName('message')[0].firstChild.nodeValue;
			}
		}
	} 
// END OF READ EMAIL //