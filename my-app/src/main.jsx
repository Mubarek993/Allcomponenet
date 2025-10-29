import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";


// import ('https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,600,600i,700,700i,800,800i,900,900i&display=swap');
// import ('https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css');
// import "font-awesome/css/font-awesome.min.css";







import Header from '../../../allcomopent/Header/Header.jsx'
import Alart from '../../Alart/Alart.jsx';
import Ipadpro from '../../Ipdpro/Ipadpro.jsx';
import MAkBookair from '../../MAcBook Air/MAkBookair.jsx';
import Iphone11pro from '../../iphon11pro/iphone11pro.jsx';
import Iphone11 from '../../aiphoneandget the/iphone11.jsx';
import AppleTv from '../../ppleTV/AppleTv.jsx';
  import Applecared from '../../Applecared/Applecared.jsx';
  import Footer from '../.././../all comopent/Footer/Footer.jsx'
import AppleYOUtube from '../../AppleYOUTube/AppleYOUtube.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
<>
  <Header/>
  <Alart/>
  <Ipadpro/>
  <MAkBookair/>
  <Iphone11pro/>
  <Iphone11/>
  <AppleTv/>
  <Applecared/>
   <AppleYOUtube /> 
  <Footer/> 
</>
  </StrictMode>
)
