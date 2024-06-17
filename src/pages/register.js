import {Form,Input,Button} from 'antd'
import {React} from 'react'
import {Link} from 'react-router-dom';



function Register ()  {
    const onFinish= (values)=>{
      console.log("received data",values);
    }

  return (<>
     <h2 className='card-title '>Register Page</h2>
    <div className="authentication p-5">
    <div className="authentication-form card p-3">

      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label="Name" name='name'>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item label="Email" name='email'>
          <Input placeholder="Email" type='email'/>
        </Form.Item>
        <Form.Item label="Password" name='password' >
          <Input placeholder="Password" type='password'/>
        </Form.Item>

        <Button className="primary-button my-3" htmlType='submit'>
          Register
        </Button>
    

        <Link to='/login' className='redirect mt-3'>click here to login</Link>

      
      </Form>

    </div>
      
    </div>
    </>
  )
}

export default Register