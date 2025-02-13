const conf = {
  appwriteUrl: "https://cloud.appwrite.io/v1", //String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: "679204f900083ed8eb9f", // String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: "6792113700148e54dc85", //String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: "6792116d00358674c428", // String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: "679214c1002b3a36775e", //String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf;
