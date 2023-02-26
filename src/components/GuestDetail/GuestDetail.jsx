import React, { useState, useMemo } from 'react';
import './GuestDetail.scss';
import { Form, Input, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import countryList from 'react-select-country-list';

function GuestDetail() {
   const InputStyle = {
      borderRadius: '0',
      border: '1px solid #ccc',
      resize: 'none',
   };
   const [country, setCountry] = useState();
   const options = useMemo(() => countryList().getData(), []);
   const navigate = useNavigate();
   const handleFinish = () => {
      navigate('/hotel/pa');
   };
   return (
      <div className='guestDetail'>
         <div className='guestDetail_title'>Guest Details</div>
         <Form className='guestDetail_form' layout='vertical' onFinish={handleFinish}>
            <Form.Item
               label='First Name'
               className='guestDetail_firstName'
               name='firstName'
               rules={[
                  {
                     required: true,
                     message: 'Please input your First Name',
                  },
               ]}
            >
               <Input style={InputStyle} />
            </Form.Item>
            <Form.Item
               label='Last Name'
               className='guestDetail_lastName'
               name='lastName'
               rules={[
                  {
                     required: true,
                     message: 'Please input your Last Name',
                  },
               ]}
            >
               <Input style={InputStyle} />
            </Form.Item>
            <Form.Item
               label='Email Address'
               className='guestDetail_email'
               name='email'
               rules={[
                  {
                     type: 'email',
                     message: 'The input is not valid E-mail!',
                  },
                  {
                     required: true,
                     message: 'Please input your E-mail!',
                  },
               ]}
            >
               <Input style={InputStyle} />
            </Form.Item>
            <Form.Item
               label='Phone Number'
               className='guestDetail_phoneNumber'
               name='phone'
               rules={[
                  {
                     required: true,
                     message: 'Please input your phone number!',
                  },
               ]}
            >
               <Input style={InputStyle} />
            </Form.Item>
            <Form.Item label='Country' className='guestDetail_country'>
               <Select
                  options={options}
                  onChange={(e) => {
                     setCountry(e);
                  }}
               />
            </Form.Item>
            <Form.Item label='Special Request' className=''>
               <Input.TextArea autoSize={{ minRows: '3' }} style={InputStyle} maxLength={100} />
            </Form.Item>
            <ul>
               <li>By completing this booking I acknowledge I have read and accepted the Property Policies.</li>
            </ul>
            <Form.Item style={{ width: '100%', textAlign: 'right' }}>
               <Button
                  type='primary'
                  shape='round'
                  style={{ backgroundColor: '#33a2dc', height: '40px', width: '45%', alignItems: 'flex-end' }}
                  htmlType='submit'
               >
                  Continue to Checkout
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
}

export default GuestDetail;
