import React, {useEffect, useState} from 'react';
import axios from '../axios';
import Form from './Form';
import formSchema from '../validation/formSchema';
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
    const initialErrors = {
        username: '',
        size: '',
        instructions: '',
        
    }
    const initialPizzas = []
    const initialDisabled = true

export default function Pizza() {
    const [pizzas, setPizzas] = useState(initialPizzas);
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled)

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
       
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
                setErrors({
                    ...errors, [name]: ""
                });
            })
            .catch(err => {
                setErrors({
                    ...errors, [name]: err.errors[0]
                });
            }); 
        
        setForm({
            ...Form, [name]: value
        });
    };
   

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
    useEffect(() => {
        formSchema.isValid(form).then(valid => {
            setDisabled(!valid)
        });
    }, [form]);

 


    return(

        <div>
            <form clasName='form-container' onSubmit={onSubmit}>
            <label>name:
                <input type="text" value={form.username}
                    name="username" onChange={onChange} />
            </label><br />
            { errors.username.length > 0 && <p className="error">{errors.username}</p>}
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

            <button type="submit" >Add to Order</button>
        </form>
        </div>
    )
}

