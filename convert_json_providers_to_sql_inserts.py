import json

DATA_FILE = "first 30 lines.json"
OUTPUT_FILE = "providers.sql"

rows = json.load(open(DATA_FILE))

try:
    outputFile = open(OUTPUT_FILE, 'a')
except:
    print("ERROR: failed to open file")

insertedIDs = {}
for row in rows:
    providerID = str(int(row.get("providerId")))    # Remove leading 0s
    providerName = row.get("providerName")
    streetAddress = row.get("providerStreetAddress")
    city = row.get("providerCity")
    state = row.get("providerState")
    zipCode = row.get("providerZipCode")
    referralRegion = row.get("hospitalReferralRegionHRRDescription")

    if insertedIDs.get(providerID) is None:
        insertedIDs[providerID] = True
        statement = (
            "INSERT INTO `provides`(`Id`,`Name`,`City`,`StreetAddress`,"
            f"`State`,`ZipCode`,`Rating`)VALUES({providerID}, '{providerName}', '{city}',"
            f"'{streetAddress}', '{state}', '{zipCode}', NULL); \n"
        )

    outputFile.write(statement)

outputFile.close()
