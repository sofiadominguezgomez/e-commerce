import React, { useEffect, useState } from 'react'
import Product from './Product'
import styles from '../styles/container.module.css';
import styless from '../styles/searchbar.module.css';
import Loading from './Loading';

const ProductContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("");

    const getProducts = (search = "reloj") => {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}`

        setLoading(true)
        fetch(url)
            .then( response => response.json() )
            .then ((data) => setProducts(data.results) )
            .finally( ()=> setLoading(false) )

    }

    const onSearch = async(query) => {
        try {
            setLoading(true)
            const data = getProducts(query)
            const results = data.results
            setProducts(results)
            setLoading(false)

        } catch (err) {console.log(err)}
    }

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        onSearch(search);
      };
    

    useEffect( () => {
        getProducts()
    }, [] )

    if (loading) {
        return (
            <Loading />
        )
    }

  return (
    <div>
        <div className={styless.searchbar_container}>
        <div className={styless.searchbar}>
            <input 
              placeholder='Search product' 
              onChange={onChange}
            />
        </div>
        {/* <button className={styles.btn} onClick={onClick} >Search</button> */}
        <button className={styless.btn} onClick={onClick} >Search</button>
    </div>
    
        <div className={styles.products} >
            {
                products.map( (i)=> <Product key={i.id} {...i} /> )
            }
        </div>
    </div>
  )
}

export default ProductContainer