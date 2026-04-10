const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} <span className="text-primary font-heading font-semibold">Shahbaz Alam</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
