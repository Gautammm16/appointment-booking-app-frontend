import {Form,Input,Button} from 'antd'
import {React} from 'react'
import {Link} from 'react-router-dom';



function Login ()  {
    const onFinish= (values)=>{
      console.log("received data",values);
    }

  return (<>
     <h2 className='card-title '>Login Page</h2>
    <div className="authentication p-5">
    <div className="authentication-form card p-3">

      <Form layout='vertical' onFinish={onFinish}>
     
        <Form.Item label="Email" name='email'>
          <Input placeholder="Email" type='email'/>
        </Form.Item>
        <Form.Item label="Password" name='password' >
          <Input placeholder="Password" type='password'/>
        </Form.Item>

        <Button className="primary-button my-3" htmlType='submit'>
          Login
        </Button>
    

        <Link to='/register' className='redirect mt-3'>click here to Register</Link>

      
      </Form>

    </div>
      
    </div>
    </>
  )
}

export default Login