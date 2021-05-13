import React from 'react';
import Footer from './Footer';
import Header from './Header';
import SearchSlider from './SearchSlider';

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
            <Footer />

        </div>
    );
}

export default Home;