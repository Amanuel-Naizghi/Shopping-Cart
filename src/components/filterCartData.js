import {cartData} from '../main';

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