import {React, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from './ProductCard';
import {allProducts} from '../redux/actions/product-action'
import axios from 'axios'

const AllProducts = () => {
    const products = useSelector((state) => state);

    const dispatch = useDispatch()

    const getAllProducts = async()=>{
      const result = await axios.get('https://fakestoreapi.com/products').catch((error)=>{console.log(error)})
      console.log(result.data);
      dispatch(allProducts(result.data));
    }

    useEffect(()=>{
      getAllProducts()
    },[])// execute when components load

    console.log("from store:" , products)


  return (
    <div className='ui grid container gap'>
        <ProductCard/>
    </div>
  )

}

export default AllProducts