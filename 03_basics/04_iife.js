// immediately invoked functions expression (iife)

(function chai (){
    console.log(`DB CONNECTED`);

})();  // if we did't close the semicolon then it will give error.  
// iife syntax curly brases close with parenthesis 
// chai()

// Avoid polluting the global namespace - iife

( (name)=>{
    console.log(`DB CONNECTED Two ${name}`);
})('ranjeet')

// write two iife (interview question)
