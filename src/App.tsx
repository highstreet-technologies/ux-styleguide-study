/******************************************************************************
 * Copyright 2018 highstreet-technologies GbmH
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/

import * as React from 'react';
import './App.css';
import './styles/none.css';
import './styles/odl.css';
import './styles/onap.css';
import './styles/karaf.css';
import './styles/ht.css';
import './styles/frinx.css';
import './styles/att.css';
import './styles/tef.css';
import './styles/dtag.css';
import './styles/unicorn.css';

interface NavItem {
  name: string;
  iconClassName: string
}

interface DesignItem {
  name: string,
  abbreviation: string,
  logo: string
}

class App extends React.Component<any, any> {

  private nav: NavItem[] = [{
    name: 'Connect',
    iconClassName: 'fas fa-plug'
  }, {
    name: 'Fault',
    iconClassName: 'fas fa-bell'
  }, {
    name: 'Configuration',
    iconClassName: 'fas fa-cogs'
  }, {
    name: 'Acounting',
    iconClassName: 'fas fa-money-bill'
  }, {
    name: 'Performance',
    iconClassName: 'fas fa-chart-bar'
  }, {
    name: 'Security',
    iconClassName: 'fas fa-shield-alt'
  }, {
    name: 'Inventory',
    iconClassName: 'fas fa-box'
  }, {
    name: 'Chat',
    iconClassName: 'fas fa-comments'
  }, {
    name: 'Preferences',
    iconClassName: 'fas fa-cog'
  }, {
    name: 'Help',
    iconClassName: 'fas fa-question-circle'
  }];
  private design: DesignItem[] = [{
    name: 'none',
    abbreviation: 'none',
    logo: 'https://www.watson.ch/media/img/main/icons/icon_quiz_check_white.png'
  }, {
    name: 'OpenDaylight',
    abbreviation: 'odl',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/OpenDaylight_logo.png'
  }, {
    name: 'Open Network Automation Plattform',
    abbreviation: 'ONAP',
    logo: 'https://www.onap.org/wp-content/uploads/sites/20/2017/02/logo_onap_2017.png'
  }, {
    name: 'Apache Karaf',
    abbreviation: 'Karaf',
    logo: 'http://karaf.apache.org/manual/latest-2.x/images/karaf-logo.png'
  }, {
    name: 'highstreet technologies',
    abbreviation: 'ht',
    logo: 'http://www.highstreet-technologies.com/wp-content/uploads/2016/10/logo-highstreet-technologies.svg'
  }, {
    name: 'Frinx',
    abbreviation: 'Frinx',
    logo: 'https://frinx.io/wp-content/uploads/2016/04/logo_frinx_main.png'
  }, {
    name: 'AT&T',
    abbreviation: 'att',
    logo: 'https://pmcvariety.files.wordpress.com/2016/04/att_logo.jpg?w=1000&h=563&crop=1'
  }, {
    name: 'Telefonica',
    abbreviation: 'TEF',
    logo: 'https://www.telefonica.de/file/public/458/Telefonica-Logo_300dpi.jpg?attachment=1'
  }, {
    name: 'Deutsche Telekom',
    abbreviation: 'DTAG',
    logo: 'https://pbs.twimg.com/profile_images/378800000533064974/7d8663cf1f29b30be10381174152bca2_400x400.png'
  }, {
    name: 'Unicorn',
    abbreviation: 'unicorn',
    logo: 'https://www.testedich.de/quiz45/picture/pic_1483614051_3.jpg?1483659011' // 'https://ae01.alicdn.com/kf/HTB1lPa8SFXXXXaxapXXq6xXFXXX3/1PCS-Badges-Cartoon-Unicon-Eye-Iron-Patches-For-Clothing-Cute-Sewing-Embroidery-Heart-Patch-for-Stickers.jpg_640x640.jpg'
  }];
  private brightness: Array<string> = ['light', 'dark'];
  private navStyle: Array<string> = ['none', 'small', 'medium', 'large'];
  private navPosition: Array<string> = ['left', 'right'];

  constructor(props: any) {
    super(props);
    this.state = {
      selectedDesign: this.design[0].abbreviation.toLocaleLowerCase(),
      selectedBrightness: this.brightness[0],
      selectedNavStyle: this.navStyle[2],
      selectedNavPosition: this.navPosition[0],
      showFrame: true
    };
  }

  // Handlers
  handleDesignOnChange = (changeEvent: any) => {
    this.setState({ selectedDesign: changeEvent.target.value });
  };
  handleBrightnessOnChange = (changeEvent: any) => {
    this.setState({ selectedBrightness: changeEvent.target.value });
  };
  handleNavStyleOnChange = (changeEvent: any) => {
    this.setState({ selectedNavStyle: changeEvent.target.value });
  };
  handleNavPositionOnChange = (changeEvent: any) => {
    this.setState({ selectedNavPosition: changeEvent.target.value });
  };
  handleShowOnChange = () => {
    this.setState({ showFrame: !this.state.showFrame });
  };

  public render() {

    let header;
    let footer;
    let nav;

    if (this.state.showFrame) {
      header = <header>
        <div className="app-logo"></div>
        <div className="app-name">
          <i className="fas fa-plug"></i>
          <span>Connect</span>
        </div>
        <div>
          <i className="fas fa-user"></i>
          <span>&nbsp;</span>
          <span>user@email.io</span>
        </div>
      </header>;
      
      footer = <footer>
        <div>ux-frame</div>
        <div>Version: 0.0.0</div>
      </footer>;
    }
    if (this.state.showFrame && this.state.selectedNavStyle !== this.navStyle[0]) {
      nav = <nav>
        <ul>
          {this.nav.map((item, index) => {
            return (
              <li key={index} className={this.state.selectedNavStyle}>
                <a href={'#/' + item.name.toLowerCase()}><i className={item.iconClassName}></i><br/><span>{item.name}</span></a>
              </li>
            );
          })}
        </ul>
      </nav>;
    }

    let selectedDesignItem = this.design.filter((item) => {
      return item.abbreviation.toLowerCase() === this.state.selectedDesign;
    })[0];

    return (
      <div className={['App', this.state.selectedDesign, this.state.selectedBrightness].join(' ')} >
        {header}

        <main className={this.state.selectedNavPosition}>
          {nav}
          <article>

            <h1>Theme</h1>
            <p>Select your prefrerence.</p>

            <div className="flex-container">
              <div>
                <h2>Design</h2>
                {this.design.map((item, index) => {
                  let value = item.abbreviation.toLowerCase();
                  return (
                    <div key={index} className="md-radio">
                      <input id={value} value={value} type="radio" name="design" onChange={this.handleDesignOnChange} checked={value === this.state.selectedDesign} />
                      <label htmlFor={value}>{item.name}</label>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2>Brightness</h2>
                {this.brightness.map((item, index) => {
                  return (
                    <div key={'brightness' + index} className="md-radio">
                      <input id={item} value={item} type="radio" name="brightness" onChange={this.handleBrightnessOnChange} checked={item === this.state.selectedBrightness} />
                      <label htmlFor={item}>{item}</label>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2>Navigation</h2>
                <h3>Style</h3>
                {this.navStyle.map((item, index) => {
                  let id = 'navStyle' + index;
                  return (
                    <div key={id} className="md-radio">
                      <input id={id} value={item} type="radio" name="nav-style" onChange={this.handleNavStyleOnChange} checked={item === this.state.selectedNavStyle} />
                      <label htmlFor={id}>{item}</label>
                    </div>
                  );
                })}
                <h3>Position</h3>
                {this.navPosition.map((item, index) => {
                  let id = 'navPosition' + index;
                  return (
                    <div key={id} className="md-radio">
                      <input id={id} value={item} type="radio" name="nav-position" onChange={this.handleNavPositionOnChange} checked={item === this.state.selectedNavPosition} />
                      <label htmlFor={id}>{item}</label>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2>Frame</h2>
                <div className="md-checkbox">
                  <input id="show" type="checkbox" onChange={this.handleShowOnChange} defaultChecked={this.state.showFrame} />
                  <label htmlFor="show">show</label>
                </div>
              </div>


            <div className="border-left">
              <h2>Your selection</h2>
              <p><span>Design: </span><b>{selectedDesignItem.name}</b></p>
              <img src={selectedDesignItem.logo} title={selectedDesignItem.name} alt={selectedDesignItem.name} height="49px" />
              <p><span>Brightness: </span><b>{this.state.selectedBrightness}</b></p>
              <p><span>Navigation: </span><b>{this.state.selectedNavStyle}</b><span>, </span><b>{this.state.selectedNavPosition}</b></p>
              <p><span>Show frame: </span><b>{String(this.state.showFrame)}</b></p>
            </div>

            </div>
          </article>
        </main >

        {footer}
      </div >
    );
  }
}

export default App;
