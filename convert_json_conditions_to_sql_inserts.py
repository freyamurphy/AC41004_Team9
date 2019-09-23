import json

DATA_FILE = "DRGChargesData.json"
OUTPUT_FILE = "conditions.sql"

print("Starting load")
rows = json.load(open(DATA_FILE))
print("Finished load")

try:
    outputFile = open(OUTPUT_FILE, 'a')
except:
    print("ERROR: failed to open file")

insertedIDs = {}
for rowIndex in range(len(rows)):
    row = rows[rowIndex]

    dRGDescription = row.get("dRGDefinition").split(" ", 2)
    code = dRGDescription[0]
    try:
        description = dRGDescription[2]
    except IndexError:
        description = ""

    if insertedIDs.get(code) is None:
        insertedIDs[code] = True
        statement = (
            "INSERT INTO `conditions`(`Code`,`Description`"
            f")VALUES({code}, '{description}` \n"
        )

        outputFile.write(statement)

outputFile.close()
