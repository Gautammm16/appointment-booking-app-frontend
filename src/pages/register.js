import {Form,Input,Button} from 'antd'
import {React} from 'react'

const Register = () => {
  return (<>
     <h2 className='card-title '>Register Page</h2>
    <div className="authentication p-5">
    <div className="authentication-form card p-3">

      <Form layout='vertical'>
        <Form.Item label="Name" name='name'>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item label="Email" name='email'>
          <Input placeholder="Email"/>
        </Form.Item>
        <Form.Item label="Password" name='password'>
          <Input placeholder="Password"/>
        </Form.Item>

        <Button className="primary-button mt-3">
          Register
        </Button>
      
        <Button className="primary-button mt-3" target='/login'>
          Login
        </Button>
      
      </Form>


    </div>
      
    </div>
    </>
  )
}

export default Register