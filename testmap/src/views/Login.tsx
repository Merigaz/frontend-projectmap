import { Content} from "antd/es/layout/layout";

import {LoginContentStyle} from "../styles/primaryTheme";


import FormLogin from "../components/formLogin";

function Login() {
  return (
    <>
      
      <Content style={LoginContentStyle}>
          <FormLogin />
        </Content>
          
            
             
             
            
          
          
      
    </>
  );
}
export default Login;
