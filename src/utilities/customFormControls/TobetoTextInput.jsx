import React from 'react'
import { useField } from 'formik'
import { FormField,Label } from 'semantic-ui-react'

function TobetoTextInput({...props}) {

    const [field,meta] = useField(props) // ilgili input elemanlarınızdan bilgi alan

  return (
    <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
            <Label pointing basic color='red' content={meta.error}></Label>
        ):null} 
    </FormField>
  )
}

export default TobetoTextInput