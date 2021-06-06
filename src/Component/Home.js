import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SearchSlider from './SearchSlider';
import './Home.css';
import schoolboard from '../Images/blackboard (1).png';

const Home = () => {
    const schoolTitle = [
        {
            id: 'e1',
            schoolName : 'Shri Ji Baba Saraswati Vidya Mandir',
        },
        {
            id: 'e2',
            schoolName : 'GLA',
        },
        {
            id: 'e3',
            schoolName : 'Galgotia College',
        },
        {
            id: 'e4',
            schoolName : 'Amar Nath Vidya Ashram',
        },
        {
            id: 'e5',
            schoolName : 'SJBSVM',
        }
    ]
    console.log(schoolTitle);
    return (
        <div>
            <Header />
            <SearchSlider />
            <div>
                <h1 style={{textAlign: "center"}}>School Board</h1>
              <div className="board_div">
                  <div className="board_box">
                      <img src={schoolboard} alt="" className="school_board_img"/>
                      <p>CBSE</p>
                  </div>
                  <div className="board_box">
                  <img src={schoolboard} alt="" className="school_board_img"/>
                     <p>ICSE</p> 
                  </div>
                  <div className="board_box">
                  <img src={schoolboard} alt="" className="school_board_img"/>
                     <p>State Board</p> 
                  </div>
              </div>

            </div>
            <Footer />

        </div>
    );
}

export default Home;