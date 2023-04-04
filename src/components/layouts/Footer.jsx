const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p style={{ color: '#fff' }}>
        Copyright &copy;{footerYear} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
