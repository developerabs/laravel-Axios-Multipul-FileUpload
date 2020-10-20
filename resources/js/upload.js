const { default: Axios } = require("axios");

$('.fileAddBtn').on('click', function () {
    let addTableRow =
        "<tr>"+
            "<td><input class='fileInput form-control' type='file'></td>"+
            "<td class='fileSize'>File Size</td>"+
            "<td><button class='fileCancelBtn btn btn-danger btn-sm'>Cancel</button></td>"+
            "<td><button class='fileUploadbtn btn btn-primary btn-sm'>Upload</button></td>"+
           " <td class='fileUpMb'>Uploaded(MB)</td>"+
            "<td class='filePercentage'>Uploaded(%)</td>"+
            "<td class='fileStatus'>Status</td>"+
       " </tr>";
    //add new row when click fileAddBtn   
    $('.fileList').append(addTableRow);

    //remove row
    $('.fileCancelBtn').on('click', function () {
        $(this).parents('tr').remove();
    })
    //calculate file size and show in the row
    $('.fileInput').on('change', function () {
        let myfile = $(this).prop('files');
        let myfileSize = ((myfile[0].size)/(1024*1024)).toFixed(2);
        $(this).closest('tr').find('.fileSize').html(myfileSize + "MB");
    })

    $('.fileUploadbtn').on('click', function (event) {
        let myfile = $(this).closest('tr').find('.fileInput').prop('files');
        let fileUpMb = $(this).closest('tr').find('.fileUpMb');
        let filePercentage = $(this).closest('tr').find('.filePercentage');
        let fileStatus = $(this).closest('tr').find('.fileStatus');
        let Upbtn = $(this)

        let fromData = new FormData();
        fromData.append('fileKey',myfile[0]);
        onFileUpload(fromData,fileUpMb,filePercentage,fileStatus,Upbtn);
        event.preventDefault();
        event.stopImmediatePropagation();
    })
})


function onFileUpload(fromData,fileUpMb,filePercentage,fileStatus,Upbtn) {
    fileStatus.html('Uploading....');
    Upbtn.prop('disabled',true);
    let url = '/fileUp';
    let config = {
        headers:{'content-type':'multipart/form-data'},
        onUploadProgress:function (progressEvent){
            let upMb = (progressEvent.loaded/(1024*1024)).toFixed(2)+" MB";
            let upPer = ((progressEvent.loaded*100)/progressEvent.total).toFixed(2)+" %";
            fileUpMb.html(upMb)
            filePercentage.html(upPer)
        }
    }
    axios.post(url,fromData,config)
    .then(function (response) {
        if(response.status==200){
            fileStatus.html('Success');
            Upbtn.prop('disabled',false);
        }else{
            fileStatus.html('fail');
            Upbtn.prop('disabled',false);
        }
    }).catch(function () {
        fileStatus.html('fail');
        Upbtn.prop('disabled',false);
    })
}