import React from "react";
import axios from "axios";

const subscribe = async (e) => {
    const subscriberName = document.getElementById('subscriberName').value;
    const subscriberMail = document.getElementById('subscriberMail').value;

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/subscribers`,
            {
                subscriberName,
                subscriberMail
            }
        )

        console.log(response);

        if (response) {
            alert("A new user has subscribed to our Newsletter!");
        }
    } catch (error) {
        console.log(error);
    }
}

function AddSubscriber() {
    return (
        <div id="AddSubscriber">
            <h2 className='text-2xl font-bold mb-4'>Subscribe to our Newsletter!</h2>
            <form>
                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Your name
                </label>
                <input className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3" id="subscriberName" type="text" placeholder="John"></input>

                <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Your mail
                </label>
                <input className="block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3" id="subscriberMail" type="text" placeholder="john@gmail.com"></input>
                <button
                    className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 capitalize'
                    onClick={subscribe}
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default AddSubscriber;