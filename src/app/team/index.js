'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListTeam } from '@/redux/action/team/creator';

const Index = () => {
  const teamList = useSelector((state) => state.team.teamList);
  const dispatch = useDispatch();

  const fetchTeamList = async () => {
    dispatch(getListTeam());
  };

  useEffect(() => {
    fetchTeamList();
  }, []);

  console.log('teem', teamList);

  return (
    <section className="team section-padding" id="team">
      <div className="trigger-team"></div>
      <svg
        className="bg-shape shape-team reveal-from-left"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="779px"
        height="759px"
      >
        <defs>
          <linearGradient id="PSgrad_05" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
            <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          fill="url(#PSgrad_05)"
          d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
        />
      </svg>
      <svg
        className="bg-shape shape-team-2 shape-2 reveal-from-bottom"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="779px"
        height="759px"
      >
        <defs>
          <linearGradient id="PSgrad_06" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
            <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          fillRule="evenodd"
          fill="url(#PSgrad_06)"
          d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
        />
      </svg>
      <div className="container">
        <h2>
          Teamwork Makes the
          <br />
          Dream Work
        </h2>
      </div>
      {/* End of .container */}
      <div className="team-slider common-slider">
        <div className="carousel-container">
          {teamList.map((item, i) => (
            <div className="item" key={item?.id || i}>
              <a className="team-content-block content-block">
                <div className="img-container">
                  <img src={item.image} alt={item.alt} className="img-fluid" />
                  {/* http://placehold.it/390x480 images/team/team-member-1.jpg */}
                </div>
              </a>
              <h5>
                {item.name}
                <span className="content-block__sub-title">{item.position}</span>
              </h5>
            </div>
          ))}
          {/* End of .item  */}
        </div>
        {/* End of .carousel-container */}
      </div>
      {/* End of .team-slider */}
    </section>
  );
};

export default Index;
