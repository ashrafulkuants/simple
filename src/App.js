import Header from './Components/Header';
import { lazy,Suspense, useEffect } from 'react';
import {Routes,Route,useLocation} from 'react-router-dom'
// import Home from './Components/Home';
// import Footer from './Components/footer/Footer';
// import About from './Components/About';
// import NotFound from './Components/NotFound';
// import Terms from './Components/TC';
// import MiniLibrary from './Components/library/MiniLibrary';
// import Newsboard from './Components/newsboard/Newsboard';
import './App.css';
import Blog from './Components/Blog';
import Algolab from './Components/Algolab';
import TechnicalAnalysis from './Components/TechnicalAnalysis';
import AlgorithmicTrading from './Components/AlgorithmicTrading';
import StockMarkets from './Components/StockMarkets';
import SmartMarketplace from './Components/SmartMarketplace';
// import B4 from './Components/blog/testBlog';
import Partnership from './Components/Partnership';
import Calculator from './Components/calculator/Calculator';
// import TestBlog from './Components/blog/testBlog'
// import B1 from "./Components/blog/b1";
import B2 from "./Components/blog/b2";
import B3 from "./Components/blog/b3";
import B4 from "./Components/blog/b4";
// import B5 from "./Components/blog/b5";
import B6 from "./Components/blog/b6";
import B7 from "./Components/blog/b7";
import B8 from "./Components/blog/b8";
import B9 from "./Components/blog/b9"
// import B10 from "./Components/blog/b10";
import B11 from "./Components/blog/b11";
import B15 from "./Components/blog/b15";
import B12 from "./Components/blog/b12";
// import B13 from "./Components/blog/b13";
// import B14 from "./Components/blog/b14";
import B16 from "./Components/blog/b16";
import B17 from "./Components/blog/b17";
import B18 from "./Components/blog/b18";
import B19 from "./Components/blog/b19";
import B20 from "./Components/blog/b20";
import B21 from "./Components/blog/b21";
import B22 from "./Components/blog/b22";
import B23 from "./Components/blog/b23";
import B24 from "./Components/blog/b24";
import B25 from "./Components/blog/b25";
import B26 from "./Components/blog/b26";
import B27 from "./Components/blog/b27";
import B28 from "./Components/blog/b28";
import B29 from "./Components/blog/b29";
import B30 from "./Components/blog/b30";
import B31 from "./Components/blog/b31";
// import B32 from "./Components/blog/b32";
import B33 from "./Components/blog/b33";
import B34 from "./Components/blog/b34";
import B35 from "./Components/blog/b35";
import B36 from "./Components/blog/b36";
import B37 from "./Components/blog/b37";
import B38 from "./Components/blog/b38";
import B39 from "./Components/blog/b39";
import B40 from "./Components/blog/b40";
import B41 from "./Components/blog/b41";
import B42 from "./Components/blog/b42";
import B43 from "./Components/blog/b43";
import B44 from "./Components/blog/b44";
import B45 from "./Components/blog/b45";
import B46 from "./Components/blog/b46";
import B47 from "./Components/blog/b47";
import B48 from "./Components/blog/b48";
import B49 from "./Components/blog/b49";
import B50 from "./Components/blog/b50";
import B51 from "./Components/blog/b51";
import B52 from "./Components/blog/b52";
import B53 from "./Components/blog/b53";
import B54 from "./Components/blog/b54";
import B55 from "./Components/blog/b55";
import B56 from "./Components/blog/b56";
import B57 from "./Components/blog/b57";
import B58 from "./Components/blog/b58";
import B59 from "./Components/blog/b59";
// import B60 from "./Components/blog/b60";
// import B61 from "./Components/blog/b61";
import B62 from "./Components/blog/b62";
import B63 from "./Components/blog/b63";



