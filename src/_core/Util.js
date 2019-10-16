class Util {
  constructor() {
    this.features = {};
  }

  sendMessage(message, response) {
    chrome.runtime.sendMessage(message, response);
  }

  isBackground() {
    return chrome !== undefined && chrome.extension !== undefined && chrome.extension.getBackgroundPage !== undefined && chrome.extension.getBackgroundPage() === window;
  }

  isPopup() {
    return chrome !== undefined && chrome.extension !== undefined && chrome.extension.getBackgroundPage !== undefined && chrome.extension.getBackgroundPage() !== window;
  }

  isContentScript() {
    return chrome !== undefined && chrome.extension !== undefined && chrome.extension.getBackgroundPage === undefined;
  }

  getLoadedFeatures() {
    return this.features;
  }

  trackLoadedFeature(feature) {
    this.features[feature.class] = feature;
  }

  getVersion() {
    return chrome.runtime.getManifest().version;
  }

  getURL(resource) {
    return chrome.extension.getURL(resource);
  }
};

module.exports = new Util();
