import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Paper,IconButton} from '@mui/material'
import {Search} from '@mui/icons-material'



export const SearchBar = ()=>{
    const [searchTerm,setSearchTerm] = useState('')
    const navigate = useNavigate()

 
    return (
        <Paper
        component="form"
        onSubmit={
            (e)=>{
                e.preventDefault()
                navigate(`/search/${searchTerm}`)
            } }
            sx={{
                borderRadius:20,
                border:'1px solid #e3e3e3',
                pl:2,
                boxShadow:'none',
                mr:{sm:5}
            }}
        >
            <input
            className="search-bar"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <IconButton type="submit" sx={{p:'10px',color:'red'}}>
                <Search/>
            </IconButton>
           
        </Paper>
    )
}