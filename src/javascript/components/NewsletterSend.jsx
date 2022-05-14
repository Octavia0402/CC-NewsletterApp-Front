import React from "react";
import axios from "axios";
import { LANGUAGES_ARRAY } from "../utils/constants";

const sendNewsletter = async (e) => {
    const results = await axios.get(`${process.env.REACT_APP_API_URL}/subscribers/allMails`);
    const allMails = results.data.allMails;
    const button = e.target;
    const language = button.value;
    const senderName = "Octavia Prepelita";
    const messageContent = document.getElementById('messageContent').value;

    try {
        let i = 0;
        while (i < allMails.length) {
            let receiverMail = allMails[i].subscriberMail;
            console.log(receiverMail)
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/subscribers/sendNewsletter`,
                {
                    language,
                    senderName,
                    receiverMail,
                    messageContent,
                    senderMail: 'guritaalexandru18@stud.ase.ro',
                }
            )

            console.log(response);
            i++;
        }
        alert(`Newsletter has been successfully sent to all subscribers: ${messageContent}`);

    } catch (error) {
        console.log(error);
    }
}
function NewsletterSend() {
    return (
        <div id="NewsletterSend" className='flex max-w-7xl m-auto px-14 py-24'>
            <div className='w-1/2 pr-5'>
                <label className="block uppercase text-gray-700 text-xl font-bold mb-2">
                    Newsletter
                </label>
                <textarea
                    id="messageContent"
                    rows={6}
                    className="shadow-md block w-full sm: text-sm border-gray-800 rounded-md p-5"
                    placeholder={'Hello and thank you for subscribing to our Newsletter!'}
                />
            </div>
            <div className='w-1/2 pr-5'>
                <h2 className="block uppercase text-gray-700 text-xl font-bold mb-2 mt-10">Please choose language</h2>

                {
                    LANGUAGES_ARRAY.map((language, index) =>
                        <button
                            key={index}
                            className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 capitalize'
                            value={language}
                            onClick={sendNewsletter}
                        >
                            {language}
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default NewsletterSend;