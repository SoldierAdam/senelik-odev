import { Formik,Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, FormField, Label } from "semantic-ui-react";
import TobetoTextInput from '../utilities/customFormControls/TobetoTextInput';

function ProductAdd() {
    const initialValues = {productName:"", unitPrice:10}

    const schema = Yup.object({
        productName: Yup.string().required("ZORUNLU"),
        unitPrice: Yup.number().required("ZORUNLU")
    })

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={schema}>
        <Form className="ui form">
            {/* <FormField>
                <Field name="unitPrice" placeholder="Ürün Fiyatı">
                <ErrorMessage name='unitPrice' render={error=>
                <Label pointing basic color='red' content={error}></Label>
                }></ErrorMessage>   
                </Field>
            </FormField> */}
          <TobetoTextInput name="productName" placeholder="Ürün Adı" />
          <TobetoTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default ProductAdd