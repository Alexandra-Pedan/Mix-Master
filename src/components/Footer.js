const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Alexandra-Pedan?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Repositories
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
