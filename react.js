import React, { Fragment } from 'react'
import injectScript from './inject'


class WithExternalLink extends React.PureComponent {
  componentDidMount() {
    injectScript(this.props.url, this.props.options)
  }
  render() {
    return this.props.children
  }
}

  /**
   * Method to create storybook vue decorator for inject external links
   * @param {String} url
   * @param {Object} options
   * @return {Function} decorator method
   */
  function decoratorFactory(url = '', options) {
    if (!url || !url.length) {
      console.warn('No url provided to `external-links` Storybook decorator')
      return getStory => getStory();
    }


    // return getStory => <WithExternalLink url={url} options={options}>{ getStory() }</WithExternalLink>
    return getStory => React.createElement(
      WithExternalLink,
      {
        url,
        options,
      },
      getStory(),
    )
  }
  
export default decoratorFactory
