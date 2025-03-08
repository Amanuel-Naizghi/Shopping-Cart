import {useEffect,useState} from 'react';

export default function FetchData(name){
    const[products,setProducts]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);
    
    let fetchLink='https://fakestoreapi.com/products';
    if(name==='Electronics')fetchLink='https://fakestoreapi.com/products/category/electronics';
    else if(name==='Jewelry')fetchLink='https://fakestoreapi.com/products/category/jewelery';
    else if(name==='Women\'s')fetchLink='https://fakestoreapi.com/products/category/women\'s clothing';
    else if(name==='Men\'s')fetchLink='https://fakestoreapi.com/products/category/men\'s clothing';

    useEffect(()=>{
        fetch(fetchLink,{ mode: "cors" })
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
        .catch((error)=>{
            console.error('Error Fetching Products', error);
            alert('Unable to load products please check you internet connection');
        });
    },[]);

    console.log(products);
    if(error)console.log(error);
    return {products};
}