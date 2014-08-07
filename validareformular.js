var filtrare_nume = /^[A-Za-z0-9 ] {3, 20}$/;
var filtrare_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;



function ValidareForm(form)
{
var mesaj = form.mesaj.value;
var nume = form.nume.value;
	var email = form.email.value;
	var erori =[];
	if (!filtrare_nume.test(nume))
{
    erori[erori.length]="Nume invalid";  
 }

 if (!filtrare_email.test(email))
{
    erori[erori.length]="Email invalid";  
 }
	if (mesaj=="")
	{
		erori[erori.length] = "Nu exista nici un mesaj de transmis";  
	}
	if(erori.length>0)
	{
		raportErori(erori);
		return false;	
	}
	return true;
 }
 function raportErori(erori)
 {
	var atentie="Ceva este gresit...";
	for (i=0; i<erori.length;i++)
	{
		var numarErori=i+1;
		atentie += "\n"+ numarErori + "." +erori[i];
	}
	alert(atentie);
 }
