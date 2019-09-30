import json

DATA_FILE = "DRGChargesData.json"
OUTPUT_FILE = "pricing.sql"

rows = json.load(open(DATA_FILE))

try:
    outputFile = open(OUTPUT_FILE, 'a')
except:
    print("ERROR: failed to open file")

insertedConditionIDs = {}
for rowIndex in range(len(rows)):
    row = rows[rowIndex]

    dRGDescription = row.get("dRGDefinition").split(" ")
    conditionCode = dRGDescription[0]
    providerID = row.get("providerId")
    totalDischarges = row.get("totalDischarges")
    averageCoveredCharges = row.get("averageCoveredCharges")
    averageTotalPayments = row.get("averageTotalPayments")
    averageMedicarePayments = row.get("averageMedicarePayments")
    year = row.get("year")

    if insertedConditionIDs.get(conditionCode) is None:
        insertedConditionIDs[conditionCode] = {}
    if insertedConditionIDs[conditionCode].get(providerID) is None:
        insertedConditionIDs[conditionCode][providerID] = {}
    if insertedConditionIDs[conditionCode][providerID].get(year) is None:
        insertedConditionIDs[conditionCode][providerID][year] = {
            "totalDischarges": totalDischarges,
            "averageCoveredCharges": averageCoveredCharges,
            "averageTotalPayments": averageTotalPayments,
            "averageMedicarePayments": averageMedicarePayments,
        }

for conditionCode in insertedConditionIDs:
    providerDict = insertedConditionIDs[conditionCode]
    for providerID in providerDict:
        yearDict = providerDict[providerID]
        mostRecentYear = max(list(yearDict.keys()))

        totalDischarges = yearDict[mostRecentYear].get("totalDischarges")
        averageCoveredCharges = yearDict[mostRecentYear].get("averageCoveredCharges")
        averageTotalPayments = yearDict[mostRecentYear].get("averageTotalPayments")
        averageMedicarePayments = yearDict[mostRecentYear].get("averageMedicarePayments")

        statement = (
            "INSERT INTO `Pricing`(`providerID`,`conditionCode`, `totalDischarges`"
            ", `averageCoveredCharges`, `averageTotalPayments`,"
            "`averageMedicarePayments`, `year`"
            f")VALUES({providerID}, {conditionCode}, {totalDischarges},"
            f" {averageCoveredCharges}, {averageTotalPayments}, {averageMedicarePayments}, "
            f"{mostRecentYear}) \n"
        )

        outputFile.write(statement)

outputFile.close()
