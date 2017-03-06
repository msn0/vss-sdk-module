window.VSS = {};
window.XDM = {};
export default require('imports-loader?XDM=>window.XDM&VSS=>window.VSS!exports-loader?VSS!vss-web-extension-sdk/lib/VSS.SDK');
