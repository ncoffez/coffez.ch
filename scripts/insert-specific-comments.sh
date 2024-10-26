#!/bin/bash

# Define the list of files and their corresponding comments
files=(
  "components/Header.test.ts" \
  "components/Footer.test.ts" \
  "components/Navigation.test.ts" \
  "components/Contact.test.ts" \
  "components/Events.test.ts" \
  "components/EventCard.test.ts" \
  "components/GalleryCover.test.ts" \
  "components/GalleryMasonry.test.ts" \
  "components/languageSwitcher.test.ts" \
  "components/ui/Datepicker.test.ts" \
  "components/ui/lightBox.test.ts" \
  "components/ui/imageDropZone.test.ts" \
  "components/ui/createNewEvent.test.ts" \
  "components/ui/copyLink.test.ts" \
  "pages/index.test.ts" \
  "pages/admin/event/new.test.ts" \
  "pages/admin/event/[id].test.ts" \
  "pages/gallery/[id].test.ts" \
  "pages/live/index.test.ts" \
  "pages/live/[event].test.ts" \
  "composables/gallery.test.ts" \
  "composables/message.test.ts" \
  "composables/useCurrentUser.test.ts" \
  "utils/createResizedImageCopy.test.ts" \
  "utils/downloadImage.test.ts" \
  "utils/dateFromTimestamp.test.ts" \
  "server/api/getEvent/latest.test.ts" \
  "server/api/sendMailConfirmation.test.ts"
)

# Define the corresponding comments for each file
comments=(
  "// These are often static, but if they contain any dynamic elements (e.g., links, language switchers), make sure to test their rendering and behavior." \
  "// These are often static, but if they contain any dynamic elements (e.g., links, language switchers), make sure to test their rendering and behavior." \
  "// Verify that the navigation behaves correctly, especially if it dynamically adjusts based on user state or routing. Test that all navigation links lead to the correct pages." \
  "// Test for validation, submission functionality, and error handling, since this component handles user input." \
  "// Ensure the event details render correctly and user interactions such as clicking and filtering work as expected." \
  "// Ensure the event details render correctly and user interactions such as clicking and filtering work as expected." \
  "// Test that images and videos load correctly, and that lightboxes or image enlargement work as expected." \
  "// Test that images and videos load correctly, and that lightboxes or image enlargement work as expected." \
  "// Ensure that the language switching functionality works correctly and does not break other components." \
  "// Test the date selection, boundary cases, and that the UI reflects the correct date." \
  "// Ensure that the lightbox component opens, closes, and navigates through images or videos correctly." \
  "// Test the drag-and-drop functionality, file upload progress, and error handling." \
  "// Verify form validation, input handling, and that the event creation process works end-to-end." \
  "// Ensure that the copy functionality works as expected and handles different link formats correctly." \
  "// Test the home page rendering and dynamic content, and ensure important elements load correctly." \
  "// Ensure that event creation works properly, including input validation and form submission." \
  "// Verify that the event details are loaded correctly and all interactions work as expected." \
  "// Ensure the gallery content loads correctly and any interactions (e.g., lightbox or filtering) work as expected." \
  "// Verify that live events are listed correctly and that the user can access them without issues." \
  "// Ensure that live event details are displayed correctly and real-time interactions work as expected." \
  "// Test the gallery composable, ensuring proper state management and fetching of data." \
  "// Verify the message composable handles messages correctly, including different message types." \
  "// Ensure the user composable correctly handles user state and data fetching." \
  "// Test that the image resizing utility works correctly and handles various image formats and edge cases." \
  "// Verify that images are downloaded correctly and handle different file types appropriately." \
  "// Ensure that the date is correctly converted from a timestamp, including handling edge cases." \
  "// Verify the API returns the latest event correctly, ensuring correct data structure and error handling." \
  "// Ensure that the email confirmation is sent successfully and error handling works correctly."
)

# Function to add the specific comment to a test file
insert_comment_to_file() {
  local file=$1
  local comment=$2

  # Check if the file already contains the comment
  if grep -q "$comment" "$file"; then
    echo "$file already contains the comment, skipping."
  else
    # Insert the comment at the top of the file
    echo -e "$comment\n\n$(cat "$file")" > "$file"
    echo "Inserted comment into $file"
  fi
}

# Loop through the list of files and insert the corresponding comments
for i in "${!files[@]}"; do
  file="${files[$i]}"
  comment="${comments[$i]}"
  
  if [ -f "$file" ]; then
    insert_comment_to_file "$file" "$comment"
  else
    echo "$file not found, skipping."
  fi
done

echo "All specified test files have been updated with comments!"
