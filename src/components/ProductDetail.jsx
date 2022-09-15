
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ImageSlider from './ImageSlider'
import styles from '../styles/detail.module.css'
import Loading from './Loading'

const ProductDetail = () => {
    const {id:productId} = useParams()
    const [product, setProduct] = useState([])
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    

    const getProduct = (id) => {
        const url = `https://api.mercadolibre.com/items/${id}`

        setLoading(true)
        fetch(url)
            .then( response => response.json() )
            .then ((data) => {
                setProduct(data)
                setImages(data.pictures)
            })
            .finally( ()=> setLoading(false) )

    }

    useEffect( () => {
        getProduct(productId)
    }, [productId] )

    if (loading) {
        return (
            <Loading />
        )
    }

  return (
    <div className={styles.container} >
        <h5 className={styles.title}> {product.title} </h5>
        <ImageSlider images={images} className={styles.slider} />
        <h5 className={styles.precio} > $ {product.price} {product.currency_id} </h5>
        <p className={styles.stock} > Stock: { product.available_quantity ? product.available_quantity : "No hay"  } </p>
        <button className={styles.comprar} >Agregar al carrito</button>
    </div>
  )
}

export default ProductDetail