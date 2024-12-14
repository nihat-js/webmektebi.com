// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 KodMektebi. All rights reserved.</p>
        <p className="mt-2">Follow us on:</p>
        <div className="mt-4 space-x-6">
          <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
