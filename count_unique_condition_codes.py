
# for each line in file
  # get condition code
  # if code is not in set
    # add code to set
# count number of codes in set

INPUT_FILE = "pricing.sql"

with open(INPUT_FILE, "r") as input_file:
    line = input_file.readline()

    condition_codes = set()

    while line:
        insert_statement = line.split(",")

        try:
            condition_code = insert_statement[7]
            print(condition_code)

            if len(condition_code) > 0:
                condition_codes.add(condition_code)

            line = input_file.readline()
        except:
            pass


    input_file.close()

print(len(condition_codes))
print(condition_codes)
