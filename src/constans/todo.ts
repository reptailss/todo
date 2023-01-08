import * as yup from 'yup';

export  const validationSchemaAddTodo = yup.object({
    title: yup
        .string().required(),
    description: yup
        .string().required()



});
