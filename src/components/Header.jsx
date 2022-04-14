
import './Header.css';

const Header = ({ searchHandler, getSearchQuery, searchQuery, error }) => {

  return (
    <div className='header'>
      <h1>IP Address Tracker</h1>
      <form className='form' onSubmit={searchHandler}>
        <input
          value={searchQuery}
          type='text'
          placeholder='Search for any IP address or domain'
          onChange={getSearchQuery}
        />

        <button className='submit-btn'>
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
            <path fill='none' stroke='#FFF' strokeWidth='3' d='M2 1l6 6-6 6' />
          </svg>
        </button>
        {error && <p className='error'>Invalid IP address or domain name</p>}
      </form>
    </div>
  );
};

export default Header;
