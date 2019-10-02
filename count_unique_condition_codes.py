
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
        cut_at_condition_code = line[168:]
        condition_code = ""

        char_index = 0
        char = cut_at_condition_code[char_index]
        while char != ",":
            condition_code += char
            char_index += 1
            char = cut_at_condition_code[char_index]

        condition_codes.add(condition_code)

        line = input_file.readline()


    input_file.close()

print(len(condition_codes))
print(condition_codes)
