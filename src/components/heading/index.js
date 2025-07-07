'use client';

import React from 'react';

const Index = ({ title }) => {
  return (
    <div>
      <div
        style={{
          padding: '115px 0 0px'
        }}>
        <div
          className="p-5"
          style={{
            backgroundImage: 'linear-gradient(45deg, #e9a17b, #ff7cb0)'
          }}>
          <div className="container ">
            <h2 className="mb-0">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
