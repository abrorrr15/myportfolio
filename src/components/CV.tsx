

const DownloadCV = () => {
  return (
    <div className="flex items-center">
      <a href="/cv.pdf" download="My_CV.pdf" className="text-blue-500 underline">
        Download CV
      </a>
    </div>
  );
};

export default DownloadCV;
