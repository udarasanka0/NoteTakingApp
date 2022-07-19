//---Variables----
var form=document.querySelector('#add-frm');
var items=document.querySelector('#items');
var ntitle=document.querySelector('#n-title');
var nbody=document.querySelector('#n-body');

var tableDiv=document.querySelector('#tbl-div');
var search=document.querySelector('#srch');

var noteCount=0;
var newNote='';
var contentNote='';

//----Events----

  //for page loads

  window.onload=updateTable;


form.addEventListener('submit',addNote);

//for search

 search.addEventListener('keyup',searchNotes);

//---Functions----


//update table

function updateTable(){
    //Dispaly the tablee when note gets Added

    if(noteCount>0){
        tableDiv.style.display='';
        items.appendChild(newNote);


    }else{
        tableDiv.style.display='none';
    }




}

//Add Note
function addNote(e){
    //stop intial behavioour
    e.preventDefault();
    //console.log("hello");

    //validate inputs

    if(ntitle.value=='' || nbody.value==''){
        alert("please fill all fields");

    }else{
        //create an new record


        //New tr

        var tr=document.createElement('tr');
        tr.className='item';

        //new td for title and body
        var td1=document.createElement('td');
        td1.appendChild(document.createTextNode(ntitle.value));
		 contentNote=nbody.value;
		 document.querySelector('#myModalCt').textContent=contentNote;
        /*var span=document.createElement('span');
        span.className='node-body';
        span.appendChild(document.createTextNode(nbody.value));
        td1.appendChild(span);
*/
       // console.log(span);

        //New td for view

        var td2=document.createElement('td');
        td2.className='btcellv';
        /*var btn1=document.createElement("button");
        btn1.appendChild(document.createTextNode('View'));
        btn1.setAttribute('id','vw');
        td2.appendChild(btn1);*/
		td2.innerHTML="<button id='vw' onclick=viewCntnt()> View </button>"
		
		
		

        //New td for delete



        var td3=document.createElement('td');
        td3.className='btcelld';
        /*var btn2=document.createElement("button");
        btn2.appendChild(document.createTextNode('Delete'));
        btn2.setAttribute('id','del');
        td3.appendChild(btn2);*/
		td3.innerHTML="<button id='del' onclick=remove(this.parentElement)> Delete </button>"
		
		
		
		

        //Add all tds o tr

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);


        //Increment Bote Count

        noteCount ++;


        //Set new Note 

        newNote=tr;

        updateTable();





        



    }
}
function remove(elmnt){
			elmnt.parentElement.style.display="none";
			style.display = "block";
		}
		
function viewCntnt(){
	document.querySelector('#myModal').style.display = "block";
	
}
document.querySelector('#myModal').onclick=function(){
	this.style.display = "none";
	
};

/*
var rw=document.querySelector("#del");
rw.addEventListner("click",function(){
	console.log("hi");
	
	
});*/


//Search Note

function searchNotes(e){
    //Text To lowe case

    var searchTxt=e.target.value.toLowerCase();
    
    //Get List

    var list=items.getElementsByClassName('item');
    
    //conver to an Array

    var listArr=Array.from(list);
    console.log(listArray);
    


}
