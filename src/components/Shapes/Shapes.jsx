import React from 'react';

const Shapes = () => {
  return (
    <section className='shapes-section'>
      <div className='single-rectangle'>
        <div className='box'></div>
      </div>
      <div className='double-squares'>
        <div className='square'></div>
        <div className='square'></div>
      </div>
      <div className='double-circles'>
        <div className='circle'></div>
        <div className='circle'></div>
      </div>
      <div className='rotating-single-rectangle'>
        <div className='box'></div>
      </div>
    </section>
  );
};

export default Shapes;
