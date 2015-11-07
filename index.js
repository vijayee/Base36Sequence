/*
    This module starts a sequence from the given base10 or base36 encoded integer
*/
var sequence= function(start){
    var current;

    if (!Number.isInteger(start)){
        current= this.decode(start) || 0;
    }
    else {
        current = start;
    }
    //Display current Sequence Number do not increment
    this.current= function(){
        return current.toString(36);
    };
    //Get current Sequence Number and increment sequence
    this.next= function(){
        var next= current.toString(36);
        current++;
        return next
    };
};
//Decode a base36 integer
sequence.prototype.decode= function(num){
    if (!this.isBase36(num)){
        return null;
    }
    return parseInt(num, 36);
};
//Encode an integer into a base36 integer
sequence.prototype.encode= function(num){
    if (!Number.isInteger(num)){
        return 0;
    }
    return num.toString(36);
};
//Detect whether a string is a base36 integer
sequence.prototype.isBase36= function(num){
    var re= /^(0x|0X)?[a-zA-Z0-9]+$/;
    return re.test(num);
}

module.exports= sequence;
