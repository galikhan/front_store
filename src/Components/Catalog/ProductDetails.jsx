import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import ProductSizeService from "../services/ProductSizeService";
import FileService from "../services/FileService";
import { docPrefixURL, imgPrefixURL } from "../Common/ddata";
import parse from 'html-react-parser';
import { images } from '../../Assets/brand/images';

const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [activeImg, setActiveImage] = useState();
  const [fileRealDisplay, setFileRealDisplay] = useState([]);

  const params = useParams();
  const id = params.productId;


  useEffect(() => {
    console.log('images', images);
    ProductService.findById(id).then((result) => {
      setProduct(result);
    });

    FileService.findImagesByContainerId(id).then((result) => {
      const thumbs = result.filter((i) => i.containerClass == "Thumbnail");
      const docs = result.filter((r) => r.containerClass == "Document");
      setFileRealDisplay(docs);
      if (thumbs && thumbs.length > 0) {
        setProductImages(thumbs);
        const originalFilename = getImageFilename(thumbs[0].filename);
        setActiveImage(imgPrefixURL + "/" + originalFilename);
      }
    });

    ProductSizeService.findAllByProductId(id).then((result) => {
      setProductSizes(result);
    });
  }, []);

  function compareFn(a, b) {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    }
    return 0;
  }

  function getImageFilename(filename) {
    if (filename) {
      return filename.replace("thumbnail-", "");
    }
    return filename;
  }

  function activateThumbnail(thumbnailFilename) {
    setActiveImage(imgPrefixURL + "/" + getImageFilename(thumbnailFilename));
  }

  return (
    <div>
      <>
        <div className="row">
          <div className="col-md-12  mt-3 mb-3">
            <h5 className="product-name">{product.name}</h5>
          </div>

          <div className="row">
            <div className="col-md-6 ">
              <img src={activeImg} alt="" className="product-image" />
              <div className="thumbnail-container">
                {productImages.map((image) => (
                  <img
                    src={imgPrefixURL + "/" + image.filename}
                    alt=""
                    className="thumbnail"
                    onClick={() => activateThumbnail(image.filename)}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div>

                <img
                  src={images[product.brand]}
                  className="product-brand"
                />
                <br />
                <br />
                <p className="product-description">{parse(`${product.description}`)}</p>

              </div>
              <table>
                <thead>
                  <tr>
                    <th>Артикул</th>
                    <th>Размер</th>
                  </tr>
                </thead>
                <tbody>
                  {productSizes.map((productSize) =>
                    !productSize.isRemoved && (
                      <tr>
                        <td>{productSize.article}</td>
                        <td>{productSize.size}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div id="fileDisplayArea">{product.file_pr}</div>
              <div className="row ">
                {fileRealDisplay.map((product) => (
                  <div className="col-md-4 mb-3 " key={product.id}>
                    <div className="img-thumbnail position-relative ">
                      <div className="d-flex align-items-center ">
                        <a
                          href={docPrefixURL + product.filename}
                          target="_blank"
                          className="d-flex"
                        >
                          <i className="fa fa-file-pdf-o pdfFile"></i>
                          <span className="file_name">{product.description}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-inline-block mb-3">
                <ReactPlayer
                  className="mo"
                  url={product.video}
                  controls
                  width="400px"
                  height="280px"
                />
              </div>
            </div>
          </div>


        </div>
      </>
    </div>
  );
};

export default ProductDetails;
