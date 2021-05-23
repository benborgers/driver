const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT), // Added in Vercel dashboard
    scopes: ['https://www.googleapis.com/auth/drive.readonly']
})

const docs = google.docs({
    version: 'v1',
    auth
})

module.exports = (req, res) => {
    const id = req.query.id

    if(!id) {
        return res.status(400).json({
            error: 'No Google Doc ID provided as `id` query paramter.'
        })
    }

    docs.documents.get({ documentId: id, suggestionsViewMode: 'PREVIEW_WITHOUT_SUGGESTIONS' }, (error, result) => {
        if(error) {
            return res.status(500).json({ error })
        }

        res.json(result.data)
    })
}
