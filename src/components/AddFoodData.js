import React, { useState } from 'react'
import './AddFoodData.css'

import {db , storage} from '../firebase/FirebaseConfig';
import {addDoc , collection} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import Navbar from './Navbar/Navbar';

const AddFoodData = () => {
    
    const [food_name, setFood_name] = useState('');
    const [food_description, setFood_description] = useState('');
    const [food_price, setFood_price] = useState('');
    const [food_category, setFood_category] = useState('');
    const [food_image, setFood_image] = useState(null);
    const [restaurant_name, setRestaurant_name] = useState('');
    // const [restaurant_address, setRestaurant_address] = useState('');
    const [food_image_url,set_food_image_url] = useState('');
    
    const [foodType,setFoodType] = useState('');
    const [mealType,setmealType] = useState('');
    const [foodAdddon,setFoodAddon] = useState('');
    const [foodAddonPrice,setFoodAddonPrice] = useState('');
    
    const [restaurant_phone, setRestaurant_phone] = useState('');
    const [restaurantEmail,setRestaurantEmail] = useState('');
    const [restaurantAddressBuilding,setRestaurantAddressBuilding] = useState('');
    const [restaurantAddressStreet,setRestaurantAddressStreet] = useState('');
    const [restaurantAddressCity,setRestaurantAddressCity] = useState('');
    const [restaurantAddressPincode,setRestaurantAddressPincode] = useState('');




    const handleSubmit = (e) => {
        e.preventDefault()

        if(food_image == null){
            alert("Please select an image")
            return 
        }

        else {
            const imageRef = ref(storage,'FoodImages/${food_image.name}')
            uploadBytes(imageRef,food_image)
            .then(()=> {
                alert("Image uploaded successfully")
                getDownloadURL(imageRef)
                .then((url)=> {
                    // console.log(url)
                    set_food_image_url(url)

                    const foodData = {
                        food_name,
                        food_price,
                        food_image_url : url,
                        food_category,
                        food_description,
                        restaurant_name,
                        // restaurant_address,
                        restaurant_phone,
                        foodType,
                        mealType,
                        foodAdddon,
                        foodAddonPrice,
                        restaurantEmail,
                        restaurantAddressBuilding,
                        restaurantAddressStreet,
                        restaurantAddressCity,
                        restaurantAddressPincode,
                        id: new Date().getTime().toString()
                    }
            
                    // console.log(foodData)
            
                    try{
                        const docRef = addDoc(collection(db, "FoodData"),foodData);
                        alert("Data added successfully ",docRef.id);
                    }
            
                    catch(error){
                        alert("Error adding document ",error);
                    }
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
        }
    }

  return (
    <div>
        <Navbar/>
        <div className='form-outer'>
        <h1>Add Food Data</h1>
        <form className='form-inner'>
            <label>Food Name</label>
            <input type='text' name='food_name' 
            onChange={(e) => {setFood_name(e.target.value)}}
            />
            <br />

            <label>Food Desciption</label>
            <input type='text' name='food_description' 
            onChange={(e) => {setFood_description(e.target.value)}}
            />
            <br />

            <div className='form-row'>
                <div className='form-col'>
                <label>Food Price</label>
            <input type='number' name='food_price' 
            onChange={(e) => {setFood_price(e.target.value)}}
            />
                </div>

                <div className='form-col'>
                    <label>Food Type</label>
                    <select name='food_type' onChange={(e) => {setFoodType(e.target.value)}}>
                        <option value='null'>Select Food Type</option>
                        <option value="veg">Veg</option>
                        <option value="non-veg">Non - Veg</option>
                    </select>
                </div>
            </div>

            <br />

           
            <br />

            <div className='form-row'>
                <div className='form-col'>
                <label>Food Category</label>
            <select name='food_category' 
            onChange={(e) => {setFood_category(e.target.value)}}>
                <option value='null'>Select Food Category</option>
                <option value='indian'>Indian</option>
                <option value='chineese'>Chineese</option>
                <option value='italian'>Italian</option>
                <option value='maxican'>Maxican</option>
                <option value='american'>American</option>
            </select>
            </div>

            <div className='form-col'>
                <label>Meal Type</label>
                <select name='meal_type' onChange={(e) => {setmealType(e.target.value)}}>
                    <option value='null'>Select Meal Type</option>
                    <option value='dinner'>Dinner</option>
                    <option value='starters'>Starters</option>
                    <option value='breakfast'>Breakfast</option>
                    <option value='liquid'>Liquid</option>
                </select>
            </div>
        </div>

        <br />

        <div className='form-row'>
            <div className='form-col'>
                <label>Add On Name</label>
                <input type='text' name='food_addon'
                onChange={(e) => {setFoodAddon(e.target.value)}}/>
            </div>

            <div className='form-col'>
                <label>Add On Price</label>
                <input type='text' name='food_addon_price'
                onChange={(e) => {setFoodAddonPrice(e.target.value)}}/>
            </div>
        </div>

            <label>Food Image</label>
            <input type='file' name='food_image' 
            onChange={(e) => {setFood_image(e.target.files[0])}}
            />
            <br />

            <label>Restaurant Name</label>
            <input type='text' name='restaurant_name' 
            onChange={(e) => {setRestaurant_name(e.target.value)}}
            />
            <br />

            <div className='form-row'>
                <div className='form-col'>
                    <label>Restaurant Building Number / Name</label>
                    <input type='text' name='restaurant_address_building'
                    onChange={(e) => {setRestaurantAddressBuilding(e.target.value)}} />
                </div>

                <div className='form-col'>
                    <label>Restaurant Street / Area Name</label>
                    <input type='text' name='restaurant_address_street'
                    onChange={(e) => {setRestaurantAddressStreet(e.target.value)}} />
                </div>
            </div>

            <br />

            <div className='form-row'>
                <div className='form-col'>
                    <label>Restaurant City</label>
                    <input type='text' name='restaurant_address_city'
                    onChange={(e) => {setRestaurantAddressCity(e.target.value)}} />
                </div>

                <div className='form-col'>
                    <label>Restaurant City Pin-code</label>
                    <input type='number' name='restaurant_address_pin_code'
                    onChange={(e) => {setRestaurantAddressPincode(e.target.value)}} />
                </div>
            </div>
            <br/>
            
            <div className='form-row'>
                <div className='form-col'>
                    <label>Restaurant Phone</label>
                    <input type='number' name='restaurant_phone'
                    onChange={(e) => {setRestaurant_phone(e.target.value)}} />
                </div>

                <div className='form-col'>
                    <label>Restaurant Email</label>
                    <input type='email' name='restaurant_email'
                    onChange={(e) => {setRestaurantEmail(e.target.value)}} />
                </div>
            </div>
            <br/>



            <button onClick={handleSubmit}>Add Food</button>

        </form>
    </div>
    </div>
  )
}

export default AddFoodData