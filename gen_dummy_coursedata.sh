#!/bin/bash

# Function to repeat a string n times
repeat_string() {
    local str="$1"
    local count="$2"
    printf "%0.s$str" $(seq 1 $count)
}

# Start of JSON array
echo '[' > dummy_courses.json

# Generate 50 course objects
for i in {1..50}
do
    name="course$i"
    description=$(repeat_string "$name " 30)
    location=$((($i + 1) % 15))
    instructor=$((($i + 3) % 20))

    # Create JSON object
    cat << EOF >> dummy_courses.json
  {
    "ID": $i,
    "name": "$name",
    "description": "$description",
    "location": $location,
    "instructor": $instructor
  }$([ $i -lt 50 ] && echo ',')
EOF
done

# End of JSON array
echo ']' >> dummy_courses.json

echo "Courses have been written to dummy_courses.json"