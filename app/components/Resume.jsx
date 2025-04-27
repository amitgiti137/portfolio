'use client';

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">My Resume</h2>
      <iframe
        src="/amit_resume.pdf"
        width="80%"
        height="600px"
        className="rounded-lg shadow-lg"
      />
      <a
        href="/amit_resume.pdf"
        download
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}
