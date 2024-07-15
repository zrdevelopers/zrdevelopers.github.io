'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListPartners } from '@/redux/action/partners/creator';

const Index = () => {
  const partnersList = useSelector((state) => state.partners.partnersList);
  const dispatch = useDispatch();

  const fetchPartnersList = async () => {
    dispatch(getListPartners());
  };

  useEffect(() => {
    fetchPartnersList();
  }, []);

  return (
    <div className="clients light-grey-bg">
      {/* light-grey-bg */}
      <div className="container">
        <div className="row justify-content-center clients-wrapper">
          {partnersList.map((item, i) => (
            <div className="client" key={item?.id || i}>
              <img
                src={item.image}
                alt={item.alt}
                style={
                  item.alt !== 'VandZ15'
                    ? { filter: 'brightness(0.13)' }
                    : { filter: 'grayscale(1)' }
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End of .container --> */}
    </div>
  );
};

export default Index;
