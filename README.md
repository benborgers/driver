# Driver

This project lets you use a simple hosted API to read Google Drive and Google Docs content, without needing to mess with authentication or service accounts.

Your document should be shared with public viewing enabled for these to work.

## Doc

```
GET https://driver-api.vercel.app/doc?id={documentId}
```

Returns Google's data on a specific Google Doc.
