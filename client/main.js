Template.home.events({
    "click button.upload": function(){
        var files = $("input.file_bag")[0].files;
        S3.upload({
                files:files,
                path:"/uploads"
            },function(e,r){
                console.log(r);
                var uploadedFile = S3.collection.findOne();
                var uploadedFileUrl = uploadedFile.secure_url;
                Images.insert({url: uploadedFileUrl });
                console.log("inserted Image");
        });


    }
});

Template.home.helpers({
    "files": function(){
        return S3.collection.find();
    }
});
