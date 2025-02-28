import {useEffect,useState} from 'react';

export default function FetchData(){
    const[homeData,setHomeData]=useState(null);
    const[products,setProducts]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products',{ mode: "cors" })
        .then(data=>data.json())
        .then(data=>{
            const productsInfo=data.map(item=>({
                id:item.id,
                name:item.title,
                image:item.image,
                price:item.price
            }))
            setProducts(productsInfo);
            setHomeData(productsInfo[3]);
        })
    },[]);

    console.log(products);
    return {homeData};
}