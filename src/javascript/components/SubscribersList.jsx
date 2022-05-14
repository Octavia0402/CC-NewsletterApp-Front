import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SubscribersList() {

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:8080/subscribers');
            // const result = await axios.get(`${process.env.REACT_APP_API_URL}/subscribers`);

            if (result.data.subscribers) {
                let subscribersArray = result.data.subscribers;
                subscribersArray.reverse();
                setSubscribers(subscribersArray);
            }
        };
        fetchData();
    }, []);

    return (
        <div id="SubscribersList">
            <h2 className='text-2xl font-bold mb-4'>Our Subscribers</h2>
            <table className="border-separate border border-slate-400">
                <thead>
                    <tr>
                        <th className="border border-slate-300">Name</th>
                        <th className="border border-slate-300">Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {subscribers.length ? subscribers.map((val, key) => {
                        return (
                            <tr key={val.entryID}>
                                <td className="border border-slate-300">{val.subscriberName}</td>
                                <td className="border border-slate-300">{val.subscriberMail}</td>
                            </tr>
                        )
                    }) :
                        <tr>
                            <td>No subscribers yet</td>
                        </tr>

                    }
                </tbody>
            </table>
        </div>
    );
}

export default SubscribersList;