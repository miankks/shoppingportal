import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Metahead from '../components/Metahead';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard'
import Colors from '../components/Colors';
import Container from '../components/Container';

const OurStore = () => {
  let [grid, setGrid] = useState(4);
  return (
    <>
      <Metahead metaTitle='Our Store'/>
      <BreadCrumb title='Our store'/>
      <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop by categories</h3>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter by</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id=""/>
                      <label className='form-check-label' htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id=""/>
                      <label className='form-check-label' htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingFrom" placeholder="From" />
                      <label htmlFor="floatingFrom">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="password" className="form-control" id="floatingTo" placeholder="To" />
                      <label htmlFor="floatingTo">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                    <div>
                       <Colors />
                    </div>
                    <h5 className="sub-title">Size</h5>
                    <div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-1"/>
                      <label className='form-check-label' htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-2"/>
                      <label className='form-check-label' htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className='form-check-input' type="checkbox" value="" id="color-3"/>
                      <label className='form-check-label' htmlFor="color-3">
                        L (2)
                      </label>
                    </div>
                    </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product tag</h3>
                <div className="product-tags d-flex flex-wrap align-itams-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Heandphones</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Oppo</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tablet</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Vivo</span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src='images/watch.jpg' alt='watch' className='img-fluid'/>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi color for students</h5>
                      <ReactStars 
                        count={5}
                        size={14}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"/>
                        <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img src='images/watch.jpg' alt='watch' className='img-fluid'/>
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi color for students</h5>
                      <ReactStars 
                        count={5}
                        size={14}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"/>
                        <b>$ 300</b>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0 d-block sort-text'>Sort by</p>
                    <select name="" id="" defaultValue={'default'} className='form-control form-select'>
                      <option value="default" disabled>Choose an option</option>
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">Alphabetical A-Z</option>
                      <option value="title-decsending">Alphabetical Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-decsending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-decsending">Date, new to old</option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => { setGrid(3)}} src="/images/gr4.svg" alt="grid" className='d-block img-fluid'/>
                      <img onClick={() => { setGrid(4)}} src="/images/gr3.svg" alt="grid2" className='d-block img-fluid'/>
                      <img onClick={() => { setGrid(6)}} src="/images/gr2.svg" alt="grid3" className='d-block img-fluid'/>
                      <img onClick={() => { setGrid(12)}} src="/images/gr.svg" alt="grid4" className='d-block img-fluid'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid}/>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default OurStore