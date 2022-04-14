import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import Map from './components/Map';

function App() {
  const [ipDetails, setIpDetails] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchIPAddressInfo = async () => {
      try {
        await fetch(
          'https://geo.ipify.org/api/v2/country,city?apiKey=at_a6FbZpm5swm7NjM6iwkzSkxxM2RQ2'
        );

        const response = await fetch(
          'https://geo.ipify.org/api/v2/country,city?apiKey=at_a6FbZpm5swm7NjM6iwkzSkxxM2RQ2'
        );
        const data = await response.json();
        setIpDetails(data);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchIPAddressInfo();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    
    const fetchIPAddressData = async () => {
      try {
        await fetch(
          
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_a6FbZpm5swm7NjM6iwkzSkxxM2RQ2&ipAddress=${searchQuery}&domain=${searchQuery}`
          
        );

        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_a6FbZpm5swm7NjM6iwkzSkxxM2RQ2&ipAddress=${searchQuery}&domain=${searchQuery}`
        );
        const data = await response.json();
        setIpDetails(data);
        if (data.status === 'fail') {
          setError(true);
        } else {
          setIpDetails(data);
          setError(false);
        }
      } catch (error) {
        console.log({ error });
      }
    };
    fetchIPAddressData();
    setSearchQuery('');
  };
  useEffect(() => {
    const clearErrorMessage = setTimeout(() => {
      error && setError(false);
    }, 4500);
    return () => {
      clearTimeout(clearErrorMessage);
    };
  }, [error]);

  const getSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className='App'>
      <Header
        searchHandler={searchHandler}
        getSearchQuery={getSearchQuery}
        searchQuery={searchQuery}
        error={error}
      />
      <SearchResult ipDetails={ipDetails} />
      {ipDetails.location && <Map ipDetails={ipDetails} />}
    </div>
  );
}

export default App;
