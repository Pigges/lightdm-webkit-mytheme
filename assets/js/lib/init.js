function init (gameWidth, gameHeight) {
    if (!gameWidth) gameWidth = 600;
    if (!gameHeight) gameHeight = 300;
    console.log(gameWidth, gameHeight);

    // Hide the address bar on iPhone/iPad
    let head    = document.getElementsByTagName('head')[0];
    let iOSMeta = document.createElement('meta');
  
    iOSMeta.name    = "apple-mobile-web-app-capable";
    iOSMeta.content = "yes";
    head.appendChild(iOSMeta);
  
    // Creates and setting up the canvas
    let canvas = document.createElement('canvas');
    
    canvas.id             = 'game';
    canvas.style.position = 'absolute';
    canvas.style.left     = '0';
    canvas.style.top      = '0';
    canvas.width          = gameWidth;
    canvas.height         = gameHeight;
  
    document.body.setAttribute("oncontextmenu", "return false");
    document.body.appendChild(canvas);
    return canvas;
  }
export {init}