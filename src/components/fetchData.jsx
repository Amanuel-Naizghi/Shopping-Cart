import {useEffect,useState} from 'react';

export default function FetchData(){
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
                price:item.price,
                rating:item.rating,
                description:item.description,
            }))
            console.log(data);
            setProducts(productsInfo);
        })
    },[]);

    console.log(products);
    return {products};
}