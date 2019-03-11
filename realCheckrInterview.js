<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
    <style>
      body {
        background-color: #1d2126;
        color: white;
      }
      
      .outer-progress {
       width: 200px;
        background-color: white;
      }
      .inner-progress {
        width:0px;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/jsx">

class App extends React.Component {
// Make a download button that starts a progress bar
// eventually make multiple download buttons that all start whenever you hit download
  constructor(options){
    super(options)
    this.state = {
      isDownloading: false,
      numProgressBars:0
    }
  }
  
  render () {
    return (
      <div>
      <h1>Hello, this is your React template!</h1>
        <button onClick={this.addProgressBar}>Download</button>
        {this.renderProgressBars()}
      </div>
    );
  }
  
  renderProgressBars=()=> {
 
    let elementArray = []
    // add as many progress bars as I need
    for (var i=0;i<this.state.numProgressBars;i++) {
      elementArray.push(< ProgressBar />)
    }
    return elementArray
    
  }
  
  addProgressBar=()=> {
    
   let currVal = this.state.numProgressBars 
   this.setState({
    numProgressBars: currVal+1
   })
  }
  // Each time progress goes up it goes up by 10, 10 total intervals
  // each interavl is 200 ms for a total of 2000ms
}

class ProgressBar extends React.Component {
  
 constructor(options){
  super(options)
   this.state = {
    progress:0 
     
   }
   this.intervalId= null
   
   this.startDownloading()
 }
  
  render(){
    let styleString={
      width:this.state.progress+"%"
    }
   return (
    <div>
       <div className="outer-progress">
         <div className="inner-progress" style={styleString}>
           {this.state.progress}
         </div>
      </div>
     </div>  
   ) 
  }
  
 startDownloading = () =>{
   this.intervalId = setInterval(this.incrementProgress, 200)
    
  }
  
  
  incrementProgress = () => {
    // check in here if we should be done and then clearInterval if so
    let currentProgress= this.state.progress
    if (currentProgress >=100) return clearInterval(this.intervalId)

    //
    this.setState({
      progress: currentProgress+10
    })
  }
  
  
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

    </script>
  </body>
</html>
