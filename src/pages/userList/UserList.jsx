import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import './userList.css'
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
    const [data, setData]= useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter((item)=> item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },

        { field: 'user', headerName: 'Username', width: 250, 
                renderCell: (params) =>{
                return(<>
                <img src={params.row.avater} className='avaterImg' alt=''/>
                <span>{params.row.username}</span>
                </>)}
        },

        { field: 'email', headerName: 'Email', width: 150 },
        {field: 'status',headerName: 'Status',width: 80,},
        {field: 'transaction',headerName: 'Transaction',width: 120,},

        {field: 'action',headerName: 'Action',width: 150,
                renderCell: (params) =>{
                    return(<>
                            <Link to={"user/"+params.row.id}>
                            <button className='userEditButton' title="Edit"><Edit className='userEditButtonIcon'/></button>
                            </Link>
                            <button className='userDeleteButton' title="Delete" onClick={()=>handleDelete(params.row.id)}><Delete className='userDeleteButtonIcon'/></button>
                    </>)}
        },
       
      ];


    return (
        <div className='userList'>
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

export default UserList;
