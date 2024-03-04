import React, { useEffect, useState } from "react";
import "./CatalogProducts.css";
import { Link, useParams, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import ProductService from "../services/ProductService";
import { DOMAIN, imgPrefixURL } from "../Common/ddata";
import { images } from '../../Assets/brand/images';


export const CatalogProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const brandCode = searchParams.get('brand');

  const params = useParams();
  const category = params.categoryId;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    ProductService.findByCategoryAndParams(category).then((result) => {
      if(result.products) {
        setProducts(result.products);
        if(brandCode) {
          filteredBrandProductsIfExist(result.products, brandCode);
        } else {
          setFilteredProducts(result.products)
        }
      }
      // brands
      if(result.brands) {
        setBrands(result.brands.reverse());
      }
    });

  }, [location]);

  const filteredBrandProductsIfExist = (products, brandCode) => {
    const filteredProducts = products.filter(item => item.brand === brandCode);
    setFilteredProducts(filteredProducts);
  };

  const onBrandSelect = (brandCode) => {
    if(brandCode) {
      navigate('?brand='+brandCode );
      filteredBrandProductsIfExist(products, brandCode);
    }
  };

  const handleHover = (index) => {
    const image = document.querySelectorAll('.brand-image')[index];
    image.classList.add('hover-animation');
  };
  
  const handleHoverLeave = (index) => {
    const image = document.querySelectorAll('.brand-image')[index];
    image.classList.remove('hover-animation');
  };
  return (
    <>
      <div className="row mt-4">
        
        <div className="brands-container">
        {/* <label>Фильтр:</label> */}
          {brands.map((brand, index) => (
            <label key={index} htmlFor={brand.id} className="filter-label">
              <input
                type="radio"
                id={brand.id}
                name="brand"
                value={brand.id}
                onChange={() => onBrandSelect(brand.code)}
              />&nbsp;&nbsp;
              <img
                src={images[brand.code]}
                alt={brand.name}
                className={`brand-image ${brand.code}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHoverLeave(index)}
              />
            </label>
          ))}
        </div>

        {filteredProducts.map((product, index) => (
          <div key={index} className="mt-4 col-6 col-sm-4 col-md-3 col-lg-2">
            <Link to={`product/${product.id}` }>
              <div className={`${product.isNew ? 'image-container' : ''} card santehplast-card`}>
                <div className="product-image">
                  <img
                    src={images[product.brand]}
                    className="product-brand"
                  />
                  <img
                    src={`${imgPrefixURL}/${(product.filename ? product.filename : 'santec-bg.png')}`}
                    className="card-image-class"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {product.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
