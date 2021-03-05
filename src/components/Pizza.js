import React, {useEffect, useState} from 'react';
import axios from 'axios';
import formSchema from '../validation/formSchema';
import * as yup from 'yup';

    const initialValues = {
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
    
    const initialDisabled = true

export default function Pizza() {
    const [pizzas, setPizzas] = useState([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled)

    const getPizzas = () => {
        axios.get('https://reqres.in/api/pizzas')
            .then(res => {
            setPizzas([res.data])
            })
            .catch(err => {
                console.log(err)
            })
    }

    const postNewOrder = newPizza => {
        axios.post('https://reqres.in/api/pizzas', newPizza)
            .then(res => {
                setPizzas([res.data, ...pizzas])
            })
            .catch(err => {
                console.log(err)
            })
            setFormValues(initialValues)
            setPizzas([...pizzas, newPizza])
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
        
        setFormValues({
            ...formValues, [name]: value
        });
    };


    const submitForm = () => {
        const newPizza = {
            username: formValues.username.trim(),
            size: formValues.size.trim(),
            instructions: formValues.instructions.trim(),
        }

        if (!newPizza.username || !newPizza.size || !newPizza.instructions) {
            return;
        }
        
        postNewOrder(newPizza);
        
    }
    
    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {
            setDisabled(!valid)
        })
        
        getPizzas()

    }, [formValues])

   

    const onChange = e => {
        const { name, type, value, checked } = e.target;
        const updatedInfo = type === 'checkbox' ? checked : value
        inputChange(name, updatedInfo)
      };

    const onSubmit = e => {
        e.preventDefault()
        submitForm()
        console.log(pizzas)
    }
    

    
 
    

    return(

        <div>
            <form className='form-container' >
            <label>name:
                <input type="text" value={formValues.username}
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
                    name="pepperoni"  checked={formValues.pepperoni} onChange={onChange}/>
            </label>
            <label>sausage:
                <input type="checkbox"
                    name="sausage"  checked={formValues.sausage} onChange={onChange}/>
            </label>
            <label>bacon:
                <input type="checkbox"
                    name="bacon"  checked={formValues.bacon} onChange={onChange}/>
            </label>
            <label>jalepenos:
                <input type="checkbox"
                    name="jalepenos"  checked={formValues.jalepenos} onChange={onChange}/>
            </label><br />
            <label>instructions:
                <input type="text" value={formValues.instructions}
                    name="instructions"  onChange={onChange} />
            </label><br />

            <button type="submit" onSubmit={onSubmit} >Add to Order</button>
        </form>
        </div>
    )
}

