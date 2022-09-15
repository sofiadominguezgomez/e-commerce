import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../styles/product.module.css'

const Product = ({title, thumbnail, permalink, id, price}) => {

  return (
    <div className={styles.productCard}>
        <picture>
            <img src={thumbnail} alt={title} />
        </picture>
        <div className={styles.info}>
            <h4>{title}</h4>
            <div className={styles.subInfo}>
                <p className={styles.price}> $ {price} </p>
            </div>
            <div className={styles.buttons}>
                <a href={permalink} > Ver en Mercado Libre </a>
                <Link to={`/products/${id}`}> Ver Detalle</Link>
                <div className={styles.cart} >
                    <img src="https://img.icons8.com/metro/26/000000/shopping-cart.png" alt="shop cart"/>
                    <Link to="#"> Agregar al carrito </Link>
                </div>
                
            </div>
        </div>
        
        
        
    </div>
  )
}

export default Product