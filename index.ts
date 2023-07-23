const app = require('express')()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const port = 8080

app.use(function(req : any, res : any, next : any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
    next();
});


app.get('/', (req : any, res : any) => {
    res.send('Hello World!')
    }
)

app.post('/upload', upload.single('image'), (req : any, res : any) => {
    console.log(req.file)
    res.send('File uploaded!')
    }
)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)