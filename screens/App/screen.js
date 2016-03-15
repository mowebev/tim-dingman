import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';

// layout
import Header from 'components/layout/Header';
import Navigation from 'components/layout/Navigation';
import NavigationLink from 'components/layout/NavigationLink';
import Main from 'components/layout/Main';
import Content from 'components/layout/Content';
import Aside from 'components/layout/Aside';
import Footer from 'components/layout/Footer';
import Gallery from 'components/layout/Gallery';
import Thumbnail from 'components/layout/Thumbnail';


class App extends Component {
  render() {
    const props = this.props;
    return (
      <app>
        <Header />
        <Main>
          <Navigation>
            <NavigationLink name="Home" link="/" />
            <NavigationLink name="Photography" link="/photography" />
            <NavigationLink name="Digital" link="/digital" />
            <NavigationLink name="Artwork" link="/artwork" />
            <NavigationLink name="About" link="/about" />
          </Navigation>
          <Content>
            <Gallery>
              <Thumbnail
                img="1.jpg"
                size="large"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="2.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="3.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="4.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="3.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="4.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="2.jpg"
                size="large"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="1.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="2.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="4.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="1.jpg"
                size="large"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="3.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="4.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="1.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="3.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="2.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="1.jpg"
                size="large"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />

              <Thumbnail
                img="4.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="2.jpg"
                size="medium"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
              <Thumbnail
                img="3.jpg"
                size="small"
                name="Name of Piece"
                description="My description here..."
                price="$99.99"
              />
            </Gallery>
          </Content>
          <Aside>{props.aside}</Aside>
        </Main>
        <Footer />
      </app>
    );
  }
}

App.propTypes = {
  header: PropTypes.element,
  content: PropTypes.element,
  aside: PropTypes.element,
};


export default App;
