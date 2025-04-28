'use client';

export default function Resume() {
    return (
        <>
            <section className="container mx-auto p-4 bg-amber-50">
                <div>
                    <h1 className="text-4xl mb-4">Resume</h1>
                </div>
                <div>
                    <h2 className="text-2xl mb-3">Education</h2>
                    <div className="flex flex-wrap space-y-2 space-x-2">
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg">Bachelor of Engineering</h3>
                            <p className="text-sm">Radharaman Institute Of Technology And Science</p>
                            <div className="flex justify-between text-sm">
                                <p>Mechanical Engineering</p>
                                <p> | Aug 2013 - Jun 2017 | </p>
                                <p>75%</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg">Bachelor of Engineering</h3>
                            <p className="text-sm">Radharaman Institute Of Technology And Science</p>
                            <div className="flex justify-between text-sm">
                                <p>Mechanical Engineering</p>
                                <p> | Aug 2013 - Jun 2017 | </p>
                                <p>75%</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl w-[100%] lg:w-[48%] p-6">
                            <h3 className="text-lg">Bachelor of Engineering</h3>
                            <p className="text-sm">Radharaman Institute Of Technology And Science</p>
                            <div className="flex justify-between text-sm">
                                <p>Mechanical Engineering</p>
                                <p> | Aug 2013 - Jun 2017 | </p>
                                <p>75%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="resume" className="py-16 px-6 bg-gray-50 rounded-xl flex flex-col items-center">
                <h2 className="text-4xl font-bold mb-10 text-center">Amit Kumar</h2>

                {/* Contact Info */}
                <div className="text-center mb-12">
                    <p className="text-lg">Kolkata</p>
                    <p className="text-lg">+91 91356 19017</p>
                    <p className="text-lg">amit1317jmp@gmail.com</p>
                </div>

                {/* Workplace Projects */}
                <div className="max-w-4xl w-full mb-12">
                    <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Workplace Projects</h3>

                    {/* Project 1 */}
                    <div className="mb-8">
                        <h4 className="text-xl font-bold mb-2">Tutopia E-commerce Website Development</h4>
                        <p className="mb-2">It is a web application designed for online shopping, offering a seamless browsing and purchasing experience.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Developed a responsive frontend optimized for mobile and desktop views.</li>
                            <li>Implemented dynamic product listings, category filters, and a smooth checkout process.</li>
                            <li>Integrated API calls to fetch and display real-time product data and user-specific details.</li>
                        </ul>
                        <p className="font-semibold mb-1">Tech Stack: Next.js | Tailwind CSS | JavaScript</p>
                        <p className="font-semibold">Areas of Responsibility:</p>
                        <ul className="list-disc list-inside">
                            <li>Designed and developed the frontend using Next.js and Tailwind CSS.</li>
                            <li>Handled API integration for product details, cart operations, and order processing.</li>
                            <li>Ensured responsive compatibility across mobile and desktop devices.</li>
                            <li>Optimized API handling for efficient data fetching.</li>
                            <li>Collaborated on testing, debugging, and completed the project within two months.</li>
                        </ul>
                    </div>

                    {/* Project 2 */}
                    <div>
                        <h4 className="text-xl font-bold mb-2">Task Management Web Application</h4>
                        <p className="mb-2">It is a web application designed to efficiently manage employee tasks, with admin control features and chat functionality for task-related discussions.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Developed the backend using Node.js with MongoDB Atlas for data storage.</li>
                            <li>Created APIs for task management, employee assignment, and real-time chat functionality.</li>
                            <li>Designed a responsive frontend using Next.js for task and chat interfaces.</li>
                            <li>Ensured seamless UI adjustments and enhanced user experience.</li>
                        </ul>
                        <p className="font-semibold mb-1">Tech Stack: Next.js | Tailwind CSS | Node.js | MongoDB Atlas</p>
                        <p className="font-semibold">Areas of Responsibility:</p>
                        <ul className="list-disc list-inside">
                            <li>Developed and managed backend APIs for task and employee management.</li>
                            <li>Integrated secure chat features for employee communication.</li>
                            <li>Designed and developed the frontend for clarity in task management.</li>
                            <li>Optimized performance and ensured smooth API integration.</li>
                        </ul>
                    </div>
                </div>

                {/* About */}
                <div className="max-w-4xl w-full mb-12">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">About</h3>
                    <p className="text-justify">
                        As a dedicated web developer at DigitalWolf Kolkata since August 2024,
                        I have honed my skills in designing and developing efficient, user-centric web solutions.
                        Combining creativity, technical expertise, and a collaborative mindset,
                        I contribute to delivering high-quality projects that align with business goals and user expectations.
                    </p>
                </div>

                {/* Skills */}
                <div className="max-w-4xl w-full mb-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <h3 className="col-span-full text-2xl font-semibold mb-4 border-b pb-2">Skills</h3>
                    <p>VS Code</p>
                    <p>MongoDB</p>
                    <p>Postman</p>
                    <p>GitHub</p>
                    <p>Vercel</p>
                    <p>ChatGPT</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React.js</p>
                    <p>Next.js</p>
                    <p>Node.js</p>
                </div>

                {/* Education */}
                <div className="max-w-4xl w-full mb-12">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Educational Background</h3>
                    <ul className="list-disc list-inside space-y-4">
                        <li>
                            <p className="font-bold">Bachelor of Engineering</p>
                            <p>Radharaman Institute Of Technology And Science</p>
                            <p>Mechanical Engineering | Aug 2013 - Jun 2017 | Percentage: 75%</p>
                        </li>
                        <li>
                            <p className="font-bold">Intermediate</p>
                            <p>K N Memo Academy Asarganj, Munger</p>
                            <p>July 2010 - Mar 2012 | Percentage: 72.2%</p>
                        </li>
                        <li>
                            <p className="font-bold">Matriculation</p>
                            <p>Kendriya Vidyalaya Jamalpur, Munger</p>
                            <p>April 2009 - Mar 2010 | CGPA: 9</p>
                        </li>
                    </ul>
                </div>

                {/* Languages */}
                <div className="max-w-4xl w-full mb-12">
                    <h3 className="text-2xl font-semibold mb-4 border-b pb-2">Languages</h3>
                    <p>English (Working Proficient)</p>
                    <p>Hindi (Fluent)</p>
                </div>
            </section>
        </>

    );
}
