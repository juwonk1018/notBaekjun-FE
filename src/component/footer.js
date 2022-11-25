import React from 'react';
import "./footer.css"

export default function App() {
  return (
    <div>
        <footer class="footer-distributed">
            <div class="footer-left">
                <h3>Not<span>BaekJun</span></h3>
                <p class="footer-links">
                    <a href="#"> Home </a>
                     · 
                    <a href="#">About Us</a>
                    ·
                    <a href="#">FaQ</a>
                    ·
                    <a href="#">Contact Us</a>
                </p>
                <p class="footer-name">Not BaekJun</p>
            </div>
            <div class="footer-right">
                <p>Contact Us</p>
                <form action="#" method="post">
                    <input type="text" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </footer>
    </div>
  );
}