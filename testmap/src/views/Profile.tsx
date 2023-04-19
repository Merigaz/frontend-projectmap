import { Content } from "antd/es/layout/layout";
import { ProfileContentStyle } from "../styles/primaryTheme";

import ComponentForm from "../components/cForm";

function Profile() {
  return (
    <>
      <Content style={ProfileContentStyle}>
        <ComponentForm />
      </Content>
    </>
  );
}
export default Profile;
