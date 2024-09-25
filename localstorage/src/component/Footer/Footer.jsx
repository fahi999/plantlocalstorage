import React from 'react'
import '../Footer/Footer.css'
import  footer_logo from '../../Assets/logoplant.jpg'
import instagram_icon  from '../../Assets/instagram_icon.png'
import whatsaapp_icon from '../../Assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <div>
        <div className='footer'>
          <div className='footer.logo'>
            <img src={footer_logo} style={{display :{ xs:'none',md:'flex'},marginRight:'8px',height:'40px',marginTop:"30px"}}/>
            <b>Green oasis</b>
          </div>
          <ul className='footer-linnks'>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className='footer-social-icons'>
            <div className='footer-icons-conntainer'>
              <img src={instagram_icon}/>
            </div>
            <div className='footer-icons-container'>
              <img src={whatsaapp_icon}/>
            </div>
          </div>
          <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 All right Reserved.</p>
          </div>
        </div>
      
    </div>
  )
}