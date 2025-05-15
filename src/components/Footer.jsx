function Footer() {
  return (
    <footer className="bg-pink-800 text-pink-100 py-6 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <div className="flex items-center space-x-3 mb-4 sm:mb-0">
          <span className="text-2xl">🎬</span>
          <h3 className="text-xl font-semibold">LiliMovie By Linda</h3>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} LiliMovie By Linda. Tutti i diritti
          riservati.
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0 text-pink-100">
          <a
            href="#"
            className="hover:text-pink-300 transition"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-lg"></i>
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="#"
            className="hover:text-pink-300 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
