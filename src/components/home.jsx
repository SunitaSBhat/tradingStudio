import React from 'react'
import './navb.css';
import Trading from './Trading_Site.png';
import { useNavigate } from 'react-router-dom';
export default function Home() {
     const navigate = useNavigate();
  return (
    <div>
         <section className="hero">
              <div className='her'>
            <h1>Test your Idea and Start Smart Trading</h1>
            <p>Testing the plan and trading becomes easier now. With our intuitive platform, you can backtest strategies effortlessly and refine them for optimal performance.</p>
            <div className="hero-buttons">
              <button className="btn-green" onClick={() => navigate("/begin")}>Get Started!</button>
              <button className="btn-outline">How it Works</button>
            </div>
            <div className="stats">
              <p>⭐ 4.6 Stars (7000+ reviews) | 👤 12,500+ Active Users</p>
            </div>
            </div>
            <img src={Trading}/>
          </section>
    </div>
  )
}
