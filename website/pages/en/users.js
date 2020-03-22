/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `https://github.com/wechatpy/wechatpy.org/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>谁在使用 wechatpy?</h1>
              <p>wechatpy 已经被很多公司和个人使用</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>你是否在用本项目?</p>
            <a href={editUrl} className="button">
              添加你的公司
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
