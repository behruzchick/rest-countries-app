import React, { useState } from 'react'
import { Dropdown, Form, Navbar } from 'react-bulma-components'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import {Dro}
import './Header.css'
const Header = ({ setSearch, setApi }) => {
    const [dropdownActive, setDropdownActive] = useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event,region) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (region) => {
        console.log(region);
        setApi(`https://restcountries.com/v3.1/region/${region}`)
        setAnchorEl(null);
    };

    return (
        <Navbar style={{ padding: '15px', background: 'none' }}>
            <Navbar.Brand>
                <Navbar.Item style={{ color: "white" }}>REST COUNTRIES</Navbar.Item>
            </Navbar.Brand>
            <Navbar.Menu style={{ background: "none" }}>
                {/* <Navbar.Link onClick={toggleDropdown} style={{ background: "none", color: 'white' }}>
                </Navbar.Link> */}

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Filter by region
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={()=> setApi("https://restcountries.com/v3.1/all")}>All</MenuItem>
                    <MenuItem onClick={()=> handleClose("Africa")}>Africa</MenuItem>
                    <MenuItem onClick={()=> handleClose("Europe")}>Europe</MenuItem>
                    <MenuItem onClick={()=> handleClose("America")}>America</MenuItem>
                    <MenuItem onClick={()=> handleClose("Asia")}>Asia</MenuItem>
                </Menu>

            </Navbar.Menu>
            <Navbar style={{ background: "none" }}>
                <Form.Input onChange={(e) => setSearch(e.target.value)} placeholder='Country name....' className='form-input' style={{ background: "none" }} />
            </Navbar>
        </Navbar>
    )
}

export default Header