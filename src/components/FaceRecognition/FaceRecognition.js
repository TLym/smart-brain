import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  // console.log(boxes); 
  var keyProp = 0; 
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        { boxes.map(box => {
          keyProp += 1;
          return <div key={keyProp} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        })}
      </div>
    </div>
  );
}

export default FaceRecognition;