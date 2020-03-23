
function clickMe(){

    let container = document.querySelector( '.container' );
  
    container.addEventListener( 'click', ( event ) => {
      
      if( event.target.matches( '.clickable' ) ){
        alert( "This is an alert" );
      }
  
      console.log( event.currentTarget );
      console.log( event.target.match );
    });
  
  }
  
  function addElement(){
  
    let header = document.querySelector( 'h1' );
  
    header.addEventListener( 'click', ( event ) =>{
  
      let container = document.querySelector( '.container' );
  
      container.innerHTML += 
        `
          <p class="clickable">
            Click me to show an alert!
          </p>
          <p class="no-clickable">
            Nothing will happen
          </p>
        `;
    });
  
  }
  
  function init(){
    addElement();
    clickMe();
  }
  
  init();