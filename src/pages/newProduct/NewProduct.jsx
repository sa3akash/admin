import { Publish } from '@mui/icons-material';
import './newProduct.css'

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="productTitle">Product</h1>
            <form className="addPruductForm">
                    <div className="addProductFormLeft">
                        <label>Name</label>
                        <input type="text" required placeholder='Apple Airpods'/>
                        <label>In Stock</label>
                        <input type="text" placeholder='123'/>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div className="addProductFormRight">
                        <div className="addProductUpload">
                            <img src="https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_960_720.jpg" alt="" className="addProductUploadImag" />
                            <label htmlFor="productUploadFile">
                                <Publish className='addProductUploadButton' titleAccess='Image'/>
                            </label>
                            <input type="file" name="productUploadFile" id="productUploadFile" style={{display:'none'}}/>
                        </div>
                        <button className="addProductButtonUpdate">Update</button>
                    </div>
                </form>
        </div>
    )
}

export default NewProduct;
