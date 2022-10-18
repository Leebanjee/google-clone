import React from 'react'
import { useStateValue } from '../StateProvider'
import UseGoogleSearch from '../UseGoogleSearch';
import "./SearchPage.css"
import Response from '../Response';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search"
import ImageIcon from "@material-ui/icons/Image"
import DescriptionIcon from "@material-ui/icons/Description"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import MoreVertIcon from "@material-ui/icons/MoreVert"

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const { data } = UseGoogleSearch(term);
    //Mock api call
   // const data = Response;

    console.log(data); 
  return (
    <div className='searchPage'>
        <div className='SearchPage__header'>
            <Link to={'/'}>
            <img className='SearchPage__logo' src={logo} alt='logo'></img>
            </Link>
            
            <div className='SearchPage__headerBody'>
                <Search hideButton />

                <div className='searchPage__Options'>
                    <div className='searchPage__OptionsLeft'>

                        <div className='searchPage__Options'>
                        <SearchIcon />
                        <Link to={'/all'}>All</Link>
                        </div>
                        <div className='searchPage__Options'>
                        <ImageIcon />
                        <Link to={'/images'}>Images</Link>
                        </div>
                        <div className='searchPage__Options'>
                        <DescriptionIcon />
                        <Link to={'/news'}>News</Link>
                        </div>
                        <div className='searchPage__Options'>
                        <LocalOfferIcon />
                        <Link to={'/shopping'}>Shopping</Link>
                        </div>
                        <div className='searchPage__Options'>
                        <RoomIcon />
                        <Link to={'/maps'}>Maps</Link>
                        </div>
                        <div className='searchPage__Options'>
                        <MoreVertIcon />
                        <Link to={'/more'}>More</Link>
                        </div>
                    </div>
                    <div className='searchPage__OptionsRight'>
                        <div className='searchPage__Options'>
            
                        <Link to={'/settings'}>Settings</Link>
                         </div>
                         <div className='searchPage__Options'>
                        
                        <Link to={'/tools'}>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        {term  && (
            <div className='SearchPage__results'>
            <p className='SearchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map(item => {
                return (
                        <div className='SearchPage__result'>

                            <a  className='searchPage__resultLink' href={item.link}>
                               {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                   <img className='searchPage__resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt='' />
                               ) }  
                            {item.displayLink}
                            </a>
                            <a className='SearchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='SearchPage__resultSnippet'>{item.snippet}</p>
                        </div> 
                ) 

            })}
                    </div>
        )}
         
{/* <div className='SearchPage__header'>
<h1>{ term }</h1>
</div>
 */}
    </div>
  )
}

export default SearchPage