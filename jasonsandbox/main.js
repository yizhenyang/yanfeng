(function () {
  class JasonSandBox extends HTMLElement {
    constructor () {
      super()
      const sapFpaUiStoryIframe = top.window.document.querySelector('.sapFpaUiStoryIframe')
      if (sapFpaUiStoryIframe) {
        sapFpaUiStoryIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox')
      }
    }

    onCustomWidgetAfterUpdate (changedProps) {
    }
  }

  customElements.define('com-sap-jasonsandbox', JasonSandBox)
})()
