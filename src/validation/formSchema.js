import * as yup from 'yup';


const formSchema = yup.object().shape({
    username: yup.string().trim().required('Username is required').min(2, "Must be at least 2 characters!"),
    size: yup.string().trim().required('select a pizza size'),
    instructions: yup.string().trim(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    jalepenos: yup.boolean(),
})

export default formSchema;