import './product.css'
import{Link} from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import { productData } from '../../DummyData'
import { Publish } from '@mui/icons-material'

const Product = () => {
    return (
        <div className='product'>
             <div className="productTitleContainer">
                <h1 className="userTitle">Product</h1>
                <div>
                    <Link to='/newProduct'>
                        <button className="productAddButton">Create</button>
                    </Link>
                </div>
            </div>
            <div className="productTop">
                <div className="productLeft">
                    <Chart data={productData} dataKey='Sales' title='Sales Performance' />
                </div>

                <div className="productRight">
                    <div className="productInfoTop">
                        <img src="https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_960_720.jpg" alt="" className="productInfoImag" />
                        <span className="productInfoName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">6123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="productButtom">
                <form className="pruductForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" required placeholder='Apple Airpods'/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_960_720.jpg" alt="" className="productUploadImag" />
                            <label htmlFor="productUploadFile">
                                <Publish className='productUploadButton'/>
                            </label>
                            <input type="file" name="productUploadFile" id="productUploadFile" style={{display:'none'}}/>
                        </div>
                        <button className="productButtonUpdate">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product;