const Home =lazy(() => import('./Components/Home'));
const Footer =lazy(() => import('./Components/footer/Footer'))
const About =lazy(() => import('./Components/About'))
const NotFound =lazy(() => import('./Components/NotFound'))
const Terms =lazy(() => import('./Components/TC'))
const MiniLibrary =lazy(() => import('./Components/library/MiniLibrary'))
const Newsboard =lazy(() => import('./Components/newsboard/Newsboard')) 



function App() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  
  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<div>Loading inside App...</div>}>
      <Routes>
      
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/terms-and-conditions' element={<Terms/>}/>
        <Route exact path='/partner-program' element={<Partnership/>}/>
        <Route exact path='/calculator' element={<Calculator/>}/>
        <Route exact path='/library' element={<MiniLibrary/>}/>
        <Route exact path='/newsboard' element={<Newsboard/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route path='/blog/algorithmic-trading' element={<AlgorithmicTrading/>}/>
        <Route path='/blog/technical-analysis' element={<TechnicalAnalysis/>}/>
        <Route path='/blog/stock-markets' element={<StockMarkets/>}/>
        <Route exact path='/blog/algolab' element={<Algolab/>}/>
        <Route path='/blog/smart-marketplace' element={<SmartMarketplace/>}/>
  
        {/* <Route path='/blog/Intro-to-Stock-Markets/What-is-stock-market' element={<TestBlog/>}/> */}



        {/* <Route exact path="/blog/algorithmic-trading/Developing-investment-strategies-for-Algorithmic-Trading" element={B1} /> */}
        <Route exact path="/blog/algorithmic-trading/Benefits-of-Algo-trading" element={<B2/>} />
        <Route exact path="/blog/algolab/Components-of-a-Strategy" element={<B3/>} />
        <Route exact path="/blog/algorithmic-trading/Benefits-of-Algo-trading" element={<B4/>} />

        {/* <Route exact path="/blog/algorithmic-trading/Backtesting-Softwares-for-Stock-Market" element={B5} /> */}

        <Route exact path="/blog/stock-markets/Stock-Trading-in-India" element={<B6/>} />
        <Route exact path="/blog/algorithmic-trading/Introduction-to-Backtesting" element={<B7/>} />
        <Route exact path="/blog/algolab/Backtesting-at-Kuants" element={<B8/>} />
        <Route  path="/blog/How-it-Works-Video" element={<B9/>} />
        <Route exact path="/blog/algorithmic-trading/What-are-the-requirements-of-Algorithmic-Trading" element={B11} />
        <Route exact path="/blog/Importance-of-backtesting" element={<B12/>} />
        {/* <Route exact path="/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading" element={<B13/>} /> */}

        <Route exact path="/blog/algorithmic-trading/Step-by-Step-set-of-instructions-to-buy-and-sell-orders-while-trading-automatically-in-Algo-Trading" element={<B15/>} />

        <Route exact path="/blog/technical-analysis/Simple-Moving-Average" element={<B16/>} />
        <Route exact path="/blog/technical-analysis/Exponential-Moving-Average" element={<B17/>} />
        <Route exact path="/blog/technical-analysis/Volume-Weighted-Moving-Average" element={<B18/>} />
        <Route exact path="/blog/technical-analysis/Moving-Average-Convergence-Divergence" element={<B19/>} />
        <Route exact path="/blog/technical-analysis/Relative-Strength-Index" element={<B20/>} />
        <Route exact path="/blog/technical-analysis/True-Range" element={<B21/>} />
        <Route exact path="/blog/technical-analysis/Average-True-Range" element={<B22/>} />
        <Route exact path="/blog/technical-analysis/Rate-of-Change" element={<B23/>} />
        <Route exact path="/blog/technical-analysis/On-Balance-Volume" element={<B24/>} />
        <Route exact path="/blog/technical-analysis/Ease-of-Movement" element={<B25/>} />
        <Route exact path="/blog/technical-analysis/Aaron-Down" element={<B26/>} />
        <Route exact path="/blog/technical-analysis/Aaron-Up" element={<B27/>} />
        <Route exact path="/blog/technical-analysis/Pivot-Point" element={<B28/>} />
        <Route exact path="/blog/technical-analysis/Standard-Deviation" element={<B29/>} />
        <Route exact path="/blog/technical-analysis/Skewness" element={<B30/>} />
        <Route exact path="/blog/technical-analysis/Correlation" element={<B31/>} />
        <Route exact path="/blog/technical-analysis/previous-day-high" element={<B33/>} />
        <Route exact path="/blog/technical-analysis/previous-day-close" element={<B34/>} />
        <Route exact path="/blog/technical-analysis/previous-day-open" element={<B35/>} />
        <Route exact path="/blog/technical-analysis/previous-day-low" element={<B36/>} />
        <Route exact path="/blog/stock-markets/sensex" element={<B37/>} />
        <Route exact path="/blog/algorithmic-trading/Stock-Market-Simulator" element={<B38/>} />
        <Route exact path="/blog/algorithmic-trading/What-is-Algo-trading" element={<B39/>} />
        <Route exact path="/blog/algolab/Setting-the-Backtesting-Environment" element={<B40/>} />
        <Route exact path="/blog/algolab/Selecting-Stocks" element={<B41/>} />
        <Route exact path="/blog/algolab/Data-Available" element={<B42/>} />
        
        <Route exact path="/blog/algolab/Backtest-First-Strategy" element={<B43/>} />
        <Route exact path="/blog/algolab/Long-Strategy" element={<B44/>} />
        <Route exact path="/blog/algolab/Short-Strategy" element={<B45/>} />

        <Route exact path="/blog/algolab/Setting-Target-and-Stoploss" element={<B46/>} />
        <Route exact path="/blog/algolab/Tear-Sheet-in-algotrading" element={<B47/>} />
        <Route exact path="/blog/smart-marketplace/How-much-can-I-earn-using-SMART-algorithms" element={<B48/>} />
        <Route exact path="/blog/smart-marketplace/What-is-SMART-Algorithms" element={<B49/>} />
        <Route exact path="/blog/smart-marketplace/How-can-I-use-SMART-Algorithms" element={<B50/>} />
        <Route exact path="/blog/smart-marketplace/How-to-subscribe-to-a-SMART-Algorithm" element={<B51/>} />
        <Route exact path="/blog/smart-marketplace/What-are-the-details-I-need-to-look-into-to-judge-the-quality-of-a-SMART-Algorithm" element={<B52/>} />
        <Route exact path="/blog/smart-marketplace/What-are-the-benefits-of-using-SMART-Algorithms" element={<B53/>} />
        <Route exact path="/blog/stock-markets/What-is-stock-market" element={<B54/>} />
        <Route exact path="/blog/stock-markets/What-are-the-different-market-instruments" element={<B55/>} />
        <Route exact path="/blog/algorithmic-trading/What-is-algorithmic-Trading-and-how-is-algo-trading-different-from-manual-trading" element={<B56/>} />
        <Route exact path="/blog/algorithmic-trading/What-are-the-requirements-of-Algorithmic-Trading" element={<B57/>} />

        <Route exact path="/blog/What-are-the-Components-of-Algorithmic-Trading" element={<B58/>} />
      
        <Route exact path="/blog/algorithmic-trading/Backtesting-Meaning-and-Significance" element={<B59/>} />
        {/* <Route exact path="/blog/algorithmic-trading/All-you-need-to-know-about-Algotrading" element={<B60/>} /> */}

        {/* <Route exact path="/blog/how-to-start-algo-trading-with-smart-software" element={<B61/>} /> */}
        <Route exact path="/blog/stock-markets/How-can-I-participate-in-stock-markets" element={<B62/>} />
        <Route exact path="/blog/algorithmic-trading/What-is-Slippage" element={<B63/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
