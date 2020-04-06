let count =0;

const add=()=>{
   let number = document.getElementById('number').value;
  if(!isNaN(number))
  {
        if(number!='')
        {
        count = count + parseInt(number);
        }
        else{
            count = count + 1;
        }
        countColor();    
        document.getElementById('count').textContent = count;
  }
  else{
    document.getElementById('count').textContent= 'Please enter a number';
  } 
  
}

const subtraction=()=>{
    let number = document.getElementById('number').value;
    if(!isNaN(number))
    {   if(number!='')
        {
            count= count - parseInt(number);
        }
        else{
            count = count - 1;
        }
        countColor();
        document.getElementById('count').textContent = count;
    }
    else{
        document.getElementById('count').textContent= 'Please enter a number';
    }
}

// Bonus: changes the count text color to red when count < 0
const countColor=()=>{

    if(count<0){
        document.getElementById('count').style.color='red'; 
    }
    else{
        document.getElementById('count').style.color='black';
    }
} 

document.getElementById('addition').addEventListener('click',add);
document.getElementById('subtraction').addEventListener('click',subtraction);