export default function Contact() {
    return (
      <section id="contact" className="h-screen py-16 bg-gradient-to-r from-[#CBD2A4] via-[#C9E9D2] to-[#E4E0E1] dark:bg-gray-900 rounded-2xl">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300">📍 Kolkata</p>
          <p className="mb-4 text-gray-800 dark:text-gray-300">📞 +91 91356 19017</p>
          <p className="mb-4 text-gray-800 dark:text-gray-300">📧 amit1317jmp@gmail.com</p>
          <a href="/assets/resume-amit-kumar.pdf" download className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Download Resume</a>
        </div>
      </section>
    );
  }
  