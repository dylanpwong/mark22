import React, {  useEffect } from 'react';
// import myData from './Descriptions.json';
import './Descriptions.json'
import './Description.scss'
function AboutSection() {
//   const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <div class="main-body">
      <div>
      </div>
      <div class="wave">
        <div class="cloud"></div>
      </div>
    </div>
  );
}

export default AboutSection