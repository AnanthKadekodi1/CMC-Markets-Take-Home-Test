export const handler = async(data) => {

    try{

        var flattenedJson = {};
 
        function recursive (currentData, property) {
            if (Object(currentData) !== currentData) {
    
                flattenedJson[property] = currentData;
    
            } else if (Array.isArray(currentData)) {
    
                for(var x=0, y=currentData.length; x<y; x++)
                    recursive(currentData[x], property ? property+"."+x : ""+x);
    
                if (y == 0)
                    flattenedJson[property] = [];
            } else {
    
                var isEmpty = true;
    
                for (var z in currentData) {
                    isEmpty = false;
                    recursive(currentData[z], property ? property+"."+z : z);
                }
    
                if (isEmpty)
                    flattenedJson[property] = {};
            }
        }
    
        recursive(data, "");
    
        return {
            statusCode: 200,
            body: flattenedJson
    } 

    }   catch(err) {
        
    return{
            statusCode: 400,
            body: err.message
        }
    }
    
 };
 