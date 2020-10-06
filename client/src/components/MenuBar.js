import React, { Component } from 'react';

const MenuBar = () => {
    return (
        <div
            style={{
                height: '30px',
                lineHeight: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <span>
                <img 
                    style={{
                        width:'35px',
                        height:'40px',
                        borderRadius: '50%',
                    }}
                    src='https://store-images.s-microsoft.com/image/apps.20533.14204669951057618.a5b88d7a-f1d0-405e-bf0f-ad56ef1deeeb.f59c8a19-ebb3-4a45-b461-f44c673e5432'
                />
            </span>
            <span
                style={{
                    padding:'7px 10px',
                    borderRadius:'20px',
                    backgroundColor:'black',
                    color:'white'
                }}
            >Đang theo dõi</span>
            <span>Trang chủ</span>
        </div>
    )
}

export default MenuBar;