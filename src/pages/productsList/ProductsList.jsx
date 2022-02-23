import './productsList.css'
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ProductsList = () => {
    
    const [data, setData]= useState(productRows)

    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id))
    }

    const columns = [

        { field: 'id', headerName: 'ID', width: 50 },

        { field: 'user', headerName: 'Username', width: 200, 
                renderCell: (params) =>{
                return(<>
                <img src={params.row.image} className='productImag' alt=''/>
                <span>{params.row.name}</span>
                </>)}
        },

        { field: 'stock', headerName: 'Stock', width: 100 },
        {field: 'status',headerName: 'Status',width: 100,},
        {field: 'price',headerName: 'Price',width: 100,},

        {field: 'action',headerName: 'Action',width: 120,
                renderCell: (params) =>{
                    return(<>
                            <Link to={"product/"+params.row.id}>
                            <button className='productEditButton' title="Edit"><Edit className='productEditButtonIcon'/></button>
                            </Link>
                            <button className='productDeleteButton' title="Delete" onClick={()=>handleDelete(params.row.id)}><Delete className='productDeleteButtonIcon'/></button>
                    </>)}
        },
       
      ];


    return (
        <div className='productList'>
           <div style={{ height: 800, width: '100%' }}>
                <DataGrid rows={data} 
                columns={columns}
                pageSize={12} 
                rowsPerPageOptions={[12]} 
                checkboxSelection
                disableSelectionOnClick/>
            </div>
        </div>
    )
}

export default ProductsList;
