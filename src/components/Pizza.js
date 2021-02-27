import React, {useEffect, useState} from 'react';
import axios from '../axios'
import Form from './Form';
import * as yup from 'yup';

    const initialState = {
        username: '',
        size: '',
        instructions: '',
        pepperoni: false,
        sausage: false,
        bacon: false,
        jalepenos: false,

    };

    const initialPizzas = []

export default function Pizza() {
    const [pizzas, setPizzas] = useState(initialPizzas);
    const [form, setForm] = useState(initialState);


    const postNewOrder = newPizza => {
        axios.post('(https://reqres.in/', newPizza)
            .then(res => {
                setPizzas([res.data, ...pizzas])
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            setForm(initialState)
    }
    const submitForm = () => {
        const newPizza = {
            username: form.username.trim(),
            size: form.size.trim(),
            instructions: form.instructions.trim(),
            toppings: ['pepperoni', 'sausage', 'bacon', 'jalepenos'].filter(topping => form[topping])
        }
    }
    const inputChange = (name, value) => {
        setForm({
            ...Form, [name]: value
        })
    }

    const onChange = e => {
        const { name, type, value, checked } = e.target;
        const updatedInfo = type === 'checkbox' ? checked : value
        inputChange(name, updatedInfo)
        console.log('changing!')
      };

    const onSubmit = e => {
        e.preventDefault();
        submitForm()
        postNewOrder()
    }


    const formSchema = yup.Object().shape({
        username: yup
            .min(2, "Must be at least 2 characters!")
    })

    return(

        <div><form>
            <label>name:
                <input type="text" value={form.username}
                    name="username" onChange={onChange} />
            </label><br />
            {/*---dropdown----*/}
            <label>size:
                <select name="size" onChange={onChange}> 
                    <option value="">--select pizza size--</option>
                    <option value="SML">small</option>
                    <option value="MED">medium</option>
                    <option value="LRG">large</option>
                    <option value="XL">X-large</option>
                </select>
            </label>

            <h3>add toppings</h3>
            {/*---check----*/}
            <label>pepperoni:
                <input type="checkbox"
                    name="pepperoni"  checked={form.pepperoni} onChange={onChange}/>
            </label>
            <label>sausage:
                <input type="checkbox"
                    name="sausage"  checked={form.sausage} onChange={onChange}/>
            </label>
            <label>bacon:
                <input type="checkbox"
                    name="bacon"  checked={form.bacon} onChange={onChange}/>
            </label>
            <label>jalepenos:
                <input type="checkbox"
                    name="jalepenos"  checked={form.jalepenos} onChange={onChange}/>
            </label><br />
            <label>instructions:
                <input type="text" value={form.instructions}
                    name="instructions"  onChange={onChange} />
            </label><br />

            <button onSubmit={onSubmit}>add to order</button>
        </form></div>
    )
}