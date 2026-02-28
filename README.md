# GOG-Title-Lookup
Simple Tampermonkey script that will look up game description from Steam and output to a little info box in your browser.

Do you like GOG but find the lack of information doesn't gel? Tired of having to manually look up game titles in a separate tab? 
So am I! No more I say!


**What this script does**:
1. Reads game title from the game's download page
2. Looks up the PUBLIC relevant information from Steam store
3. After a brief delay (1 second-ish), will output description in an info box on the top right
4. You can choose to:
   - Close the box OR
   - Click the "View on Steam" button and the relevant game's Steam page will open in a separate tab
5. TA-DA!


**What this script does NOT do (and never will)**:
1. Pull info from your steam account
2. Pull info from non-public sources
3. Run in background/collect data


**What you will need**:
- Tampermonkey (or Violentmonkey)
- Firefox (preferably but i'm not your keeper)

**How to install**:
Method 1:
1. Install Tampermonkey
2. Click on GOG Title Lookup - Info Box-1.1.user.js file in this repo
3. Click "Raw", on the right
4. Tampermonkey will ask to install
5. Profit

Method 2:
1. Click on green Code button in this repo -> download zip
2. Click Tampermonkey icon -> Dashboard
3. Drag and drop user.js file into the Tampermonkey window
4. Tampermonkey will open an install page
5. Click Install


**Help! I can't install!** (ETA: 5 minutes)
1. Click Tampermonkey icon -> Create new Script
2. Delete ALL the template code and paste in ALL the script 
   - Click on GOG Title Lookup - Info Box-1.1.user.js and copy the script entirely
3. Within Tampermonkey window, click File -> Save
4. The script should be auto-enabled, but if you want to double check:
   - Tampermonkey icon -> Dashboard OR
   - Within the Tampermonkey window, click Installed Scripts tab
5. If the script is ticked green, you're done!

**Please let me know of any issues, questions, or comments. Enjoy!**
