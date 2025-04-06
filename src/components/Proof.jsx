import React from 'react';
import '../scss/components/proof.scss';
import leetcode from '../assets/leetcode.png';
import stats from '../assets/stats.png';
import streak from '../assets/streak.png';

const Proof = () => {
  return (
    <div className="proof-container">
      
      
      <div className="github-stats-container">
        <div className="github-stat">
          <img 
            src={stats} 
            alt="GitHub Stats" 
            className="github-stats-img" 
          />
          <span className="stats-label">GitHub Statistics</span>
        </div>
        
        <div className="github-stat">
          <img 
            src={streak} 
            alt="GitHub Streak" 
            className="github-streak-img" 
          />
          <span className="stats-label">GitHub Streak</span>
        </div>
      </div>
      
      <div className="leetcode-container">
        <img 
          src={leetcode} 
          alt="LeetCode Profile" 
          className="leetcode-img" 
        />
        <span className="stats-label">LeetCode Profile</span>
      </div>
    </div>
  );
};

export default Proof;