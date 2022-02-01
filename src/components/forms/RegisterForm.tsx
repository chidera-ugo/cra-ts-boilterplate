import { Formik, Form } from "formik"
import * as Yup from "yup"
import SubmitButton from "../buttons/SubmitButton"
import Checkbox from "../inputs/Checkbox"
import Input from "../inputs/Input"
import SecureInput from "../inputs/SecureInput"

// And now we can use these
const RegisterForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    jobType: Yup.string()
      .oneOf(
        ["designer", "development", "product", "other"],
        "Invalid Job Type"
      )
      .required("Required"),
  })

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        acceptedTerms: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Input
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />

          <Input
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <SecureInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />

          <Checkbox name="acceptedTerms">
            I accept the terms and conditions
          </Checkbox>

          <SubmitButton text="Register" isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}
export default RegisterForm
