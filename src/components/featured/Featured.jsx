import './featured.css'
import useFetch from "../../hooks/useFetch";

function Featured() {
  const {data, loading} = useFetch("https://expbookingapi.herokuapp.com/api/hotels/countByCity?cities=berlin,madrid,paris");
  return (
    <div className='featured'>
      {loading ? (
        "Loading please wait"
      ) : ( 
      <>
      <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/664666.webp?k=e7f2be1324d4595363ec6d46d988eb21cee118a5530ce0a19a18cf85c4473d2e&o=" alt="" className='featuredImg'/>
        <div className="featuredTitles">
        <h1>Berlin</h1>
        <h2>{data[0]} properties</h2>
        </div>
        </div>  
        <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/887618.webp?k=54a0959275f5f77f933dfc7a360114803fa41df43ed648a57f3fc16fe2216a4b&o=" alt="" className='featuredImg'/>
        <div className="featuredTitles">
        <h1>Madrid</h1>
        <h2>{data[1]} properties</h2>
        </div>
        </div>
        <div className="featuredItem">
        <img src="https://t-cf.bstatic.com/xdata/images/city/square250/664657.webp?k=c1d999b8766abab322730158d960eec68af7910fec9ff61b5339636fd74dfb0e&o=" alt="" className='featuredImg'/>
        <div className="featuredTitles">
        <h1>Paris</h1>
        <h2>{data[2]} properties</h2>
        </div>
        </div>
        </>
        )} 
    </div>
  );
};
export default Featured;