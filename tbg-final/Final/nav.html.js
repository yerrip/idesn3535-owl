const headerTemplate = `
  	<header>
  		<h1>
        
        <a href="index.html"><img src="tbg-logo.svg"></a>
        </h1>

        <nav class="{{class}}">
          <a class="about-nav" href="about.html">About</a>
          <a class="visit-nav" href="visit.html">Visit</a>
          <a class="events-nav" href="events.html">Events</a>
          <a class="shop-nav" href="shop.html">Shop</a>
        </nav>
  	</header>

    <div class="top-bar">
      <p>Today's Hours are 10PM - 6PM</p>
      <div class="search">
          <img src= "search.svg"><input id="input1" type="text" placeholder="Search">
      </div>
    </div>

    <div id="menu-toggle">
    <img src="menu-green.svg"/>
    </div>

    <div class="menu">

    <nav class="{{class}}">
          <a class="about-nav" href="about.html">About</a>
          <a class="visit-nav" href="visit.html">Visit</a>
          <a class="events-nav" href="events.html">Events</a>
          <a class="shop-nav" href="shop.html">Shop</a>
        </nav>

        </div>


`;

const headerTemplateAbout = `

    <header>
        <h1>
        <a href="index.html"><img src="tbg-logo-b.svg"></a>
        </h1>

        <nav class="{{class}}">
          <a class="about-nav" href="about.html">About</a>
          <a class="visit-nav" href="visit.html">Visit</a>
          <a class="events-nav" href="events.html">Events</a>
          <a class="shop-nav" href="shop.html">Shop</a>
        </nav>
    </header>


`;

const headerTemplateVisit = `

    <header>
        <h1>
        <a href="index.html"><img src="tbg-logo-b-black.svg"></a>
        </h1>

        <nav class="{{class}}">
          <a class="about-nav" href="about.html">About</a>
          <a class="visit-nav" href="visit.html">Visit</a>
          <a class="events-nav" href="events.html">Events</a>
          <a class="shop-nav" href="shop.html">Shop</a>
        </nav>
    </header>


`;

const headerTemplateEvents = `

    <header>
        <h1>
        <a href="index.html"><img src="tbg-logo-b-white.svg"></a>
        </h1>

        <nav class="{{class}}">
          <a class="about-nav" href="about.html">About</a>
          <a class="visit-nav" href="visit.html">Visit</a>
          <a class="events-nav" href="events.html">Events</a>
          <a class="shop-nav" href="shop.html">Shop</a>
        </nav>
    </header>


`;

const footerTemplate = `

<footer>
</footer>

`;