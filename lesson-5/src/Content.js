import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["David", "Sam", "Bill", "Tim"];
        // generate random integer between 0 to 2
        const pickRandomName = Math.floor(Math.random() * 3);
        return names[pickRandomName];
      };

  const handleClick = () => {
    console.log('You clicked it');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }

  const handleDoubleClick = () => {
    console.log("BUTTON 3 got double clicked!");
  }

  return (
    <main>
        <p>Hello {handleNameChange()}</p>
        <button onClick={handleClick}>Click it</button>
        <br/>
        <button onClick={() => handleClick2('Dave')}>Click it</button>
        <br/>
        {/* TESTING GUIDE: Double Click does not work when Google Chrome Inspector Tools are open
            SOLUTION: double click the button, then open inspect menu to see the result in the console */}
        <button onDoubleClick={handleDoubleClick}>BUTTON 3</button>
    </main>
  )
}

export default Content