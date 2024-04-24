# GoogleDriveDatePrefixer
Prefix all files in multiple folders in Google Drive automatically after upload. Folders can be anywhere in your Google Drive.

Does NOT rename files in subfolders of chosen folders! That was not what I needed.


# HowTo
 1. in GoogleDrive, create a new folder for your Apps-Script.
 2. Click on "NEW" -> "more" - "Google Apps Script" to create your script
 3. paste content of "code.gs" into editor
 4. replace IDs in folderIds array with the IDs of the folders this script should be active in.  
    Get folder IDs by copying the share url of the folders and use string between "drive.google.com/drive/folders/" and "?"  
    example:  
    https://drive.google.com/drive/folders/0BxssOEieMZCaFkk5dCVpW3pRaVE?resourcekey=0-6br6ttYws2b03E_akEVHHA&usp=drive_link  
    folder-ID = 0BxssOEieMZCaFkk5dCVpW3pRaVE
5. Save Script and execute to test. You will need to grant access, just follow instructions. 
6. in left menu, click on "Trigger"
7. add new Trigger - Button at bottom of the triggers page.
8. select checkForNewFiles as function to run
9. select time-based
10. select your execution frequency. probably once an hour is enough, choose as you like.
11. save, you will need to grant access, just follow instructions.

done, enjoy!

# License and Copyright
This is free software.
