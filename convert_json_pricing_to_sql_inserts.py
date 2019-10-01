import json
import re

regex = re.compile('[^0-9.]')

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
        yearDict = {
            "totalDischarges": totalDischarges,
            "averageCoveredCharges": averageCoveredCharges,
            "averageTotalPayments": averageTotalPayments,
            "averageMedicarePayments": averageMedicarePayments,
        }
        insertedConditionIDs[conditionCode][providerID][year] = yearDict

for conditionCode in insertedConditionIDs:
    for providerID in insertedConditionIDs[conditionCode]:
        recentYear = max(list(insertedConditionIDs[conditionCode][providerID].keys()))

        recentYearDict = insertedConditionIDs[conditionCode][providerID][recentYear]
        totalDischarges = recentYearDict["totalDischarges"]
        averageCoveredCharges = recentYearDict["averageCoveredCharges"]
        averageTotalPayments = recentYearDict["averageTotalPayments"]
        averageMedicarePayments = recentYearDict["averageMedicarePayments"]

        averageCoveredCharges = regex.sub('', averageTotalPayments)
        averageTotalPayments = regex.sub('', averageTotalPayments)
        averageMedicarePayments = regex.sub('', averageMedicarePayments)

        statement = (
            "INSERT INTO `Pricing`(`providerID`,`conditionCode`, `totalDischarges`"
            ", `averageCoveredCharges`, `averageTotalPayments`,"
            "`averageMedicarePayments`, `year`"
            f")VALUES({providerID}, {conditionCode}, {totalDischarges},"
            f" {averageCoveredCharges}, {averageTotalPayments}, {averageMedicarePayments}, "
            f"{year}) \n"
        )

        outputFile.write(statement)

outputFile.close()
