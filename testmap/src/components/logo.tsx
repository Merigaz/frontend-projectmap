import { Image } from 'antd';
import { Link } from 'react-router-dom';
import imglogo from '../assets/Vector.png'
function Logo () {
return (
<>
<Link to="/">
<Image src={(imglogo)} style={{paddingBottom:"8px"}} height={50} preview={false}/>
</Link>
</>
);
}
export default Logo;