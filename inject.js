/**
 * Method to inject script url to header after mounting
 * @param {String} url
 * @param {Object} options  example: { async: true, defer: true }
 */
function injectScript(url = '', options) {
  let $$script = document.createElement('script');
  let $$head = document.querySelector('head')

  $$script.src = url;

  $$script.onload = () => {
    console.log(`${url} loaded`)
  };
  $$script.onerror = () => {
    console.log('Error loading url')
  };

  // overwrite properties based on `options` param
  if (options && (typeof options === 'object')) {
    const keys = Object.keys(options)

    keys.forEach(key => {
      $$script[key] = options[key]
    })
  }


  $$head.appendChild($$script)
}

export default injectScript