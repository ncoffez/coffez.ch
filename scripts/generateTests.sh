#!/bin/bash

# List of test files to create
files=(
  "components/Header.test.ts"
  "components/Footer.test.ts"
  "components/Navigation.test.ts"
  "components/Contact.test.ts"
  "components/Events.test.ts"
  "components/EventCard.test.ts"
  "components/GalleryCover.test.ts"
  "components/GalleryMasonry.test.ts"
  "components/languageSwitcher.test.ts"
  "components/ui/Datepicker.test.ts"
  "components/ui/lightBox.test.ts"
  "components/ui/imageDropZone.test.ts"
  "components/ui/createNewEvent.test.ts"
  "components/ui/copyLink.test.ts"
  "pages/index.test.ts"
  "pages/admin/event/new.test.ts"
  "pages/admin/event/[id].test.ts"
  "pages/gallery/[id].test.ts"
  "pages/live/index.test.ts"
  "pages/live/[event].test.ts"
  "composables/gallery.test.ts"
  "composables/message.test.ts"
  "composables/useCurrentUser.test.ts"
  # "utils/toRelativeDate.test.ts"
  "utils/createResizedImageCopy.test.ts"
  "utils/downloadImage.test.ts"
  # "utils/dateFromTimestamp.test.ts"
  "server/api/getEvent/latest.test.ts"
  "server/api/sendMailConfirmation.test.ts"
)

# Loop through the file list and create each file with a basic TODO structure
for file in "${files[@]}"; do
  # Create the file's directory if it doesn't exist
  mkdir -p "$(dirname "$file")"
  
  # Create the file and populate with a basic TODO test structure
  if [ ! -f "$file" ]; then
    cat <<EOL > "$file"
import { describe, test } from 'bun:test'

describe('${file}', () => {
  test.todo('Test not yet implemented: ${file}', () => {
// This test is currently a TODO. Implement it to ensure functionality.
// It will fail by default to indicate it needs attention.
//
// Refer to the testing guide in ./testing.md for details.
  })
})
EOL
    echo "Created $file"
  else
    echo "$file already exists, skipping."
  fi
done

echo "Test files with 'test.todo' generation completed!"
