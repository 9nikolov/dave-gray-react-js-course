import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["David", "Sam", "Bill", "Tim"];
        // generate random integer between 0 to 2
        const pickRandomName = Math.floor(Math.random() * 3);
        return names[pickRandomName];
      };


  return (
    <main>
        <p>Hello {handleNameChange()}</p>
    </main>
  )
}

export default Content