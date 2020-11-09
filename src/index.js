import _ from 'lodash';
import './style.css';

function component(){
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // --- ES6, which is supported by default(without "jsx supported by babel" thing) by webpack ---
  const getMsg = () => "cappuccino for now, please";
  let getResult = (x, y) => x + y;
  getResult = (x, y) => x * y;
  getResult = (x, y) => { x * y; return 380; };
  element.innerHTML = getMsg();
  element.innerHTML = getResult(2,9);
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  const arr1 = materials.map(material => material.length);
  // element.innerHTML = arr1.length;
  return element;
}
document.body.appendChild(component());
