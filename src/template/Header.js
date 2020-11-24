const Header = () => {
  const view = `
    <div class="container">
      <nav class="nav">
        <div class="logo"><a href="/">100Tyfy.co</a></div>
        <div class="menu">
          <ul>
            <li><a href="#/about/">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="darkMode">
          <input type="checkbox" class="switch" id="switch">
          <label for="switch" class="lbl"></label>
        </div>
      </nav>
    </div>
  `;
  return view;
};

export default Header;
