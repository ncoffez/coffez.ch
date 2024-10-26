
# Testing Guide for a Small Website

For a small website like yours with a few hundred accesses per month, it’s essential to focus your testing efforts on the components and functionality that are most critical to the user experience and overall functionality. Here’s a practical approach to prioritize what to test:

### 1. **Core UI Components**
   - **Header.vue** and **Footer.vue**: These are often static, but if they contain any dynamic elements (e.g., links, language switchers), make sure to test their rendering and behavior.
   - **Navigation.vue**: Verify that the navigation behaves correctly, especially if it dynamically adjusts based on user state or routing. Test that all navigation links lead to the correct pages.

### 2. **Key Interactive Components**
   - **Contact.vue**: If this handles user input (such as a contact form), it should be tested for validation, submission functionality, and error handling.
   - **Events.vue** and **EventCard.vue**: If events are a critical part of your website, ensure these components render event details correctly and handle user interactions (e.g., clicking an event or filtering events).
   - **languageSwitcher.vue**: Ensure that the language switching functionality works correctly, changing the website’s language without breaking other elements.
   - **Gallery-related components (GalleryCover.vue, GalleryMasonry.vue)**: Test that images and videos load correctly, and if there are any interactive features like lightboxes or image enlargement, ensure they function as expected.

### 3. **Dynamic Components**
   - **ui components** like **Datepicker.vue**, **imageDropZone.vue**, and **lightBox.vue**: Since these components handle more complex behavior (e.g., file uploads, date selection, or modal popups), they should be thoroughly tested for both functionality and edge cases.

### 4. **Critical Logic and Functions**
   - **Composables** (`gallery.ts`, `message.ts`, `useCurrentUser.ts`): Ensure that any shared logic, especially around fetching data, managing state, or handling users, is well-tested. These are central to keeping your site functioning properly.
   - **toRelativeDate.ts** (already included): This utility seems crucial for formatting dates. Continue testing it with different inputs to ensure date formatting logic is correct.

### 5. **Pages**
   - **Admin Pages**: If you're testing admin functionality (e.g., creating events, uploading galleries), these should be tested to ensure they’re secure and function properly, especially if there are forms or file uploads involved.
   - **Gallery and Event Pages**: Since these pages seem content-heavy, test that the correct content is displayed and that any dynamic elements (like media or event details) are handled correctly.

### 6. **Server-side APIs**
   - **API endpoints** (`getEvent`, `getPortrait`, `sendMailConfirmation`): If your site relies on server-side processing, make sure to include unit tests for your API routes. These should handle expected data, as well as edge cases, such as missing data or API failures.

### Suggested Testing Priority:

- **High Priority**: Navigation, Contact form, Event and Gallery components, language switching, critical API routes.
- **Medium Priority**: Header/Footer, Composables, Datepicker, GalleryMasonry.
- **Low Priority**: Static content, basic layout.

In general, focus your tests on components that directly affect user experience or involve business-critical logic, such as user interaction, dynamic data, and anything that might break or negatively affect usability.
