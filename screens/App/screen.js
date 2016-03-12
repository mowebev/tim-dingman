import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';

// layout
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Navigation from 'components/layout/Navigation';
import Content from 'components/layout/Content';
import Aside from 'components/layout/Aside';
import Footer from 'components/layout/Footer';
import Gallery from 'components/layout/Gallery';
import Thumbnail from 'components/layout/Thumbnail';

// flexbox
import Column from 'components/flexbox/Column';
import Columns from 'components/flexbox/Columns';

// components
import NavigationHeading from 'components/layout/NavigationHeading';
import NavigationLink from 'components/layout/NavigationLink';


class App extends Component {
  render() {
    const props = this.props;
    return (
      <app>
        <Header />
        <Main>
          <Content>
            <Gallery>
              <Thumbnail img="1.jpg" />
              <Thumbnail img="2.jpg" />
              <Thumbnail img="3.jpg" />
              <Thumbnail img="4.jpg" />

              <Thumbnail img="3.jpg" />
              <Thumbnail img="4.jpg" />
              <Thumbnail img="2.jpg" />
              <Thumbnail img="1.jpg" />

              <Thumbnail img="2.jpg" />
              <Thumbnail img="4.jpg" />
              <Thumbnail img="1.jpg" />
              <Thumbnail img="3.jpg" />

              <Thumbnail img="4.jpg" />
              <Thumbnail img="1.jpg" />
              <Thumbnail img="3.jpg" />
              <Thumbnail img="2.jpg" />

              <Thumbnail img="1.jpg" />
              <Thumbnail img="4.jpg" />
              <Thumbnail img="2.jpg" />
              <Thumbnail img="3.jpg" />
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
