import React from 'react';
import img1 from '../../../images/exclusive/ex1.JPG';
import img2 from '../../../images/exclusive/ex2.JPG';
import img3 from '../../../images/exclusive/ex3.JPG';
import img4 from '../../../images/exclusive/ex4.JPG';
import './Exclusive.css'


const Exclusive = () => {
  return (
    <div className="container  collection">
    
      <div className="row">


        <div className="col-md-3">
          <div className="product-top">
            <img className='imageup' src={img1} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i className="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i className="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star-half-alt" ></i>
<i className"far fa-star"></i>
</div> */}

{/* <h5>write something about product</h5> */}


          </div>
        </div>


        <div className="col-md-3">
          <div className="product-top">
            <img className='imageup'  src={img2} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i className="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i className="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star-half-alt" ></i>
<i className"far fa-star"></i>
</div> */}
          </div>
        </div>



        <div className="col-md-3">
          <div className="product-top">
            <img className='imageup'  src={img3} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i className="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i className="fas fa-shopping-cart"></i></button>
            </div>


          </div>
        </div>



        <div className="col-md-3">
          <div className="product-top">
            <img src={img4} alt="" />
            <div className="overlay">
              <button type="button" className="btn btn-secondary" title="Quick Shop"><i className="far fa-eye"></i></button>

              <button type="button" className="btn btn-secondary" title="Add Wishlist"><i className="far fa-heart"></i></button>

              <button type="button" className="btn btn-secondary" title="cart"><i className="fas fa-shopping-cart"></i></button>
            </div>

{/* <div className="product-bottom text-center">
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star" ></i>
<i className"fas fa-star-half-alt" ></i>
<i className"far fa-star"></i>
</div> */}
          </div>
        </div>





      </div>
    </div>
  );
};

export default Exclusive;