import React from 'react';
import Header from './Header';
import SubscribersList from './SubscribersList';
import AddSubscriber from './AddSubscriber';
import NewsletterSend from './NewsletterSend';

function MainPage(props) {
    return (
        <div id="MainPage">
            <Header title={'Newsletter App'}/>
            <h1 className='mt-10 text-purple-600 text-3xl font-bold'>Welcome to our Newsletter!</h1>
            <div className='flex max-w-7xl m-auto px-14 py-24'>
                <div className='w-1/2 pr-5'>
                    <AddSubscriber />
                </div>
                <div className='w-1/2 pl-5'>
                    <SubscribersList />
                </div>
            </div>
            <div>
                <NewsletterSend />
            </div>
        </div>
    );
}

export default MainPage;