import RegisterForm from "../components/forms/RegisterForm"
import Layout from "../components/primary/Layout"

const Register = (): JSX.Element => {
  return (
    <Layout title="Register" authPage>
      <div>
        <div className="text-primary-green">Register</div>
        <RegisterForm />
      </div>
    </Layout>
  )
}

export default Register
