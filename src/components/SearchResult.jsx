import Info from './Info';
import './SearchResult.css';

const SearchResult = ({ ipDetails }) => {


  return (
<div className="search-container">
<div className='search-result'>

      <Info>
        <p>IP ADDRESS</p> <h2>{ipDetails.ip}</h2>
      </Info>
      <Info>
        <p>LOCATION</p>{' '}
        {ipDetails.location?.region && (
          <h2>
            {ipDetails.location?.region}, {ipDetails.location?.country}
          </h2>
        )}
      </Info>
      <Info>
        <p>TIMEZONE</p>{' '}
        {ipDetails.location?.timezone && (
          <h2>
            UTC{' '}
            {ipDetails.location?.timezone}
          </h2>
        )}
      </Info>
      <Info>
        <p>ISP</p> <h2>{ipDetails.isp}</h2>
      </Info>
    </div>
</div>
  );
};

export default SearchResult;
