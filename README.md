# google-sheets-automation
Use this to automate copy pasting from supporting sheets to a summary sheet

# 🧾 Google Sheets Feeder-to-Summary Automation Script

This Google Apps Script automates the process of copying data from multiple "feeder" sheets and compiling it into a single "Summary" sheet — great for reporting, aggregation, or dashboarding.

---

## ✨ Features

- Pulls data from multiple sheets specified in the script
- Automatically detects the used range of each sheet (no need to specify `A1:C10`, etc.)
- Leaves a blank row between pasted blocks for clarity
- Adds a light green row before each block with the source sheet’s name
- Appends to existing content (does not overwrite the Summary)
- Preserves formatting and column alignment
- Easy to customize and extend

---

## 🛠️ How to Use

1. Open your target Google Sheet
2. Go to `Extensions > Apps Script`
3. Paste the code from the attached repo
4. Update the `sheetNames` array with the names of your feeder sheets
5. Make sure you have a master sheet named `"Summary"` or rename it to summary or change the name in the code from "Summary" to whatever your desired master sheet name is
6. Run the `copyToMasterSheet` function
7. Grant permissions when prompted

---

## 📋 Example Sheet Structure

- Sheet A
- Sheet B
- Sheet C
- ✅ All data is pulled into a sheet named `Summary`

---

## 📌 Customization Ideas

- Add a timestamp or divider before each block
- Automatically clear old Summary content before each run
- Add filtering or deduplication logic
- Include metadata like last updated or row counts

---

## 🪪 License

This project is licensed under the [MIT License](./LICENSE).  
Feel free to use, modify, or distribute it — with attribution.

---

## 📧 Contact

Built with ❤️ by Yashwini
Questions or feedback? Feel free to open an issue or reach out.
