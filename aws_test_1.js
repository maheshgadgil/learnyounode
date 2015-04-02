var AWS = require('aws-sdk');
//AWS.config.update({
//  httpOptions: {
//    proxy: 'http://AMER-US-CON_SY-PX01.bed.sap.corp:8080'
//  }
//}); 
AWS.config.loadFromPath('xxx_aws.json');
var s3 = new AWS.S3(); 
  var params = {Bucket: 'xxx', Key: 'mykey', Body: 'Hello!'};

  s3.putObject(params, function(err, data) {

      if (err)       

          console.log(err)     

      else       console.log("Successfully uploaded data to test-s3/myKey");   

   });





