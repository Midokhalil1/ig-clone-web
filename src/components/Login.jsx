import { Button } from 'antd'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBp_CDnSOn66T7sw_6lSw7sj23wrU9UBd4",
    authDomain: "upload-storage-mk.firebaseapp.com",
    projectId: "upload-storage-mk",
    storageBucket: "upload-storage-mk.appspot.com",
    messagingSenderId: "529769500777",
    appId: "1:529769500777:web:ca9c96136c9f5cb21892f8"
  };

  export default function Login({ setUser }) {
    const handleGoogleLogin = async (e) => {
      e.preventDefault()
      const app = initializeApp(firebaseConfig)
      const auth = getAuth(app)
      const provider = new GoogleAuthProvider()
      const response = await signInWithPopup(auth, provider)
        .catch(alert);
      setUser(response.user)
      console.log(response.user)
    }
  
    return (
      <Button type="primary" onClick={handleGoogleLogin}>Sign in with Google</Button>
    )
  }

// export default function Login({ setUser, setToken }) {
//     const handleFormSubmit = (values) => {

//         fetch("http://localhost:5002/login", {
//             method: 'POST',
//             headers: { "content-Type": 'application/json' },
//             body: JSON.stringify(values)
//         })

//             .then(response => response.json())
//             .then(data => {
//                 setToken(data.token)
//                 setUser(data.user)
//             })
//             .catch(alert)
//     }
//     return (
//         <Layout.Content style={{ padding: '50px' }}>
//             <h1>Login</h1>
//             <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
//                 <Form.Item label="Email" name="email" rules={[{
//                     required: true,
//                     message: 'Please enter a valid email address'
//                 }]}>
//                     <Input />
//                 </Form.Item>
//                 <Form.Item label="Password" name="password" rules={[{
//                     required: true,
//                     message: 'Please enter password'
//                 }]}>
//                     <Input.Password />
//                 </Form.Item>
//                 <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
//                     <Button type='primary' htmlType='submit'>Login</Button>
//                 </Form.Item>
//             </Form>
//         </Layout.Content>
//     )
// }