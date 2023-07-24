import * as functions from 'firebase-functions';
import admin from '../firestore'
import sharp from 'sharp';
import axios from 'axios';

admin.initializeApp();

export async function reduceImage(snap: functions.firestore.DocumentSnapshot, context: functions.EventContext) {
    const data = snap.data();

    // Get the URL of the image
    const url = data?.urlZapier;

    // Download the image
    const imageBuffer = await axios.get(url, { responseType: 'arraybuffer' }).then(response => Buffer.from(response.data, 'binary'));

    // Reduce the size of the image
    const reducedImageBuffer = await sharp(imageBuffer).resize(2480, 3508).toBuffer(); // A6 size at 300 dpi

    // Define paths for firebase storage
    const originalPath = `images/portraits/${context.params.id}`;
    const reducedPath = `images/portraits/${context.params.id}_reduced`;

    // Upload original and reduced images to Firebase storage
    const bucket = admin.storage().bucket();
    
    await bucket.file(originalPath).save(imageBuffer, { contentType: 'image/png' });
    await bucket.file(reducedPath).save(reducedImageBuffer, { contentType: 'image/png' });

    // Get the URLs of the stored images
    const originalUrl = await bucket.file(originalPath).getSignedUrl({ action: 'read', expires: '03-01-2500' });
    const reducedUrl = await bucket.file(reducedPath).getSignedUrl({ action: 'read', expires: '03-01-2500' });
    
    // Update Firestore document with URLs of the stored images
    await admin.firestore().collection('portraits').doc(context.params.id).update({ urlFirebaseOriginal: originalUrl[0], urlFirebaseReduced: reducedUrl[0] });
}