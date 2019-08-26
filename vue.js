import injectScript from './inject'

/**
 * Method to create storybook vue decorator for inject external links
 * @param {String} url
 * @param {Object} options
 * @return {Function} decorator method
 */
function decoratorFactory(url = '', options) {
  if (!url || !url.length) {
    console.warn('No url provided to `external-links` Storybook decorator')
    return () => ({ template: `<story />` });
  }

  return () => ({
    template: `<story />`,
    mounted() {
      injectScript(url, options)
    }
  })
}

export default decoratorFactory
