# GoogleDriveDatePrefixer

A Google Apps Script that automatically adds a date prefix to new files in selected Google Drive folders:

```
Invoice.pdf  →  20261114-1732_Invoice.pdf
```

The folders can be anywhere in your Google Drive.

## How it works

- A time-based trigger runs the function `checkForNewFiles` at a frequency you choose (e.g. once an hour).
- Every file in the configured folders that does not already start with a date is renamed to `yyyyMMdd-HHmm_<original name>`.
- Files whose names already start with 8 digits followed by `_` or `-` (e.g. `20240101_…` or `20240101-…`) are skipped, so nothing is prefixed twice.

## Limitations

- **Files in subfolders are NOT renamed.** Only files directly inside the configured folders are processed.
- **The date is the time the script runs, not the upload time.** With an hourly trigger, the prefix can differ from the actual upload time by up to one hour (more with longer intervals).
- The time zone is taken from the Apps Script project settings (gear icon "Project Settings" → "Time zone").
- Google limits a single script execution to 6 minutes. This is only relevant for folders with a very large number of files.

## Setup

1. In Google Drive, create a new folder for your Apps Script (optional, but keeps things tidy).
2. Click **New** → **More** → **Google Apps Script** to create a new script project. Alternatively, go to [script.google.com](https://script.google.com) directly.
3. Paste the content of `code.gs` into the editor.
4. Replace the placeholders in the `folderIds` array with the IDs of the folders the script should work on.
   To get a folder ID, copy the folder's share URL and take the part between `drive.google.com/drive/folders/` and `?`.
   Example:
   ```
   https://drive.google.com/drive/folders/0BxssOEieMZCaFkk5dCVpW3pRaVE?resourcekey=0-6br6ttYws2b03E_akEVHHA&usp=drive_link
   ```
   Folder ID: `0BxssOEieMZCaFkk5dCVpW3pRaVE`
5. Save the script and run `checkForNewFiles` once to test it. Google will ask you to grant access; just follow the instructions.
6. In the left menu, click **Triggers** (clock icon).
7. Click **Add Trigger** at the bottom right of the page.
8. Select `checkForNewFiles` as the function to run.
9. Select **Time-driven** as the event source.
10. Select your execution frequency. Once an hour is usually enough; choose whatever suits you.
11. Save. If Google asks you to grant access again, follow the instructions.

Done, enjoy!

## Permissions

The script uses `DriveApp`, so Google asks for access to your Google Drive. The script only reads and renames files in the folders listed in `folderIds`; it does not delete, move or share anything.

## Uninstall

Delete the trigger under **Triggers** in the Apps Script editor. Optionally delete the script project as well. Files that have already been renamed keep their prefix.

## License

Copyright © Christian Melius

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, version 3 of the License. See [LICENSE](LICENSE) for details.
