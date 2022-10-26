import * as yup from 'yup';


let schema = yup.object().shape({
  name : yup.string().required()
})

export default schema