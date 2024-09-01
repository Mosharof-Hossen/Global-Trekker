

const ContactUs = () => {
    return (
        <div className="p-10 dark:text-white">
            <div>
                <div className="space-y-3">
                    <h3 className="font-bold text-3xl">Contact Us</h3>
                    <p className="text-gray-600 dark:text-white text-justify">We’re here to help you plan your next adventure! Whether you have questions about our tours, need assistance with booking, or want to share your travel experiences with us, we’d love to hear from you.</p>
                    <p className="text-gray-600 dark:text-white text-justify font-bold text-lg">Office Address</p>
                    <p>
                        <span className="font-semibold">Estate Stay</span> <br />
                        1234 Go Travel <br />
                        Suite 567 <br />
                        Cityville, State 12345 <br />
                        Country
                    </p>

                    <p className="text-gray-600 text-justify dark:text-white font-bold text-lg">Phone Number</p>
                    <ul className="list-inside">
                        <li className="list-disc"><span className="font-semibold">General Inquiries:</span> +1 (123) 456-7890</li>
                        <li className="list-disc"><span className="font-semibold">Sales Department: </span> +1 (123) 456-7891</li>
                        <li className="list-disc"><span className="font-semibold">Customer Support: </span> +1 (123) 456-7892</li>
                    </ul>
                    <p className="text-gray-600 text-justify dark:text-white font-bold text-lg">Email Address</p>
                    <ul className="list-inside">
                        <li className="list-disc"><span className="font-semibold">General Information:</span>  info@gotravel.com</li>
                        <li className="list-disc"><span className="font-semibold">Sales Inquiries:</span> sales@gotravel.com</li>
                        <li className="list-disc"><span className="font-semibold">Support:</span> support@gotravel.com</li>
                    </ul>
                    <p className="text-gray-600 dark:text-white text-justify font-bold text-lg">Visit Us</p>
                    <ul className="list-inside">
                        <p className="text-gray-600 dark:text-white text-justify">Our office is conveniently located in the heart of Cityville, making it easy for you to drop by for a consultation. We look forward to welcoming you! </p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;