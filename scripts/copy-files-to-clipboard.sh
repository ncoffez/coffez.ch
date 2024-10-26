#!/bin/bash

# List of test files
files=(
  "components/Header.vue"
  "components/Footer.vue"
  "components/Navigation.vue"
  "components/Contact.vue"
  "components/Events.vue"
  "components/EventCard.vue"
  "components/GalleryCover.vue"
  "components/GalleryMasonry.vue"
  "components/languageSwitcher.vue"
  "components/ui/Datepicker.vue"
  "components/ui/lightBox.vue"
  "components/ui/imageDropZone.vue"
  "components/ui/createNewEvent.vue"
  "components/ui/copyLink.vue"
  "pages/index.vue"
  "pages/admin/event/new.vue"
  "pages/admin/event/[id].vue"
  "pages/gallery/[id].vue"
  "pages/live/index.vue"
  "pages/live/[event].vue"
  "composables/gallery.ts"
  "composables/message.ts"
  "composables/useCurrentUser.ts"
  "utils/toRelativeDate.ts"
  "utils/createResizedImageCopy.ts"
  "utils/downloadImage.ts"
  "utils/dateFromTimestamp.ts"
  "server/api/getEvent/latest.ts"
  "server/api/sendMailConfirmation.ts"
)

# Function to copy the file content to the clipboard
copy_to_clipboard() {
  local file=$1

  if [ -f "$file" ]; then
    # Copy filename as the title followed by the file content
    content="Title: ${file}\n\n$(cat "$file")"
    
    # Copy content to clipboard (using pbcopy for macOS)
    echo -e "$content" | pbcopy

    echo "Content of $file has been copied to the clipboard."
  else
    echo "$file not found, skipping."
  fi
}

# Loop through the list of files
for file in "${files[@]}"; do
  # Copy file content to clipboard
  copy_to_clipboard "$file"
  
  # Ask for key input before continuing to the next file
  read -n 1 -s -r -p "Press any key to continue to the next file..."
  echo ""
done

echo "All files have been copied to the clipboard!"
