function collapse()
{
    document.getElementById("para2").style.display='none'
}
function show()
{
    document.getElementById("para2").style.display='block'

}

function Color()
{
document.getElementById("change").style.color = "blue";
document.getElementById("demo").style.color="red"
document.getElementById("txt-color").style.backgroundColor="orange"
   
}

function greeting()
{
    let text;
    let person = prompt("Please enter your name: ");
    if(person == null || person == " "){
        text = "Cancelled prompt";
    } else {
        text = "Weclome Scientist " + person + ".";
    }
    document.getElementById("demo").innerHTML=text;

    }

    function changeColor()
    {
        let color = document.getElementById('colorInputText').value;
       
        document.getElementById('para3').style.backgroundColor = color;
        
    }

    function colorwheel()
    {
        let colorWheel = document.getElementById('colorInputColor').value;
        document.body.style.backgroundColor = colorWheel;
    }

    const shapeChange = () => {
        const userPicked = document.getElementById('shapes').value;
        const div = document.getElementById('danger');
    
        
        div.className = '';
    
       
        if (userPicked === 'Square') {
            div.classList.add('square');
        } else if (userPicked === 'Circle') {
            div.classList.add('circle');
        } else if (userPicked === 'Triangle') {
            div.classList.add('triangle');
        }
    }

    
    function myMove()
    {
        var id = null;
 
        var elem = document.getElementById("myAnimation");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame,10);
        function frame(){
            if(pos ==90){
                clearInteral(id);
            }else{
                pos++;
               
                elem.style.left = pos + 'px';
            }
        }
    }

    function myMove1()
    {
        var id = null;
 
        var elem = document.getElementById("myAnimation");
        var pos = 90;
        clearInterval(id);
        id = setInterval(frame,10);
        function frame(){
            if(pos == 0){
                clearInteral(id);
            }else{
                pos--;
                elem.style.left = pos + 'px';
            }
        }
    }