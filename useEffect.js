// Example usage of useEffect

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // Sets 0 as the default count

  useEffect(() => { // Every time the component renders (due to a change in state), it does this
    alert(`Count: ${count}`)
  })

  const handleClick = () => { // The counter logic, as seen before
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

// Example webpage click counter

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1) // Refactored incrememnt function which actually looks cleaner

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    return () => {
      document.removeEventListener('mousedown', increment); // It's important to remove the event listener EACH TIME THE COMPONENT RENDERS
    }; // Otherwise you end up with thousands of event listeners, which can really impact performance!
  }) // This is known as a cleanup function

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

// More complex timer function

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => { // Storing it in a constant allows us to clear it
      setTime((prev) => prev + 1);
    }, 1000); // 1000ms = 1s
    return () => {
      clearInterval(intervalId);
    }
  }, []) // Empty dependency array prevents the interval being reset every time we type
  // This way, the interval is set ONLY when the component first renders!

  const handleChange = ({ target }) => setName(target.value); // This is a little hazy for me still.

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}

// Example of how useEffect works with fetching data from the internet

export default function Forecast() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily'); // Starts with daily weather by default

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]); // If the forecastType state changes (a clickable button in the JSX), this will re-render
}

// Similar example with refactored code

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({}); // Initialised as an empty JS object

  useEffect(() => {
    get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []); // Only has to render once!

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }}, [items, selectedCategory]); // Only re-renders when state changes

  if (!categories) { // Doesn't break the DOM rendering process if categories are not yet loaded
    return <p>Loading..</p>;
  }
}

// Another example of splitting 1 data response into 3 different pieces of information for more efficient loading

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
  get('/menu').then(
    (response) => {
      setMenu(response.data);
    });
  }, []);

  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then(
      (response) => {
        setNewsFeed(response.data);
      }
    );
  }, []);

  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then(
      (response) => {
        setFriends(response.data);
      }
    );
  }, []);
}
