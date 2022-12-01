import React from 'react';
import "./footer.css"

export default function App() {
  return (
    <div>
        <footer class="footer-distributed">
            <div class="footer-left">
                <h3>Not<span>BaekJun</span></h3>
            </div>
            
            <span class="footer-links">
            
            <a className = "links" href="#">PRIVACY POLICY</a>
            <span class="seperateBlock"></span>
            <a className = "links" href="#">ABOUT US</a>
            <span class="seperateBlock"></span>
            <a className = "links" href="#">LEARN MORE</a>
            <span class="seperateBlock"></span>
            <a className = "links" href="#">FAQ</a>
                    
                    
            </span>
        </footer>
    </div>
  );
}