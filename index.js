module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }
  
//Defines a Phrase Object
function Phrase(content){
    this.content = content;

    // Returns the letters in the content.
    // For example:
    //   new Phrase("Hello, world!").letters() === "Helloworld"
    this.letters = function letters() {
        const letterRegEx = /[a-z]/gi;
        return (this.content.match(letterRegEx) || []).join("");
    }

    //Return content processed by palindrome testing.
    this.processedContent = function processedContent(){
        return this.letters().toLowerCase();
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        if (this.processedContent()){
            return this.processedContent() === this.processedContent().reverse();
        }
        else{
            return false;
        }
    }
}
