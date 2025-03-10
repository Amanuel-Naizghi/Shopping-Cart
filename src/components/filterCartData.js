import {cartData} from '../main';
//Used for filtering the repeated items selected by the used and adding the number of similar selections in the count 
function filterData(){
    let myNewCart=[];
    cartData.forEach(item=>{
        let existingItem=myNewCart.find(i=>i.id===item.id);
        if(existingItem){
            existingItem.count++;
        }else{
            myNewCart.push({...item,count:1});
        }
    });

    return myNewCart;
}

export {filterData};