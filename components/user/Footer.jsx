"use client"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 KodMektebi. Bütün hüquqlar qorunur.</p>
        <p className="mt-2">Bizi izləyin:</p>
        <div className="mt-4 space-x-6">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
        </div>
        <p className="mt-6">Əgər bizə dəstək olmaq istəsəniz, bizimlə <a href="mailto:contact@kodmektebi.com" className="hover:text-gray-400">əlaqə saxlayın</a> 💖</p>
      </div>
    </footer>
  );
}

export default Footer;
