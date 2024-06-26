function checkForNewFiles() {
  // Array containing IDs of all folders where files should be renamed
  // Replace "<folderID...>" with the IDs of your Google Drive folders. 
  // Get IDs by copying the share url and use string between "drive.google.com/drive/folders/" and "?"
  var folderIds = [
    "<folderID1>",
    "<folderID2>",
    "<folderID3>"
    ];

  for (var i = 0; i < folderIds.length; i++) {
    var folderId = folderIds[i];
    processFolder(folderId);
  }
}

function processFolder(folderId) {
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();

  var currentDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmm');
  // Regular expression to match any date in 'yyyyMMdd' format followed by an underscore, 
  // so files that already have at least the date as prefix won't be renamed
  var regex = new RegExp("^\\d{8}(_|-)");

  while (files.hasNext()) {
    var file = files.next();
    if (!regex.test(file.getName())) {
      var newName = currentDate + "_" + file.getName();
      file.setName(newName);
    }
  }
}
