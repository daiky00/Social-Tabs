import React from 'react'
//Components
import Tabs from '../../components/Tabs'
import Tab from '../../components/Tabs/Tab'
import Heading from '../../components/Tabs/Heading/Heading'
import Button from '../../components/Tabs/Button/Button'
import Content from '../../components/Tabs/Content/Content'
import Img from '../../components/Tabs/Img/Img'

//Assets
import me from './Assets/me.png'
import dribbble from './Assets/dribbble.gif'
import behance from './Assets/behance.gif'
import linkedin from './Assets/linkedin.gif'
import twitter from './Assets/twitter.gif'
import instagram from './Assets/instagram.gif'
import vimeo from './Assets/vimeo.gif'



const HomeView = () => (


  <div>
    <Tabs selected={0}>
      <Tab label="none" transitionName="animation">
        <Content>
          <Heading><strong>Hello</strong> WORLD</Heading>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
            pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
        </Content>
        <Img src={me} />
      </Tab>
      <Tab label="dribbble">
        <Content>
          <Heading><strong>My</strong> Dribbble</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={dribbble} />
      </Tab>
      <Tab label="behance">
        <Content>
          <Heading><strong>My</strong> BEHANCE</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={behance} />
    </Tab>
      <Tab label="linkedin">
        <Content>
          <Heading><strong>My</strong> LINKEDIN</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={linkedin} />
      </Tab>
      <Tab label="twitter">
        <Content>
          <Heading><strong>My</strong> TWITTER</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={twitter} />
      </Tab>
      <Tab label="instagram">
        <Content>
          <Heading><strong>My</strong> INSTAGRAM</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={instagram} />
      </Tab>
      <Tab label="vimeo">
        <Content>
          <Heading><strong>My</strong> VIMEO</Heading>
          <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <Button>Learn More</Button>
        </Content>
        <Img src={vimeo} />
      </Tab>
    </Tabs>
  </div>
);

export default HomeView
