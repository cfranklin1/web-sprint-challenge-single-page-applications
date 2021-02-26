import React, {useState} from 'react';


export default function Pizza() {
    const [form, setForm] = useState({
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        bacon: false,
        jalepenos: false,

    });

    const handleChange = e => {
        const { name, type, value, checked } = e.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
       
        setForm({...form, [name]: updatedInfo});
        console.log('changing!')
      };

    return(

        <><form>
            <label>name:
                <input type="text" 
                    name="name" value={form.name} onChange={handleChange} />
            </label> 
            {/*---dropdown----*/}
            <label>size:
                <select value={form.size} name="size">
                    <option value="">--select pizza size--</option>
                    <option value="SML">small</option>
                    <option value="MED">medium</option>
                    <option value="LRG">large</option>
                    <option value="XL">X-large</option>
                </select>
            </label>
            {/*---check----*/}
            <label>pepperoni:
                <input type="checkbox"
                    name="topping1"  checked={form.topping1} onChange={handleChange}/>
            </label>
            <label>sausage:
                <input type="checkbox"
                    name="topping2"  checked={form.topping2} onChange={handleChange}/>
            </label>
            <label>bacon:
                <input type="checkbox"
                    name="topping3"  checked={form.topping3} onChange={handleChange}/>
            </label>
            <label>jalepenos:
                <input type="checkbox"
                    name="topping4"  checked={form.topping4} onChange={handleChange}/>
            </label>
                <button >Submit!</button>
        </form></>
    )
}